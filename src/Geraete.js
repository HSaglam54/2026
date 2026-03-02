import React, { useState } from 'react';

const geraete = [
    { id: 'KF-001', name: 'Tiefkühlvitrine TK-500', standort: 'Berlin Mitte', temperatur: '-22°C', soll: '-20°C', strom: '1,8 kW', status: 'Online', letzteWartung: '12.01.2026' },
    { id: 'KF-002', name: 'Kühltheke KT-300', standort: 'Berlin Mitte', temperatur: '4°C', soll: '4°C', strom: '1,2 kW', status: 'Online', letzteWartung: '08.01.2026' },
    { id: 'KF-003', name: 'Weinkühlschrank WK-150', standort: 'Hamburg Nord', temperatur: '12°C', soll: '12°C', strom: '0,8 kW', status: 'Online', letzteWartung: '15.01.2026' },
    { id: 'KF-004', name: 'Industriekühler IK-1000', standort: 'München Süd', temperatur: '-18°C', soll: '-20°C', strom: '4,2 kW', status: 'Wartung', letzteWartung: '03.01.2026' },
    { id: 'KF-005', name: 'Tiefkühlvitrine TK-500', standort: 'Frankfurt West', temperatur: '-21°C', soll: '-20°C', strom: '1,9 kW', status: 'Online', letzteWartung: '20.01.2026' },
    { id: 'KF-006', name: 'Getränkekühler GK-200', standort: 'Köln Zentrum', temperatur: '6°C', soll: '6°C', strom: '0,6 kW', status: 'Offline', letzteWartung: '28.12.2025' },
    { id: 'KF-007', name: 'Kühltheke KT-300', standort: 'Stuttgart Ost', temperatur: '3°C', soll: '4°C', strom: '1,3 kW', status: 'Online', letzteWartung: '18.01.2026' },
    { id: 'KF-008', name: 'Industriekühler IK-800', standort: 'Düsseldorf City', temperatur: '-20°C', soll: '-20°C', strom: '3,8 kW', status: 'Online', letzteWartung: '22.01.2026' },
    { id: 'KF-009', name: 'Tiefkühlvitrine TK-700', standort: 'Leipzig Mitte', temperatur: '-19°C', soll: '-20°C', strom: '2,1 kW', status: 'Wartung', letzteWartung: '05.01.2026' },
    { id: 'KF-010', name: 'Weinkühlschrank WK-100', standort: 'Hamburg Nord', temperatur: '13°C', soll: '12°C', strom: '0,7 kW', status: 'Online', letzteWartung: '11.01.2026' },
];

const statusKlasse = (status) => {
    if (status === 'Online') return 'badge badge-online';
    if (status === 'Offline') return 'badge badge-offline';
    return 'badge badge-wartung';
};

const Geraete = () => {
    const [filter, setFilter] = useState('Alle');

    const statusOptionen = ['Alle', 'Online', 'Offline', 'Wartung'];

    const gefiltert = filter === 'Alle' ? geraete : geraete.filter(g => g.status === filter);

    return (
        <div className="page">
            <h1 className="page-title">🌡️ Geräte</h1>
            <div className="page-actions">
                <div className="filter-group">
                    {statusOptionen.map(opt => (
                        <button
                            key={opt}
                            className={`btn ${filter === opt ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setFilter(opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                <button className="btn btn-primary">+ Neues Gerät</button>
            </div>
            <div className="table-card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Geräte-ID</th>
                            <th>Bezeichnung</th>
                            <th>Standort</th>
                            <th>Ist-Temp.</th>
                            <th>Soll-Temp.</th>
                            <th>Stromverbrauch</th>
                            <th>Status</th>
                            <th>Letzte Wartung</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gefiltert.map((g) => (
                            <tr key={g.id}>
                                <td><code>{g.id}</code></td>
                                <td><strong>{g.name}</strong></td>
                                <td>{g.standort}</td>
                                <td>{g.temperatur}</td>
                                <td>{g.soll}</td>
                                <td>{g.strom}</td>
                                <td><span className={statusKlasse(g.status)}>{g.status}</span></td>
                                <td>{g.letzteWartung}</td>
                                <td>
                                    <button className="btn btn-sm btn-secondary">🔍 Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Geraete;
