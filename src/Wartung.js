import React, { useState } from 'react';

const wartungsProtokolle = [
    { id: 1, datum: '28.01.2026', gerät: 'KF-004 – Industriekühler IK-1000', standort: 'München Süd', techniker: 'Hans Berger', typ: 'Inspektion', status: 'Abgeschlossen', bemerkung: 'Kompressor gereinigt, Kältemittel geprüft' },
    { id: 2, datum: '25.01.2026', gerät: 'KF-006 – Getränkekühler GK-200', standort: 'Köln Zentrum', techniker: 'Eva Klein', typ: 'Reparatur', status: 'In Bearbeitung', bemerkung: 'Thermostat defekt, Ersatzteil bestellt' },
    { id: 3, datum: '22.01.2026', gerät: 'KF-009 – Tiefkühlvitrine TK-700', standort: 'Leipzig Mitte', techniker: 'Hans Berger', typ: 'Inspektion', status: 'Geplant', bemerkung: 'Jährliche Inspektion' },
    { id: 4, datum: '20.01.2026', gerät: 'KF-001 – Tiefkühlvitrine TK-500', standort: 'Berlin Mitte', techniker: 'Dieter Koch', typ: 'Wartung', status: 'Abgeschlossen', bemerkung: 'Filter gewechselt, Dichtung geprüft' },
    { id: 5, datum: '18.01.2026', gerät: 'KF-007 – Kühltheke KT-300', standort: 'Stuttgart Ost', techniker: 'Eva Klein', typ: 'Inspektion', status: 'Abgeschlossen', bemerkung: 'Keine Mängel festgestellt' },
    { id: 6, datum: '15.01.2026', gerät: 'KF-003 – Weinkühlschrank WK-150', standort: 'Hamburg Nord', techniker: 'Dieter Koch', typ: 'Wartung', status: 'Abgeschlossen', bemerkung: 'UV-Lampe ausgetauscht' },
    { id: 7, datum: '12.01.2026', gerät: 'KF-002 – Kühltheke KT-300', standort: 'Berlin Mitte', techniker: 'Hans Berger', typ: 'Reparatur', status: 'Abgeschlossen', bemerkung: 'Verdampfer aufgetaut, Ablauf gereinigt' },
    { id: 8, datum: '08.01.2026', gerät: 'KF-008 – Industriekühler IK-800', standort: 'Düsseldorf City', techniker: 'Eva Klein', typ: 'Inspektion', status: 'Abgeschlossen', bemerkung: 'Kältemittelleck geprüft – kein Befund' },
];

const statusKlasse = (status) => {
    if (status === 'Abgeschlossen') return 'badge badge-online';
    if (status === 'In Bearbeitung') return 'badge badge-wartung';
    return 'badge badge-offline';
};

const typKlasse = (typ) => {
    if (typ === 'Reparatur') return 'badge badge-offline';
    if (typ === 'Inspektion') return 'badge badge-online';
    return 'badge badge-wartung';
};

const Wartung = () => {
    const [filter, setFilter] = useState('Alle');
    const optionen = ['Alle', 'Abgeschlossen', 'In Bearbeitung', 'Geplant'];

    const gefiltert = filter === 'Alle' ? wartungsProtokolle : wartungsProtokolle.filter(w => w.status === filter);

    return (
        <div className="page">
            <h1 className="page-title">🔧 Wartung</h1>
            <div className="page-actions">
                <div className="filter-group">
                    {optionen.map(opt => (
                        <button
                            key={opt}
                            className={`btn ${filter === opt ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setFilter(opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                <button className="btn btn-primary">+ Neuer Auftrag</button>
            </div>
            <div className="table-card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Datum</th>
                            <th>Gerät</th>
                            <th>Standort</th>
                            <th>Techniker</th>
                            <th>Typ</th>
                            <th>Status</th>
                            <th>Bemerkung</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gefiltert.map((w) => (
                            <tr key={w.id}>
                                <td>{w.id}</td>
                                <td>{w.datum}</td>
                                <td><strong>{w.gerät}</strong></td>
                                <td>{w.standort}</td>
                                <td>{w.techniker}</td>
                                <td><span className={typKlasse(w.typ)}>{w.typ}</span></td>
                                <td><span className={statusKlasse(w.status)}>{w.status}</span></td>
                                <td className="bemerkung-cell">{w.bemerkung}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wartung;
