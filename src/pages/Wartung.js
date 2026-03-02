import React, { useState } from 'react';

const wartungsDaten = [
    { id: 1, geraet: 'KA-Frankfurt-02', standort: 'Frankfurt Main', typ: 'Inspektion', faellig: '05.03.2026', prioritaet: 'hoch', techniker: 'Hans Müller', status: 'offen' },
    { id: 2, geraet: 'KA-Hamburg-03', standort: 'Hamburg Nord', typ: 'Filterwechsel', faellig: '07.03.2026', prioritaet: 'mittel', techniker: 'Anna Schmidt', status: 'geplant' },
    { id: 3, geraet: 'KA-Stuttgart-01', standort: 'Stuttgart Mitte', typ: 'Vollwartung', faellig: '10.03.2026', prioritaet: 'hoch', techniker: 'Klaus Weber', status: 'offen' },
    { id: 4, geraet: 'KA-Berlin-01', standort: 'Berlin Zentral', typ: 'Kältemittelprüfung', faellig: '12.03.2026', prioritaet: 'niedrig', techniker: 'Maria Fischer', status: 'geplant' },
    { id: 5, geraet: 'KA-Köln-05', standort: 'Köln Dom', typ: 'Inspektion', faellig: '14.03.2026', prioritaet: 'mittel', techniker: 'Hans Müller', status: 'geplant' },
    { id: 6, geraet: 'KA-München-07', standort: 'München Süd', typ: 'Filterwechsel', faellig: '01.03.2026', prioritaet: 'mittel', techniker: 'Anna Schmidt', status: 'erledigt' },
    { id: 7, geraet: 'KA-Leipzig-02', standort: 'Leipzig West', typ: 'Vollwartung', faellig: '20.02.2026', prioritaet: 'hoch', techniker: 'Klaus Weber', status: 'erledigt' },
];

const prioritaetBadge = (p) => {
    if (p === 'hoch') return <span className="badge badge-rot">Hoch</span>;
    if (p === 'mittel') return <span className="badge badge-gelb">Mittel</span>;
    return <span className="badge badge-blau">Niedrig</span>;
};

const statusBadge = (s) => {
    if (s === 'erledigt') return <span className="badge badge-gruen">Erledigt</span>;
    if (s === 'geplant') return <span className="badge badge-blau">Geplant</span>;
    return <span className="badge badge-gelb">Offen</span>;
};

const Wartung = () => {
    const [filter, setFilter] = useState('alle');

    const gefiltert = wartungsDaten.filter((w) => filter === 'alle' || w.status === filter);

    return (
        <div>
            <div className="section-header">
                <h1 className="page-title" style={{ marginBottom: 0 }}>🛠️ Wartung</h1>
                <button className="btn btn-primary">+ Wartung planen</button>
            </div>

            <div className="card">
                <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
                    {['alle', 'offen', 'geplant', 'erledigt'].map((f) => (
                        <button
                            key={f}
                            className={`btn ${filter === f ? 'btn-primary' : 'btn-secondary'}`}
                            style={{ padding: '6px 14px', fontSize: '0.85rem', textTransform: 'capitalize' }}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Gerät</th>
                                <th>Standort</th>
                                <th>Wartungstyp</th>
                                <th>Fällig am</th>
                                <th>Priorität</th>
                                <th>Techniker</th>
                                <th>Status</th>
                                <th>Aktionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gefiltert.map((w) => (
                                <tr key={w.id}>
                                    <td>{w.id}</td>
                                    <td>{w.geraet}</td>
                                    <td>{w.standort}</td>
                                    <td>{w.typ}</td>
                                    <td>{w.faellig}</td>
                                    <td>{prioritaetBadge(w.prioritaet)}</td>
                                    <td>{w.techniker}</td>
                                    <td>{statusBadge(w.status)}</td>
                                    <td>
                                        <button className="btn btn-secondary" style={{ padding: '5px 12px', fontSize: '0.82rem' }}>Bearbeiten</button>
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

export default Wartung;
