import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, AreaChart, Area } from "recharts";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiAuditAnalytics.css";

export default function AiAuditAnalytics() {
  const { events } = useAiEvents();
  const [auditData, setAuditData] = useState([]);
  const [categoryStats, setCategoryStats] = useState([]);

  // 📊 Simulerad datakälla
  useEffect(() => {
    const mock = [
      { time: "10:00", type: "Auth", count: 3 },
      { time: "10:15", type: "Access", count: 5 },
      { time: "10:30", type: "Session", count: 2 },
      { time: "10:45", type: "AI", count: 6 },
      { time: "11:00", type: "Cloud", count: 3 },
      { time: "11:15", type: "System", count: 4 },
      { time: "11:30", type: "Auth", count: 5 },
    ];
    setAuditData(mock);

    const categorySummary = [
      { name: "Auth", total: 42 },
      { name: "Access", total: 36 },
      { name: "Session", total: 29 },
      { name: "Cloud", total: 18 },
      { name: "AI", total: 54 },
      { name: "System", total: 24 },
    ];
    setCategoryStats(categorySummary);
  }, []);

  return (
    <div className="ai-audit glass-panel">
      <header className="audit-header">
        <h1>AI Audit Analytics</h1>
        <p>Analys av händelser, säkerhetsloggar och AI-beslut</p>
      </header>

      {/* KPI */}
      <div className="audit-kpi">
        <div className="kpi-box">
          <h3>{events.length}</h3>
          <span>Totala händelser</span>
        </div>
        <div className="kpi-box">
          <h3>{categoryStats.length}</h3>
          <span>Kategorier</span>
        </div>
        <div className="kpi-box">
          <h3>{auditData.length}</h3>
          <span>Tidsintervall</span>
        </div>
      </div>

      {/* Linjediagram */}
      <section className="chart-section">
        <h2>Aktiviteter över tid</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={auditData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#00e5ff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Stapeldiagram */}
      <section className="chart-section">
        <h2>Händelser per kategori</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={categoryStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Bar dataKey="total" fill="#00ffb3" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Area/tidslinje */}
      <section className="chart-section">
        <h2>Systembelastning / säkerhetstriggers</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={auditData}>
            <defs>
              <linearGradient id="auditGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffd93d" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#ffd93d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#ffd93d" fill="url(#auditGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      {/* Lista över senaste events */}
      <section className="audit-feed">
        <h2>Senaste händelser</h2>
        <div className="feed-list">
          {events.slice(-8).reverse().map((e, i) => (
            <div key={i} className={`feed-item type-${e.type}`}>
              <span className="time">{e.time || "--"}</span>
              <strong>{e.module}</strong>
              <p>{e.message}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="audit-footnote">
        📊 Nästa version (V10.4) kommer koppla till MergX Telemetry API och ge realtidsanalys av användarbeteende och säkerhetsincidenter.
      </footer>
    </div>
  );
}
