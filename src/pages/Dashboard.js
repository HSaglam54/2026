import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const monatsDaten = [
  { monat: 'Jan', umsatz: 42000, kosten: 28000 },
  { monat: 'Feb', umsatz: 38000, kosten: 25000 },
  { monat: 'Mär', umsatz: 51000, kosten: 30000 },
  { monat: 'Apr', umsatz: 47000, kosten: 29000 },
  { monat: 'Mai', umsatz: 55000, kosten: 32000 },
  { monat: 'Jun', umsatz: 60000, kosten: 34000 },
];

const stoerungsDaten = [
  { monat: 'Jan', stoerungen: 8 },
  { monat: 'Feb', stoerungen: 5 },
  { monat: 'Mär', stoerungen: 10 },
  { monat: 'Apr', stoerungen: 7 },
  { monat: 'Mai', stoerungen: 4 },
  { monat: 'Jun', stoerungen: 6 },
];

const geraeteStatus = [
  { name: 'Aktiv', value: 124 },
  { name: 'Wartung', value: 18 },
  { name: 'Defekt', value: 5 },
];

const COLORS = ['#003d7a', '#4da6ff', '#ff6b6b'];

const kpis = [
  { title: 'Geräte gesamt', value: '147', sub: '↑ 3 neue diesen Monat' },
  { title: 'Standorte', value: '23', sub: '↑ 1 neuer Standort' },
  { title: 'Offene Wartungen', value: '18', sub: '↓ 4 weniger als Vormonat' },
  { title: 'Ø Verfügbarkeit', value: '97,3%', sub: '↑ 0,5% zum Vormonat' },
  { title: 'Monatsumsatz', value: '60.000 €', sub: '↑ 9% zum Vormonat' },
];

const Dashboard = () => {
  return (
    <div>
      <p className="page-heading">Übersicht</p>

      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div className="kpi-card" key={kpi.title}>
            <h3>{kpi.title}</h3>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-sub">{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Umsatz &amp; Kosten (€)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monatsDaten}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monat" />
              <YAxis />
              <Tooltip formatter={(v) => `${v.toLocaleString('de-DE')} €`} />
              <Legend />
              <Bar dataKey="umsatz" name="Umsatz" fill="#003d7a" />
              <Bar dataKey="kosten" name="Kosten" fill="#4da6ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Störungen pro Monat</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={stoerungsDaten}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monat" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="stoerungen" name="Störungen" stroke="#003d7a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Gerätestatus</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={geraeteStatus} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                {geraeteStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
