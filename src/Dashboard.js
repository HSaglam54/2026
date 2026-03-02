import React from 'react';

const kpis = [
    { label: 'Gesamtumsatz', value: '€ 4,2 Mio.', sub: '+12% ggü. Vorjahr', color: 'green' },
    { label: 'Aktive Geräte', value: '312', sub: '18 in Wartung', color: 'blue' },
    { label: 'Standorte', value: '47', sub: 'in 6 Bundesländern', color: 'purple' },
    { label: 'Offene Tickets', value: '23', sub: '5 kritisch', color: 'red' },
    { label: 'Kundenzufriedenheit', value: '94%', sub: '↑ 2% diese Woche', color: 'green' },
    { label: 'Energieverbrauch', value: '182 kWh', sub: 'Ø pro Gerät/Tag', color: 'orange' },
];

const recentWartung = [
    { id: 'W-1045', geraet: 'Kühlschrank G-204', standort: 'München – Zentralmarkt', datum: '01.03.2026', status: 'Erledigt' },
    { id: 'W-1044', geraet: 'Tiefkühler G-088', standort: 'Hamburg – Lager Nord', datum: '28.02.2026', status: 'Erledigt' },
    { id: 'W-1043', geraet: 'Klimaanlage G-011', standort: 'Berlin – Büro HQ', datum: '27.02.2026', status: 'In Bearbeitung' },
    { id: 'W-1042', geraet: 'Kühltheke G-305', standort: 'Köln – Filiale Ost', datum: '26.02.2026', status: 'Offen' },
    { id: 'W-1041', geraet: 'Kühlschrank G-119', standort: 'Frankfurt – Markt 2', datum: '25.02.2026', status: 'Erledigt' },
];

const chartDaten = [
    { monat: 'Okt', wert: 68 },
    { monat: 'Nov', wert: 82 },
    { monat: 'Dez', wert: 95 },
    { monat: 'Jan', wert: 74 },
    { monat: 'Feb', wert: 88 },
    { monat: 'Mär', wert: 100 },
];

const statusBadge = (status) => {
    if (status === 'Erledigt') return <span className="badge badge-green">{status}</span>;
    if (status === 'In Bearbeitung') return <span className="badge badge-yellow">{status}</span>;
    return <span className="badge badge-red">{status}</span>;
};

const Dashboard = () => {
    return (
        <div>
            <p className="page-title">Übersicht</p>

            <div className="kpi-grid">
                {kpis.map((k, i) => (
                    <div key={i} className={`kpi-card ${k.color}`}>
                        <div className="kpi-label">{k.label}</div>
                        <div className="kpi-value">{k.value}</div>
                        <div className="kpi-sub">{k.sub}</div>
                    </div>
                ))}
            </div>

            <div className="two-col">
                <div className="table-section">
                    <h3>Umsatz letzte 6 Monate</h3>
                    <div className="bar-chart">
                        {chartDaten.map((d, i) => (
                            <div key={i} className="bar-col">
                                <div className="bar-value">€{d.wert}k</div>
                                <div className="bar" style={{ height: `${d.wert}%` }}></div>
                                <div className="bar-label">{d.monat}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="table-section">
                    <h3>Geräte-Status</h3>
                    <table>
                        <tbody>
                            <tr><td>✅ Betriebsbereit</td><td><strong>274</strong></td></tr>
                            <tr><td>🔧 In Wartung</td><td><strong>18</strong></td></tr>
                            <tr><td>⚠️ Warnung</td><td><strong>14</strong></td></tr>
                            <tr><td>❌ Ausgefallen</td><td><strong>6</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="table-section">
                <h3>Letzte Wartungsaufträge</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Auftrag-Nr.</th>
                            <th>Gerät</th>
                            <th>Standort</th>
                            <th>Datum</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentWartung.map((w) => (
                            <tr key={w.id}>
                                <td>{w.id}</td>
                                <td>{w.geraet}</td>
                                <td>{w.standort}</td>
                                <td>{w.datum}</td>
                                <td>{statusBadge(w.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
