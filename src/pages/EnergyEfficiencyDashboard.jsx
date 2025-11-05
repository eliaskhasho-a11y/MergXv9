import React, { useEffect, useState } from "react";
import "./EnergyEfficiencyDashboard.css";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useAiEvents } from "../components/ai/AiEventBus";

export default function EnergyEfficiencyDashboard() {
  const { emitEvent } = useAiEvents();
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({ power: 0, cost: 0, temp: 0, co2: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString("sv-SE", { hour12: false, hour: "2-digit", minute: "2-digit" });
      const sample = {
        time: now,
        power: Math.floor(Math.random() * 70 + 100),  // W/h
        cost: Math.random() * 0.8 + 0.2,              // SEK/h
        temp: Math.floor(Math.random() * 10 + 20),    // °C
        co2: Math.floor(Math.random() * 40 + 100),    // g CO₂
      };
      setData((prev) => [...prev.slice(-12), sample]);
      setStats({
        power: sample.power,
        cost: sample.cost,
        temp: sample.temp,
        co2: sample.co2,
      });
    }, 3000);

    emitEvent({
      module: "EnergyDashboard",
      type: "info",
      message: "Energy & Efficiency Dashboard initierad och samlar energidata.",
    });

    return () => clearInterval(interval);
  }, []);

  const avg = (key) => (data.length ? Math.round(data.reduce((a,b)=>a+b[key],0)/data.length) : 0);

  return (
    <div className="energy glass-panel">
      <header className="energy-header">
        <h1>Energy & Efficiency Dashboard</h1>
        <p>Realtidsanalys av energiförbrukning, temperatur och CO₂-avtryck</p>
      </header>

      {/* KPI-panel */}
      <div className="energy-kpi">
        <div className="kpi-card">
          <h3>Effekt</h3><p>{stats.power} W/h</p>
        </div>
        <div className="kpi-card">
          <h3>Kostnad</h3><p>{stats.cost.toFixed(2)} SEK/h</p>
        </div>
        <div className="kpi-card">
          <h3>Temperatur</h3><p>{stats.temp} °C</p>
        </div>
        <div className="kpi-card">
          <h3>CO₂-utsläpp</h3><p>{stats.co2} g/h</p>
        </div>
      </div>

      {/* Trender */}
      <section className="energy-charts">
        <h2>Energiförbrukning över tid</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradPower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Area type="monotone" dataKey="power" stroke="#00e5ff" fill="url(#gradPower)" />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      {/* AI-Rekommendationer */}
      <section className="energy-reco">
        <h2>AI-Rekommendationer</h2>
        <ul>
          {stats.temp > 28 && <li>❄️ Temperatur över optimal nivå – överväg ökad kylning.</li>}
          {stats.power > 150 && <li>⚙️ Hög energiförbrukning – schemalägg tunga processer till nattetid.</li>}
          {stats.cost > 0.8 && <li>💰 Hög kostnad per timme – byt till lågkostnadsregion (moln).</li>}
          {stats.co2 > 130 && <li>🌍 Hög CO₂-nivå – aktivera Green Mode för optimerad energi.</li>}
          {stats.temp <= 28 && stats.power <= 150 && stats.co2 <= 130 && (
            <li>✅ Systemet kör effektivt inom optimala parametrar.</li>
          )}
        </ul>
      </section>

      <footer className="energy-footnote">
        ♻️ Nästa version (V10.11) använder AI-modell för att beräkna CO₂-prognoser, energibesparing och kostnadseffektivitet.
      </footer>
    </div>
  );
}
