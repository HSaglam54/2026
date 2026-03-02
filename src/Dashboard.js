import React from 'react';
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const umsatzDaten = [
    { monat: 'Jan', umsatz: 42000 },
    { monat: 'Feb', umsatz: 47000 },
    { monat: 'Mär', umsatz: 45000 },
    { monat: 'Apr', umsatz: 53000 },
    { monat: 'Mai', umsatz: 58000 },
    { monat: 'Jun', umsatz: 61000 },
    { monat: 'Jul', umsatz: 67000 },
    { monat: 'Aug', umsatz: 64000 },
    { monat: 'Sep', umsatz: 70000 },
    { monat: 'Okt', umsatz: 73000 },
    { monat: 'Nov', umsatz: 69000 },
    { monat: 'Dez', umsatz: 78000 },
];

const energieDaten = [
    { monat: 'Jan', kwh: 12400 },
    { monat: 'Feb', kwh: 11800 },
    { monat: 'Mär', kwh: 11200 },
    { monat: 'Apr', kwh: 10900 },
    { monat: 'Mai', kwh: 11500 },
    { monat: 'Jun', kwh: 12800 },
    { monat: 'Jul', kwh: 13600 },
    { monat: 'Aug', kwh: 13200 },
    { monat: 'Sep', kwh: 12100 },
    { monat: 'Okt', kwh: 11700 },
    { monat: 'Nov', kwh: 12000 },
    { monat: 'Dez', kwh: 12500 },
];

const kategorieDaten = [
    { name: 'Tiefkühl', value: 38 },
    { name: 'Kühlschränke', value: 27 },
    { name: 'Weinkühlschränke', value: 15 },
    { name: 'Industriekühlung', value: 20 },
];

const FARBEN = ['#0066cc', '#00aaff', '#66ccff', '#003d7a'];

const standortStatus = [
    { name: 'Berlin Mitte', geraete: 12, status: 'Online', umsatz: '€ 18.400' },
    { name: 'Hamburg Nord', geraete: 8, status: 'Online', umsatz: '€ 12.100' },
    { name: 'München Süd', geraete: 15, status: 'Wartung', umsatz: '€ 21.300' },
    { name: 'Frankfurt West', geraete: 10, status: 'Online', umsatz: '€ 15.700' },
    { name: 'Köln Zentrum', geraete: 6, status: 'Offline', umsatz: '€ 8.900' },
];

const kpiDaten = [
    { titel: 'Gesamtumsatz', wert: '€ 727.000', trend: '↑', trendWert: '+8,4%', farbe: '#0066cc' },
    { titel: 'Verfügbarkeit', wert: '96,2%', trend: '↑', trendWert: '+1,2%', farbe: '#00aa44' },
    { titel: 'Energieverbrauch', wert: '144.700 kWh', trend: '↓', trendWert: '-3,1%', farbe: '#ff6600' },
    { titel: 'Aktive Standorte', wert: '47', trend: '↑', trendWert: '+3', farbe: '#8800cc' },
    { titel: 'Geräte Online', wert: '312 / 324', trend: '↓', trendWert: '-4', farbe: '#cc0000' },
    { titel: 'Wartungsaufträge', wert: '18', trend: '↑', trendWert: '+5', farbe: '#ff9900' },
];

const statusKlasse = (status) => {
    if (status === 'Online') return 'badge badge-online';
    if (status === 'Offline') return 'badge badge-offline';
    return 'badge badge-wartung';
};

const Dashboard = () => {
    return (
        <div className="page">
            <h1 className="page-title">📊 Dashboard – Übersicht</h1>

            <div className="kpi-grid">
                {kpiDaten.map((kpi) => (
                    <div className="kpi-card" key={kpi.titel}>
                        <div className="kpi-card-title">{kpi.titel}</div>
                        <div className="kpi-card-value" style={{ color: kpi.farbe }}>{kpi.wert}</div>
                        <div className={`kpi-trend ${kpi.trend === '↑' ? 'trend-up' : 'trend-down'}`}>
                            {kpi.trend} {kpi.trendWert} ggü. Vorjahr
                        </div>
                    </div>
                ))}
            </div>

            <div className="charts-grid">
                <div className="chart-card">
                    <h3 className="chart-title">Umsatzentwicklung (€)</h3>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={umsatzDaten}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="monat" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip formatter={(v) => `€ ${v.toLocaleString('de-DE')}`} />
                            <Bar dataKey="umsatz" fill="#0066cc" radius={[4, 4, 0, 0]} name="Umsatz" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-card">
                    <h3 className="chart-title">Energieverbrauch (kWh)</h3>
                    <ResponsiveContainer width="100%" height={240}>
                        <LineChart data={energieDaten}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="monat" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip formatter={(v) => `${v.toLocaleString('de-DE')} kWh`} />
                            <Line type="monotone" dataKey="kwh" stroke="#ff6600" strokeWidth={2} dot={{ r: 3 }} name="Verbrauch" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-card chart-card-pie">
                    <h3 className="chart-title">Kategorien-Verteilung</h3>
                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart aria-label="Kreisdiagramm Kategorien-Verteilung der Kältefach-Geräte">
                            <Pie data={kategorieDaten} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                                {kategorieDaten.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={FARBEN[index % FARBEN.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(v) => `${v}%`} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="table-card">
                <h3 className="chart-title">Standort-Übersicht</h3>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Standort</th>
                            <th>Geräte</th>
                            <th>Status</th>
                            <th>Umsatz</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standortStatus.map((s) => (
                            <tr key={s.name}>
                                <td>{s.name}</td>
                                <td>{s.geraete}</td>
                                <td><span className={statusKlasse(s.status)}>{s.status}</span></td>
                                <td>{s.umsatz}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
