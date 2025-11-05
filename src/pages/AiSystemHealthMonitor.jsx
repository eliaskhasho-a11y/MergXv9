import React, { useEffect, useState } from "react";
import "./AiSystemHealthMonitor.css";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from "recharts";
import { useAiEvents } from "../components/ai/AiEventBus";

export default function AiSystemHealthMonitor() {
  const { emitEvent } = useAiEvents();
  const [metrics, setMetrics] = useState({ cpu: [], ram: [], storage: [], network: [] });

  useEffect(() => {
    const gen = () => ({
      cpu: Math.floor(Math.random() * 70 + 10),
      ram: Math.floor(Math.random() * 60 + 20),
      storage: Math.floor(Math.random() * 90 + 5),
      network: Math.floor(Math.random() * 80 + 5),
    });

    const interval = setInterval(() => {
      setMetrics((prev) => {
        const next = gen();
        const time = new Date().toLocaleTimeString("sv-SE", { hour12: false, hour: "2-digit", minute: "2-digit" });
        const append = (arr, val) => [...arr.slice(-10), { time, value: val }];
        return {
          cpu: append(prev.cpu, next.cpu),
          ram: append(prev.ram, next.ram),
          storage: append(prev.storage, next.storage),
          network: append(prev.network, next.network),
        };
      });
    }, 2500);

    emitEvent({
      module: "HealthMonitor",
      type: "info",
      message: "System Health Monitor startad och samlar statusdata.",
    });

    return () => clearInterval(interval);
  }, []);

  const latest = (arr) => (arr.length ? arr[arr.length - 1].value : 0);

  const MetricCard = ({ title, data, color }) => (
    <div className="metric-card">
      <h3>{title}</h3>
      <h2 style={{ color }}>{latest(data)}%</h2>
      <ResponsiveContainer width="100%" height={70}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`${title}-grad`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.6} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="time" stroke="#999" hide />
          <YAxis stroke="#999" hide />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke={color} fill={`url(#${title}-grad)`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="ai-health glass-panel">
      <header className="health-header">
        <h1>AI System Health Monitor</h1>
        <p>Övervakar systemets resurser och prestanda i realtid</p>
      </header>

      <div className="metric-grid">
        <MetricCard title="CPU" data={metrics.cpu} color="#00e5ff" />
        <MetricCard title="RAM" data={metrics.ram} color="#ffd93d" />
        <MetricCard title="Lagring" data={metrics.storage} color="#ff5050" />
        <MetricCard title="Nätverk" data={metrics.network} color="#00ffb3" />
      </div>

      {/* Sammanfattning */}
      <section className="health-summary">
        <h2>Systemsammanfattning</h2>
        <ul>
          <li>Genomsnittlig CPU-användning: {Math.round(metrics.cpu.reduce((a,b)=>a+b.value,0)/(metrics.cpu.length||1))}%</li>
          <li>Genomsnittlig RAM-användning: {Math.round(metrics.ram.reduce((a,b)=>a+b.value,0)/(metrics.ram.length||1))}%</li>
          <li>Aktuell lagringsbelastning: {latest(metrics.storage)}%</li>
          <li>Nätverkstrafik: {latest(metrics.network)} Mbit/s</li>
        </ul>
      </section>

      <footer className="health-footnote">
        🧩 Nästa version (V10.10) kopplas mot MergX Telemetry API för riktig serverdata, prediktiv analys och värme-/energioptimering.
      </footer>
    </div>
  );
}
