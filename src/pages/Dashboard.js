import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const monatsDaten = [
  { monat: 'Jan', Stoerungen: 4, Wartungen: 8 },
  { monat: 'Feb', Stoerungen: 3, Wartungen: 6 },
  { monat: 'Mär', Stoerungen: 5, Wartungen: 10 },
  { monat: 'Apr', Stoerungen: 2, Wartungen: 7 },
  { monat: 'Mai', Stoerungen: 6, Wartungen: 9 },
  { monat: 'Jun', Stoerungen: 4, Wartungen: 11 },
];

const tempDaten = [
  { tag: 'Mo', Temp: -18 },
  { tag: 'Di', Temp: -17 },
  { tag: 'Mi', Temp: -19 },
  { tag: 'Do', Temp: -18 },
  { tag: 'Fr', Temp: -20 },
  { tag: 'Sa', Temp: -18 },
  { tag: 'So', Temp: -17 },
];

const statusDaten = [
  { name: 'OK', value: 42 },
  { name: 'Warnung', value: 8 },
  { name: 'Fehler', value: 3 },
];

const COLORS = ['#48bb78', '#ecc94b', '#fc8181'];

export default function Dashboard() {
  return (
    <div>
      <h1 className="page-title">📊 Dashboard</h1>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Geräte gesamt</div>
          <div className="kpi-value">53</div>
          <div className="kpi-sub">+2 diesen Monat</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Aktive Standorte</div>
          <div className="kpi-value">12</div>
          <div className="kpi-sub">Alle in Betrieb</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Offene Wartungen</div>
          <div className="kpi-value">7</div>
          <div className="kpi-sub">3 überfällig</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Störungen (Monat)</div>
          <div className="kpi-value">4</div>
          <div className="kpi-sub">-2 zum Vormonat</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Störungen &amp; Wartungen pro Monat</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monatsDaten}>
              <XAxis dataKey="monat" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Stoerungen" fill="#fc8181" name="Störungen" />
              <Bar dataKey="Wartungen" fill="#63b3ed" name="Wartungen" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Temperaturverlauf (Woche)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={tempDaten}>
              <XAxis dataKey="tag" />
              <YAxis domain={[-22, -14]} />
              <Tooltip />
              <Line type="monotone" dataKey="Temp" stroke="#003d7a" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Gerätestatus</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={statusDaten} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {statusDaten.map((entry, index) => (
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
}
