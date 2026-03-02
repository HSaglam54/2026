import React from 'react';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const umsatzDaten = [
    { monat: 'Jan', umsatz: 42000 },
    { monat: 'Feb', umsatz: 47000 },
    { monat: 'Mär', umsatz: 51000 },
    { monat: 'Apr', umsatz: 49000 },
    { monat: 'Mai', umsatz: 55000 },
    { monat: 'Jun', umsatz: 60000 },
    { monat: 'Jul', umsatz: 63000 },
    { monat: 'Aug', umsatz: 58000 },
    { monat: 'Sep', umsatz: 61000 },
    { monat: 'Okt', umsatz: 67000 },
    { monat: 'Nov', umsatz: 70000 },
    { monat: 'Dez', umsatz: 75000 },
];

const wartungDaten = [
    { monat: 'Jan', geplant: 12, ungeplant: 3 },
    { monat: 'Feb', geplant: 14, ungeplant: 2 },
    { monat: 'Mär', geplant: 10, ungeplant: 5 },
    { monat: 'Apr', geplant: 13, ungeplant: 1 },
    { monat: 'Mai', geplant: 15, ungeplant: 4 },
    { monat: 'Jun', geplant: 11, ungeplant: 2 },
];

const statusDaten = [
    { name: 'Aktiv', wert: 78 },
    { name: 'Wartung', wert: 14 },
    { name: 'Inaktiv', wert: 8 },
];

const FARBEN = ['#4caf50', '#ff9800', '#f44336'];

const kpiCards = [
    { titel: 'Gesamtumsatz (Jahr)', wert: '€ 698.000', farbe: '#1a237e' },
    { titel: 'Aktive Geräte', wert: '78', farbe: '#2e7d32' },
    { titel: 'Offene Wartungen', wert: '14', farbe: '#e65100' },
    { titel: 'Standorte', wert: '12', farbe: '#4a148c' },
];

const Dashboard = () => {
    return (
        <div>
            <h1 className="page-title">Dashboard – Übersicht</h1>

            <div className="cards-row">
                {kpiCards.map((k) => (
                    <div className="card" key={k.titel}>
                        <h3>{k.titel}</h3>
                        <div className="value" style={{ color: k.farbe }}>{k.wert}</div>
                    </div>
                ))}
            </div>

            <div className="chart-card">
                <h2>Monatlicher Umsatz (€)</h2>
                <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={umsatzDaten}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="monat" />
                        <YAxis />
                        <Tooltip formatter={(v) => `€ ${v.toLocaleString('de-DE')}`} />
                        <Legend />
                        <Line type="monotone" dataKey="umsatz" stroke="#1a237e" strokeWidth={2} name="Umsatz" dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div className="chart-card" style={{ flex: 1, minWidth: '300px' }}>
                    <h2>Wartungsübersicht (letztes Halbjahr)</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={wartungDaten}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="monat" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="geplant" fill="#1565c0" name="Geplant" />
                            <Bar dataKey="ungeplant" fill="#e53935" name="Ungeplant" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-card" style={{ flex: 1, minWidth: '280px' }}>
                    <h2>Gerätestatus</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={statusDaten}
                                dataKey="wert"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                label={({ name, wert }) => `${name}: ${wert}`}
                            >
                                {statusDaten.map((_, index) => (
                                    <Cell key={index} fill={FARBEN[index % FARBEN.length]} />
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
