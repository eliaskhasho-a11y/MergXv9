import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", Intäkter: 50000, Kostnader: 30000, Resultat: 20000 },
  { name: "Feb", Intäkter: 75000, Kostnader: 43000, Resultat: 32000 },
  { name: "Mar", Intäkter: 80000, Kostnader: 52000, Resultat: 28000 },
  { name: "Apr", Intäkter: 120000, Kostnader: 87000, Resultat: 33000 },
  { name: "Maj", Intäkter: 95000, Kostnader: 71000, Resultat: 24000 },
  { name: "Jun", Intäkter: 125000, Kostnader: 73400, Resultat: 51600 },
];

const EconomicChart = () => {
  return (
    <div className="chart-card glass-panel">
      <h2>Ekonomisk översikt</h2>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="name" stroke="var(--text)" />
          <YAxis stroke="var(--text)" />
          <Tooltip
            contentStyle={{
              background: "var(--panel)",
              border: "1px solid var(--glass)",
              borderRadius: "10px",
              color: "var(--text)",
            }}
          />
          <Bar
            dataKey="Intäkter"
            fill="url(#colorInt)"
            radius={[10, 10, 0, 0]}
            barSize={45}
          />
          <Bar
            dataKey="Kostnader"
            fill="url(#colorCost)"
            radius={[10, 10, 0, 0]}
            barSize={45}
          />
          <Line
            type="monotone"
            dataKey="Resultat"
            stroke="var(--accent)"
            strokeWidth={3}
            dot={{ fill: "var(--accent)", r: 5 }}
          />
          <defs>
            <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3beaff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#008cff" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c799ff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#6a00ff" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EconomicChart;
