import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const temperaturData = [
  { monat: 'Sep', avg: -18.2 },
  { monat: 'Okt', avg: -18.5 },
  { monat: 'Nov', avg: -17.9 },
  { monat: 'Dez', avg: -18.8 },
  { monat: 'Jan', avg: -19.1 },
  { monat: 'Feb', avg: -18.4 },
];

const wartungData = [
  { monat: 'Sep', geplant: 12, ungeplant: 2 },
  { monat: 'Okt', geplant: 10, ungeplant: 3 },
  { monat: 'Nov', geplant: 14, ungeplant: 1 },
  { monat: 'Dez', geplant: 11, ungeplant: 4 },
  { monat: 'Jan', geplant: 13, ungeplant: 2 },
  { monat: 'Feb', geplant: 15, ungeplant: 1 },
];

const KPI_CARDS = [
  { label: 'Aktive Standorte', value: 24, sub: 'von 26 gesamt', color: 'green' },
  { label: 'Geräte Online', value: 142, sub: '6 offline', color: 'blue' },
  { label: 'Offene Wartungen', value: 8, sub: 'fällig diese Woche', color: 'orange' },
  { label: 'Alarme Heute', value: 3, sub: 'kritisch: 1', color: 'red' },
];

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      <div className="kpi-grid">
        {KPI_CARDS.map((card) => (
          <div key={card.label} className={`kpi-card ${card.color}`}>
            <h4>{card.label}</h4>
            <div className="kpi-value">{card.value}</div>
            <div className="kpi-sub">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="charts-row">
        <div className="chart-container">
          <h3>Durchschnittstemperatur (°C)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={temperaturData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monat" />
              <YAxis domain={[-20, -17]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avg" stroke="#1a73e8" name="Ø Temp °C" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Wartungen pro Monat</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={wartungData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monat" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="geplant" fill="#34a853" name="Geplant" />
              <Bar dataKey="ungeplant" fill="#ea4335" name="Ungeplant" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
