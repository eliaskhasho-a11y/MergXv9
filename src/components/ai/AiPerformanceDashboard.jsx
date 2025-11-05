import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiPerformanceDashboard.css";

export default function AiPerformanceDashboard() {
  const { events } = useAiEvents();
  const [metrics, setMetrics] = useState([]);
  const [summary, setSummary] = useState({
    totalEvents: 0,
    alerts: 0,
    avgLatency: 180,
    uptime: 99.3,
  });

  // Simulerad realtidsdata
  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => {
        const next = [
          ...prev.slice(-14),
          {
            time: new Date().toLocaleTimeString("sv-SE", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            cpu: 30 + Math.random() * 60,
            io: 20 + Math.random() * 70,
            latency: 100 + Math.random() * 300,
          },
        ];
        return next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Uppdatera summering baserat på händelser
  useEffect(() => {
    if (events.length > 0) {
      const alertCount = events.filter((e) => e.type === "alert").length;
      setSummary((s) => ({
        ...s,
        totalEvents: events.length,
        alerts: alertCount,
      }));
    }
  }, [events]);

  return (
    <div className="ai-perf glass-panel">
      <header className="perf-header">
        <h1>AI Performance Dashboard</h1>
        <p>Realtidsöversikt över AI-systemets prestanda och aktivitet</p>
      </header>

      {/* KPI Top Cards */}
      <div className="perf-kpi">
        <div className="kpi-box">
          <h3>{summary.totalEvents}</h3>
          <span>AI-Event totalt</span>
        </div>
        <div className="kpi-box">
          <h3>{summary.alerts}</h3>
          <span>Aktiva Alerts</span>
        </div>
        <div className="kpi-box">
          <h3>{summary.avgLatency} ms</h3>
          <span>Genomsnittlig AI-latens</span>
        </div>
        <div className="kpi-box">
          <h3>{summary.uptime}%</h3>
          <span>System Uptime</span>
        </div>
      </div>

      {/* CPU/IO Chart */}
      <section className="chart-section">
        <h2>CPU / IO Belastning</h2>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={metrics}>
            <defs>
              <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="ioGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ffb3" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#00ffb3" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Area type="monotone" dataKey="cpu" stroke="#00e5ff" fill="url(#cpuGrad)" />
            <Area type="monotone" dataKey="io" stroke="#00ffb3" fill="url(#ioGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      {/* Latency Chart */}
      <section className="chart-section">
        <h2>AI-Svarstid (ms)</h2>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Line type="monotone" dataKey="latency" stroke="#ffd93d" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Event-Feed */}
      <section className="event-feed">
        <h2>Senaste AI-Händelser</h2>
        <div className="feed-list">
          {events.slice(0, 8).map((e) => (
            <div key={e.id} className={`feed-item type-${e.type}`}>
              <span className="time">{e.time}</span>
              <strong>{e.module}</strong>
              <p>{e.message}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="perf-footnote">
        ⚙️ Nästa version (V9.6) kopplar mot riktig AI Telemetry API och lagrar historik för analys.
      </footer>
    </div>
  );
}
