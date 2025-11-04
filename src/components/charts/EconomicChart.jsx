import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import "./EconomicChart.css";
import { economyData as data } from "../../data/economyData";

// Anpassad tooltip med ekonomiska detaljer
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const income = payload.find((p) => p.dataKey === "income")?.value || 0;
    const cost = payload.find((p) => p.dataKey === "cost")?.value || 0;
    const result = payload.find((p) => p.dataKey === "result")?.value || 0;
    return (
      <div className="custom-tooltip glass-tooltip">
        <p className="tooltip-title">{label}</p>
        <p>💰 Intäkter: {income.toLocaleString()} kr</p>
        <p>💸 Kostnader: {cost.toLocaleString()} kr</p>
        <p>📊 Resultat: {result.toLocaleString()} kr</p>
      </div>
    );
  }
  return null;
};

export default function EconomicChart() {
  const lastNote = data[data.length - 1]?.note || "Ingen notering tillgänglig";

  return (
    <div className="economic-chart glass-panel">
      <h2>Ekonomisk översikt</h2>

      <ResponsiveContainer width="100%" height={360}>
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 40, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: "#ccc" }} />
          <YAxis
            tick={{ fill: "#888" }}
            tickFormatter={(v) => v.toLocaleString("sv-SE")}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Staplar för Intäkter och Kostnader */}
          <Bar dataKey="income" fill="url(#colorIncome)" radius={[6, 6, 0, 0]}>
            <LabelList
              dataKey="income"
              position="top"
              formatter={(v) => v.toLocaleString("sv-SE") + " kr"}
              style={{ fill: "#0ff", fontSize: 10 }}
            />
          </Bar>
          <Bar dataKey="cost" fill="url(#colorCost)" radius={[6, 6, 0, 0]}>
            <LabelList
              dataKey="cost"
              position="top"
              formatter={(v) => v.toLocaleString("sv-SE") + " kr"}
              style={{ fill: "#c080ff", fontSize: 10 }}
            />
          </Bar>

          {/* Linje för resultat */}
          <Line
            type="monotone"
            dataKey="result"
            stroke="#00e5ff"
            strokeWidth={2.5}
            dot={{ r: 5 }}
            activeDot={{ r: 7, fill: "#00e5ff" }}
          />

          {/* Gradienter för snyggare färgtoner */}
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#00e5ff" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c080ff" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#c080ff" stopOpacity={0.2} />
            </linearGradient>
          </defs>
        </ComposedChart>
      </ResponsiveContainer>

      <div className="data-summary">
        <p>
          🔍 Senaste notering: <strong>{lastNote}</strong>
        </p>
      </div>
    </div>
  );
}
