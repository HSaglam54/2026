import React from 'react';

const kpiDaten = [
    { icon: '🔵', label: 'Geräte Online', wert: 142, sub: 'von 150 gesamt' },
    { icon: '🟡', label: 'Warnungen', wert: 5, sub: 'aktive Meldungen' },
    { icon: '🔴', label: 'Alarme', wert: 2, sub: 'kritisch' },
    { icon: '📍', label: 'Standorte', wert: 18, sub: 'aktiv überwacht' },
    { icon: '🛠️', label: 'Wartungen offen', wert: 7, sub: 'diese Woche' },
    { icon: '✅', label: 'Verfügbarkeit', wert: '98,7%', sub: 'letzte 30 Tage' },
];

const letzteEreignisse = [
    { id: 1, zeit: '10:23', geraet: 'KA-Berlin-01', meldung: 'Temperatur über Grenzwert', status: 'alarm' },
    { id: 2, zeit: '09:45', geraet: 'KA-Hamburg-03', meldung: 'Wartung fällig', status: 'warnung' },
    { id: 3, zeit: '09:12', geraet: 'KA-München-07', meldung: 'Gerät online', status: 'ok' },
    { id: 4, zeit: '08:55', geraet: 'KA-Frankfurt-02', meldung: 'Kompressor-Alarm', status: 'alarm' },
    { id: 5, zeit: '08:30', geraet: 'KA-Köln-05', meldung: 'Tür-Sensor ausgelöst', status: 'warnung' },
];

const statusBadge = (status) => {
    if (status === 'alarm') return <span className="badge badge-rot">Alarm</span>;
    if (status === 'warnung') return <span className="badge badge-gelb">Warnung</span>;
    return <span className="badge badge-gruen">OK</span>;
};

const Dashboard = () => {
    return (
        <div>
            <h1 className="page-title">📊 Dashboard</h1>

            <div className="kpi-grid">
                {kpiDaten.map((k, i) => (
                    <div className="kpi-card" key={i}>
                        <div className="kpi-card-icon">{k.icon}</div>
                        <div className="kpi-card-label">{k.label}</div>
                        <div className="kpi-card-value">{k.wert}</div>
                        <div className="kpi-card-sub">{k.sub}</div>
                    </div>
                ))}
            </div>

            <div className="card">
                <div className="card-title">🔔 Letzte Ereignisse</div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Uhrzeit</th>
                                <th>Gerät</th>
                                <th>Meldung</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {letzteEreignisse.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.zeit}</td>
                                    <td>{e.geraet}</td>
                                    <td>{e.meldung}</td>
                                    <td>{statusBadge(e.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
