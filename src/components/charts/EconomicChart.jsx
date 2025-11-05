import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const data = [
  { name: "Jan", intakt: 50000, kostnad: 35000, resultat: 15000 },
  { name: "Feb", intakt: 75000, kostnad: 49000, resultat: 26000 },
  { name: "Mar", intakt: 80000, kostnad: 52000, resultat: 28000 },
  { name: "Apr", intakt: 110000, kostnad: 73500, resultat: 36500 },
  { name: "Maj", intakt: 92000, kostnad: 63000, resultat: 29000 },
  { name: "Jun", intakt: 125000, kostnad: 73400, resultat: 51600 },
];

export default function EconomyChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              background: "rgba(0,0,0,0.8)",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
            }}
          />
          <Legend />
          <Bar dataKey="intakt" fill="url(#intaktColor)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="kostnad" fill="url(#kostnadColor)" radius={[8, 8, 0, 0]} />
          <Line
            type="monotone"
            dataKey="resultat"
            stroke="#00d1ff"
            strokeWidth={2}
            dot={{ r: 3 }}
          />

          <defs>
            <linearGradient id="intaktColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d1ff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0066ff" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="kostnadColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a566ff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#6a00ff" stopOpacity={0.2} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>

      <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", opacity: 0.8 }}>
        🔍 Senaste notering: <strong>Bästa månaden hittills – positiv resultattrend.</strong>
      </p>
    </div>
  );
}
