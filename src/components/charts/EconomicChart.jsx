import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./EconomicChart.css";

const data = [
  { month: "Jan", income: 50000, cost: 30000, result: 20000 },
  { month: "Feb", income: 75000, cost: 42000, result: 33000 },
  { month: "Mar", income: 83000, cost: 50000, result: 33000 },
  { month: "Apr", income: 95000, cost: 72000, result: 23000 },
  { month: "Maj", income: 80000, cost: 55000, result: 25000 },
  { month: "Jun", income: 125000, cost: 73400, result: 51600 },
];

export default function EconomicChart() {
  return (
    <div className="economic-chart glass-panel">
      <h2>Ekonomisk översikt</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(25,25,25,0.85)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
            }}
          />
          <Bar dataKey="income" fill="url(#incomeGradient)" radius={[12, 12, 0, 0]} />
          <Bar dataKey="cost" fill="url(#costGradient)" radius={[12, 12, 0, 0]} />
          <Line type="monotone" dataKey="result" stroke="#4ddbbd" strokeWidth={3} dot={false} />

          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3ff0d9" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#2a9d8f" stopOpacity={0.3} />
            </linearGradient>

            <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c77dff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#5f3dc4" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
