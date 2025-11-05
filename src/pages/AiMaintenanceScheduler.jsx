import React, { useEffect, useMemo, useRef, useState } from "react";
import "./AiMaintenanceScheduler.css";
import { useAiEvents } from "../components/ai/AiEventBus";

/**
 * MergX V9 — AI Maintenance Scheduler
 * - Planera backup, cache-rensning, loggrotation, modul-omstart
 * - Återkommande schema: none/daily/weekly/monthly
 * - Lagring i localStorage
 * - Notifieringar via EventBus (pre-notice + run)
 * - “Smart” tidsförslag (natt, låg belastning)
 */

const STORAGE_KEY = "mergx-maintenance-jobs-v9";

const DEFAULT_JOBS = [
  {
    id: "job-backup-01",
    title: "Nattlig full backup",
    type: "Backup",
    recurrence: "Weekly",
    time: "02:15",
    weekday: 0, // 0=Sun, 1=Mon...
    enabled: true,
    lastRun: null,
    status: "Scheduled",
    notes: "Säkerhetskopia av DB + filer",
  },
  {
    id: "job-cache-01",
    title: "Cache-rensning",
    type: "Cache",
    recurrence: "Daily",
    time: "03:05",
    enabled: true,
    lastRun: null,
    status: "Scheduled",
    notes: "Rensa applikationscache & sessions",
  },
];

const JOB_TYPES = ["Backup", "Cache", "LogRotate", "ModuleRestart"];
const RECURRENCE = ["None", "Daily", "Weekly", "Monthly"];
const WEEKDAYS = ["Sön","Mån","Tis","Ons","Tors","Fre","Lör"];

function nowSv() {
  return new Date().toLocaleString("sv-SE");
}

/** Enkel “smart” tidsförslag: natt (02:00–03:30), rundar till närmaste 5 min */
function suggestLowLoadTime() {
  const baseHour = 2 + Math.floor(Math.random() * 2); // 2–3
  const baseMin = [0,5,10,15,20,25,30][Math.floor(Math.random()*7)];
  const hh = String(baseHour).padStart(2, "0");
  const mm = String(baseMin).padStart(2, "0");
  return `${hh}:${mm}`;
}

/** Mock: kontrollera “belastning”, returnera true om ok att köra */
function canRunNowMock() {
  // simulera 80% chans att det är ok (låg belastning)
  return Math.random() < 0.8;
}

/** Beräkna nästa körning (display) */
function nextRunLabel(job) {
  if (!job.enabled) return "Avstängd";
  const today = new Date();
  const [hh, mm] = job.time.split(":").map(Number);
  const base = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hh, mm, 0, 0);

  const fmt = (d) =>
    d.toLocaleString("sv-SE", { weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });

  switch (job.recurrence) {
    case "None":
      return `${fmt(base)} (engångs)`;
    case "Daily": {
      if (base <= today) base.setDate(base.getDate() + 1);
      return fmt(base);
    }
    case "Weekly": {
      // flytta till vald veckodag
      const diff = (job.weekday - base.getDay() + 7) % 7;
      base.setDate(base.getDate() + (diff || (base <= today ? 7 : 0)));
      return fmt(base);
    }
    case "Monthly": {
      if (base <= today) base.setMonth(base.getMonth() + 1);
      return fmt(base);
    }
    default:
      return "-";
  }
}

