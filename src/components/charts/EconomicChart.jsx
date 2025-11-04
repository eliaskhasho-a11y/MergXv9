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

const data = [
  { month: "Jan", income: 50000, cost: 35000, result: 15000, growth: "+5%" },
  { month: "Feb", income: 75000, cost: 42000, result: 33000, growth: "+72%" },
  { month: "Mar", income: 83000, cost: 52000, result: 31000, growth: "+12%" },
  { month: "Apr", income: 95000, cost: 72000, result: 23000, growth: "-5%" },
  { month: "Maj", income: 80000, cost: 55000, result: 25000, growth: "+8%" },
  { month: "Jun", income: 125000, cost: 73400, result: 51600, growth: "+24%" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-title">{label}</p>
        <p>💰 Intäkter: {payload[0].value.toLocaleString()} kr</p>
        <p>📉 Kostnader: {payload[1].value.toLocaleString()} kr</p>
        <p>📊 Resultat: {payload[2].value.toLocaleString()} kr</p>
      </div>
    );
  }
  return null;
};

export default function EconomicChart() {
  return (
    <div className="economic-chart glass-panel">
      <h2>Ekonomisk översikt</h2>
      <ResponsiveContainer width="100%" height={360}>
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 40, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="gradIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0088ff" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="gradCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b47cff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#5a00ff" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis dataKey="month" stroke="#aaa" tickLine={false} />
          <YAxis stroke="#888" tickLine={false} width={60} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />

          <Bar dataKey="income" fill="url(#gradIncome)" radius={[12, 12, 0, 0]}>
            <LabelList dataKey="growth" position="top" className="bar-label" />
          </Bar>
          <Bar dataKey="cost" fill="url(#gradCost)" radius={[12, 12, 0, 0]} />
          <Line
            type="monotone"
            dataKey="result"
            stroke="#00fff2"
            strokeWidth={3}
            dot={{ r: 5, fill: "#00fff2", strokeWidth: 2 }}
            activeDot={{ r: 7, stroke: "#00fff2", strokeWidth: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
