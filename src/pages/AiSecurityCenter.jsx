import React, { useEffect, useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiSecurityCenter.css";

export default function AiSecurityCenter() {
  const { events } = useAiEvents();
  const [threats, setThreats] = useState([]);
  const [summary, setSummary] = useState({ low: 0, medium: 0, high: 0 });

  useEffect(() => {
    // 🔍 Simulerad hot-loggning
    const mock = [
      { id: 1, time: "10:01", source: "Auth Gateway", level: "High", message: "Bruteforce-försök blockerad" },
      { id: 2, time: "10:15", source: "Session Manager", level: "Medium", message: "Token timeout på 2 sessioner" },
      { id: 3, time: "10:30", source: "Cloud Sync", level: "Low", message: "API key användes utanför region" },
      { id: 4, time: "10:45", source: "Access Manager", level: "High", message: "Ogodkänd rolländring upptäckt" },
      { id: 5, time: "11:00", source: "System Runtime", level: "Medium", message: "Ovanlig CPU-spik registrerad" },
    ];
    setThreats(mock);
    setSummary({
      low: mock.filter(t => t.level === "Low").length,
      medium: mock.filter(t => t.level === "Medium").length,
      high: mock.filter(t => t.level === "High").length,
    });
  }, []);

  return (
    <div className="ai-sec glass-panel">
      <header className="sec-header">
        <h1>AI Security Center</h1>
        <p>Realtidsövervakning och AI-analys av säkerhetsincidenter</p>
      </header>

      {/* KPI-kort */}
      <div className="sec-kpi">
        <div className="kpi-box low">
          <h3>{summary.low}</h3><span>Låg risk</span>
        </div>
        <div className="kpi-box medium">
          <h3>{summary.medium}</h3><span>Medel risk</span>
        </div>
        <div className="kpi-box high">
          <h3>{summary.high}</h3><span>Hög risk</span>
        </div>
      </div>

      {/* Hotaktivitet över tid */}
      <section className="chart-section">
        <h2>Hotaktivitet (frekvens / tid)</h2>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={threats}>
            <defs>
              <linearGradient id="threatGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff5050" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#ff5050" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Area type="monotone" dataKey="id" stroke="#ff5050" fill="url(#threatGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      {/* Incidentfeed */}
      <section className="threat-feed">
        <h2>Senaste incidenter</h2>
        <div className="feed-list">
          {threats.map(t => (
            <div key={t.id} className={`feed-item level-${t.level.toLowerCase()}`}>
              <span className="time">{t.time}</span>
              <strong>{t.source}</strong>
              <p>{t.message}</p>
              <span className="tag">{t.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Realtidsintegration */}
      <section className="event-stream">
        <h2>Live AI-events</h2>
        <div className="stream-box">
          {events.slice(-5).reverse().map((e, i) => (
            <div key={i} className={`stream-event type-${e.type}`}>
              <span>[{e.module}]</span> {e.message}
            </div>
          ))}
        </div>
      </section>

      <footer className="sec-footnote">
        🛡️ Nästa version (V10.5) integrerar AI Threat Classifier som analyserar mönster och automatiskt isolerar riskkällor i realtid.
      </footer>
    </div>
  );
}