export default function AiMaintenanceScheduler() {
  const { emitEvent } = useAiEvents();
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_JOBS;
  });

  const [form, setForm] = useState({
    title: "",
    type: "Backup",
    recurrence: "Weekly",
    time: suggestLowLoadTime(),
    weekday: 0,
    enabled: true,
    notes: "",
  });

  const intervalRef = useRef(null);

  // Persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  // Pre-notice + auto-run loop (var 10:e sekund)
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const currentTime = `${hh}:${mm}`;
      const wd = now.getDay();

      setJobs((prev) => {
        let changed = false;
        const clone = prev.map((j) => {
          if (!j.enabled) return j;

          // match på tid + recurrence
          const timeMatch = j.time === currentTime;
          const weeklyOk = j.recurrence !== "Weekly" || j.weekday === wd;
          const dailyOk = j.recurrence === "Daily";
          const noneOk = j.recurrence === "None";
          const monthlyOk = j.recurrence === "Monthly"; // förenklat: exakt tid samma datum

          const shouldConsider =
            timeMatch && (dailyOk || weeklyOk || noneOk || monthlyOk);

          if (!shouldConsider) return j;

          // Pre-notice 1 minut innan — sköts i UI via “nästa körning” label (förenklas här)

          // Körning
          if (canRunNowMock()) {
            emitEvent({
              module: "Maintenance",
              type: "info",
              message: `Startar jobb: ${j.title} (${j.type})`,
            });
            changed = true;
            return { ...j, lastRun: nowSv(), status: "Completed" };
          } else {
            emitEvent({
              module: "Maintenance",
              type: "warning",
              message: `Skjuter upp jobb p.g.a. belastning: ${j.title}`,
            });
            changed = true;
            return { ...j, lastRun: nowSv(), status: "Skipped" };
          }
        });
        return changed ? clone : prev;
      });
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, [emitEvent]);

  const nextRuns = useMemo(
    () =>
      jobs.reduce((acc, j) => {
        acc[j.id] = nextRunLabel(j);
        return acc;
      }, {}),
    [jobs]
  );

  // Actions
  const handleAdd = (e) => {
    e.preventDefault();
    const id = `job-${Date.now()}`;
    const newJob = {
      id,
      title: form.title || `${form.type} ${form.recurrence}`,
      type: form.type,
      recurrence: form.recurrence,
      time: form.time,
      weekday: Number(form.weekday),
      enabled: form.enabled,
      lastRun: null,
      status: "Scheduled",
      notes: form.notes?.trim() || "",
    };
    setJobs([newJob, ...jobs]);
    emitEvent({
      module: "Maintenance",
      type: "info",
      message: `Nytt jobb schemalagt: ${newJob.title} (${newJob.recurrence} ${newJob.time})`,
    });
    setForm((f) => ({ ...f, title: "", notes: "", time: suggestLowLoadTime() }));
  };

  const handleRunNow = (job) => {
    if (!canRunNowMock()) {
      emitEvent({
        module: "Maintenance",
        type: "warning",
        message: `För högt tryck – väntar med: ${job.title}`,
      });
      setJobs((arr) =>
        arr.map((j) =>
          j.id === job.id ? { ...j, lastRun: nowSv(), status: "Skipped" } : j
        )
      );
      return;
    }
    emitEvent({
      module: "Maintenance",
      type: "info",
      message: `Kör nu: ${job.title} (${job.type})`,
    });
    setJobs((arr) =>
      arr.map((j) =>
        j.id === job.id ? { ...j, lastRun: nowSv(), status: "Completed" } : j
      )
    );
  };

  const toggleEnable = (job) => {
    setJobs((arr) =>
      arr.map((j) =>
        j.id === job.id ? { ...j, enabled: !j.enabled } : j
      )
    );
    emitEvent({
      module: "Maintenance",
      type: "info",
      message: `${job.title} ${job.enabled ? "inaktiverad" : "aktiverad"}.`,
    });
  };

  const handleDelete = (job) => {
    setJobs((arr) => arr.filter((j) => j.id !== job.id));
    emitEvent({
      module: "Maintenance",
      type: "alert",
      message: `Jobb borttaget: ${job.title}`,
    });
  };

  return (
    <div className="ai-maint glass-panel">
      <header className="maint-header">
        <h1>AI Maintenance Scheduler</h1>
        <p>Planera backup, cache-rensning, loggrotation och modul-omstart</p>
      </header>

      {/* Nytt jobb */}
      <section className="new-job">
        <h2>Nytt underhållsjobb</h2>
        <form onSubmit={handleAdd} className="job-form">
          <div className="row">
            <div className="field">
              <label>Titel</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Ex: Veckobackup"
              />
            </div>
            <div className="field">
              <label>Typ</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                {JOB_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Återkomst</label>
              <select
                value={form.recurrence}
                onChange={(e) => setForm({ ...form, recurrence: e.target.value })}
              >
                {RECURRENCE.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Tid (HH:MM)</label>
              <input
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                placeholder="02:15"
              />
              <button
                type="button"
                className="suggest-btn"
                onClick={() => setForm({ ...form, time: suggestLowLoadTime() })}
              >
                Föreslå tid
              </button>
            </div>
            {form.recurrence === "Weekly" && (
              <div className="field">
                <label>Veckodag</label>
                <select
                  value={form.weekday}
                  onChange={(e) => setForm({ ...form, weekday: e.target.value })}
                >
                  {WEEKDAYS.map((w, idx) => (
                    <option key={w} value={idx}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="field toggle">
              <label>Aktiverad</label>
              <input
                type="checkbox"
                checked={form.enabled}
                onChange={(e) => setForm({ ...form, enabled: e.target.checked })}
              />
            </div>
          </div>

          <div className="row">
            <div className="field full">
              <label>Notering</label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Beskrivning, t.ex. vilka moduler som ingår"
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="primary">Schemalägg</button>
          </div>
        </form>
      </section>

      {/* Lista */}
      <section className="jobs-list">
        <h2>Planerade jobb</h2>
        {jobs.length === 0 ? (
          <p className="muted">Inga jobb schemalagda ännu.</p>
        ) : (
          <div className="jobs-grid">
            {jobs.map((j) => (
              <div key={j.id} className={`job-card ${!j.enabled ? "disabled" : ""}`}>
                <div className="job-top">
                  <h3>{j.title}</h3>
                  <span className={`badge type-${j.type.toLowerCase()}`}>{j.type}</span>
                </div>
                <p className="meta">
                  <strong>Schema:</strong> {j.recurrence} • {j.time}
                  {j.recurrence === "Weekly" && ` • ${WEEKDAYS[j.weekday]}`}
                </p>
                <p className="meta">
                  <strong>Nästa körning:</strong> {nextRuns[j.id]}
                </p>
                <p className="meta">
                  <strong>Senast körd:</strong> {j.lastRun || "—"}
                </p>
                {j.notes && <p className="notes">{j.notes}</p>}

                <div className="job-actions">
                  <button onClick={() => handleRunNow(j)}>Kör nu</button>
                  <button onClick={() => toggleEnable(j)}>{j.enabled ? "Pausa" : "Aktivera"}</button>
                  <button className="danger" onClick={() => handleDelete(j)}>Ta bort</button>
                </div>

                <div className={`status-tag s-${(j.status || "Scheduled").toLowerCase()}`}>
                  {j.status || "Scheduled"}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="maint-footnote">
        🛠️ Nästa steg (V10): koppla till MergX Ops Cloud (riktiga API-calls: backup, cache flush, log rotate, rolling restart).
      </footer>
    </div>
  );
}
