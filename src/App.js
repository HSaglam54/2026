import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

const data = [
  { name: 'Jan', umsatz: 400000, kosten: 240000 },
  { name: 'Feb', umsatz: 300000, kosten: 139800 },
  { name: 'Mär', umsatz: 500000, kosten: 380000 },
  { name: 'Apr', umsatz: 480000, kosten: 390800 },
  { name: 'Mai', umsatz: 600000, kosten: 480000 },
  { name: 'Jun', umsatz: 550000, kosten: 430000 },
];

const totalUmsatz = data.reduce((sum, d) => sum + d.umsatz, 0);
const totalKosten = data.reduce((sum, d) => sum + d.kosten, 0);
const totalGewinn = totalUmsatz - totalKosten;

const formatEuro = (value) =>
  '€ ' + value.toLocaleString('de-DE');

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>CEO Dashboard</h1>
      </header>
      <main className="app-main">
        <div className="kpi-cards">
          <div className="card">
            <h3>Umsatz (YTD)</h3>
            <p className="value">{formatEuro(totalUmsatz)}</p>
          </div>
          <div className="card">
            <h3>Kosten (YTD)</h3>
            <p className="value">{formatEuro(totalKosten)}</p>
          </div>
          <div className="card">
            <h3>Gewinn (YTD)</h3>
            <p className="value">{formatEuro(totalGewinn)}</p>
          </div>
        </div>
        <div className="chart-container">
          <h2>Umsatz vs. Kosten</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="umsatz" stroke="#007bff" name="Umsatz" />
              <Line type="monotone" dataKey="kosten" stroke="#dc3545" name="Kosten" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default App;