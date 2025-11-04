import React, { useState } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from "recharts";
import ToggleSwitch from "@/components/ui/ToggleSwitch";

const sampleData = [
  { name: "Jan", intäkter: 50000, kostnader: 30000, resultat: 20000 },
  { name: "Feb", intäkter: 75000, kostnader: 42000, resultat: 33000 },
  { name: "Mar", intäkter: 95000, kostnader: 50000, resultat: 45000 },
  { name: "Apr", intäkter: 120000, kostnader: 73000, resultat: 47000 },
  { name: "Maj", intäkter: 80000, kostnader: 48000, resultat: 32000 },
  { name: "Jun", intäkter: 125000, kostnader: 73400, resultat: 51600 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-md bg-white/5 border border-white/10 p-3 rounded-xl shadow-lg">
        <p className="text-sm text-white/70 mb-1">{label}</p>
        <p className="text-emerald-400 text-sm">
          Intäkter: {payload[0].value.toLocaleString()} kr
        </p>
        <p className="text-violet-400 text-sm">
          Kostnader: {payload[1].value.toLocaleString()} kr
        </p>
        <p className="text-cyan-300 text-sm">
          Resultat: {payload[2].value.toLocaleString()} kr
        </p>
      </div>
    );
  }
  return null;
};

export default function EconomicOverview() {
  const [showLine, setShowLine] = useState(true);

  return (
    <div className="w-full h-[400px] bg-[#0d0f12] rounded-2xl p-6 shadow-xl border border-white/5">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-lg font-semibold">Ekonomisk översikt</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm opacity-70">Trendläge</span>
          <ToggleSwitch checked={showLine} onChange={setShowLine} />
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart data={sampleData}>
          <defs>
            <linearGradient id="colorIntäkter" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E5C0" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#00E5C0" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorKostnader" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#A855F7" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1e1e1e" />
          <XAxis dataKey="name" tick={{ fill: "#888" }} />
          <YAxis tick={{ fill: "#888" }} />
          <Tooltip content={<CustomTooltip />} cursor={<Rectangle fill="#ffffff10" />} />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="intäkter" fill="url(#colorIntäkter)" radius={[8, 8, 0, 0]} barSize={24} />
          <Bar dataKey="kostnader" fill="url(#colorKostnader)" radius={[8, 8, 0, 0]} barSize={24} />
          {showLine && (
            <Line
              type="monotone"
              dataKey="resultat"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 5, fill: "#10B981" }}
              activeDot={{ r: 7, fill: "#10B981" }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
