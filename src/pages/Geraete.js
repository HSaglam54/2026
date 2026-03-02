import React, { useState } from 'react';

const geraeteDaten = [
    { id: 1, bezeichnung: 'KA-Berlin-01', typ: 'Kühlanlage', standort: 'Berlin Zentral', temperatur: -18.2, status: 'online', letzteWartung: '15.01.2026' },
    { id: 2, bezeichnung: 'KA-Hamburg-03', typ: 'Tiefkühler', standort: 'Hamburg Nord', temperatur: -22.5, status: 'warnung', letzteWartung: '03.12.2025' },
    { id: 3, bezeichnung: 'KA-München-07', typ: 'Kühlaggregat', standort: 'München Süd', temperatur: -15.8, status: 'online', letzteWartung: '20.02.2026' },
    { id: 4, bezeichnung: 'KA-Frankfurt-02', typ: 'Kühlanlage', standort: 'Frankfurt Main', temperatur: -5.1, status: 'alarm', letzteWartung: '10.11.2025' },
    { id: 5, bezeichnung: 'KA-Köln-05', typ: 'Tiefkühler', standort: 'Köln Dom', temperatur: -20.0, status: 'online', letzteWartung: '18.01.2026' },
    { id: 6, bezeichnung: 'KA-Stuttgart-01', typ: 'Kühlaggregat', standort: 'Stuttgart Mitte', temperatur: null, status: 'offline', letzteWartung: '05.10.2025' },
    { id: 7, bezeichnung: 'KA-Düsseldorf-04', typ: 'Kühlanlage', standort: 'Düsseldorf Altstadt', temperatur: -17.6, status: 'online', letzteWartung: '22.02.2026' },
    { id: 8, bezeichnung: 'KA-Leipzig-02', typ: 'Tiefkühler', standort: 'Leipzig West', temperatur: -19.3, status: 'online', letzteWartung: '11.02.2026' },
];

const statusBadge = (status) => {
    if (status === 'online') return <span className="badge badge-gruen">Online</span>;
    if (status === 'warnung') return <span className="badge badge-gelb">Warnung</span>;
    if (status === 'alarm') return <span className="badge badge-rot">Alarm</span>;
    return <span className="badge" style={{ background: '#f1f5f9', color: '#64748b' }}>Offline</span>;
};

const Geraete = () => {
    const [suche, setSuche] = useState('');

    const gefiltert = geraeteDaten.filter(
        (g) =>
            g.bezeichnung.toLowerCase().includes(suche.toLowerCase()) ||
            g.standort.toLowerCase().includes(suche.toLowerCase()) ||
            g.typ.toLowerCase().includes(suche.toLowerCase())
    );

    return (
        <div>
            <div className="section-header">
                <h1 className="page-title" style={{ marginBottom: 0 }}>🔧 Geräte</h1>
                <button className="btn btn-primary">+ Gerät hinzufügen</button>
            </div>

            <div className="card">
                <div style={{ marginBottom: 16 }}>
                    <input
                        type="text"
                        placeholder="Gerät suchen..."
                        value={suche}
                        onChange={(e) => setSuche(e.target.value)}
                        style={{
                            padding: '8px 14px',
                            borderRadius: 6,
                            border: '1px solid #cbd5e1',
                            fontSize: '0.9rem',
                            width: 260,
                        }}
                    />
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bezeichnung</th>
                                <th>Typ</th>
                                <th>Standort</th>
                                <th>Temperatur (°C)</th>
                                <th>Status</th>
                                <th>Letzte Wartung</th>
                                <th>Aktionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gefiltert.map((g) => (
                                <tr key={g.id}>
                                    <td>{g.id}</td>
                                    <td>{g.bezeichnung}</td>
                                    <td>{g.typ}</td>
                                    <td>{g.standort}</td>
                                    <td>{g.temperatur !== null ? `${g.temperatur} °C` : '—'}</td>
                                    <td>{statusBadge(g.status)}</td>
                                    <td>{g.letzteWartung}</td>
                                    <td>
                                        <button className="btn btn-secondary" style={{ marginRight: 6, padding: '5px 12px', fontSize: '0.82rem' }}>Details</button>
                                        <button className="btn btn-danger" style={{ padding: '5px 12px', fontSize: '0.82rem' }}>Löschen</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Geraete;
