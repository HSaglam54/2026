import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './App.css';

const revenueData = [
  { monat: 'Jan', umsatz: 420000 },
  { monat: 'Feb', umsatz: 380000 },
  { monat: 'Mär', umsatz: 510000 },
  { monat: 'Apr', umsatz: 490000 },
  { monat: 'Mai', umsatz: 620000 },
  { monat: 'Jun', umsatz: 580000 },
];

const departmentData = [
  { abteilung: 'Vertrieb', budget: 150000, ausgaben: 130000 },
  { abteilung: 'IT', budget: 200000, ausgaben: 180000 },
  { abteilung: 'HR', budget: 80000, ausgaben: 75000 },
  { abteilung: 'Marketing', budget: 120000, ausgaben: 110000 },
];

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f5f6fa', minHeight: '100vh' }}>
      <h1 style={{ color: '#2d3436', marginBottom: '0.5rem' }}>CEO Dashboard</h1>
      <p style={{ color: '#636e72', marginBottom: '2rem' }}>Unternehmensübersicht 2026</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Gesamtumsatz', value: '€ 3.000.000', color: '#0984e3' },
          { label: 'Mitarbeiter', value: '248', color: '#00b894' },
          { label: 'Kundenzufriedenheit', value: '94 %', color: '#6c5ce7' },
        ].map((kpi) => (
          <div key={kpi.label} style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', borderLeft: `4px solid ${kpi.color}` }}>
            <div style={{ fontSize: '0.85rem', color: '#636e72', marginBottom: '0.5rem' }}>{kpi.label}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: kpi.color }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
          <h2 style={{ fontSize: '1rem', color: '#2d3436', marginBottom: '1rem' }}>Monatlicher Umsatz</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monat" />
              <YAxis />
              <Tooltip formatter={(v) => `€ ${v.toLocaleString('de-DE')}`} />
              <Legend />
              <Line type="monotone" dataKey="umsatz" stroke="#0984e3" strokeWidth={2} name="Umsatz (€)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
          <h2 style={{ fontSize: '1rem', color: '#2d3436', marginBottom: '1rem' }}>Budget vs. Ausgaben nach Abteilung</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="abteilung" />
              <YAxis />
              <Tooltip formatter={(v) => `€ ${v.toLocaleString('de-DE')}`} />
              <Legend />
              <Bar dataKey="budget" fill="#0984e3" name="Budget (€)" />
              <Bar dataKey="ausgaben" fill="#00b894" name="Ausgaben (€)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default App;