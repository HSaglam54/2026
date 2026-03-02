import React from 'react';

const berichteDaten = [
    { id: 1, titel: 'Monatsbericht Februar 2026', typ: 'Monatlich', erstellt: '01.03.2026', autor: 'Maria Fischer', status: 'fertig' },
    { id: 2, titel: 'Wartungsprotokoll KW 8', typ: 'Wöchentlich', erstellt: '24.02.2026', autor: 'Hans Müller', status: 'fertig' },
    { id: 3, titel: 'Alarmbericht Q1 2026', typ: 'Quartalsweise', erstellt: '20.02.2026', autor: 'Anna Schmidt', status: 'entwurf' },
    { id: 4, titel: 'Energieverbrauchsbericht Jan 2026', typ: 'Monatlich', erstellt: '01.02.2026', autor: 'Klaus Weber', status: 'fertig' },
    { id: 5, titel: 'Gerätestatus Berlin', typ: 'Standort', erstellt: '15.02.2026', autor: 'Maria Fischer', status: 'fertig' },
    { id: 6, titel: 'Jahresanalyse 2025', typ: 'Jährlich', erstellt: '05.01.2026', autor: 'Hans Müller', status: 'fertig' },
];

const zusammenfassung = [
    { label: 'Gesamtberichte', wert: 24, icon: '📋' },
    { label: 'Dieser Monat', wert: 6, icon: '📅' },
    { label: 'Entwürfe', wert: 3, icon: '✏️' },
    { label: 'Autoren', wert: 4, icon: '👥' },
];

const statusBadge = (s) => {
    if (s === 'fertig') return <span className="badge badge-gruen">Fertig</span>;
    return <span className="badge badge-gelb">Entwurf</span>;
};

const Berichte = () => {
    return (
        <div>
            <div className="section-header">
                <h1 className="page-title" style={{ marginBottom: 0 }}>📋 Berichte</h1>
                <button className="btn btn-primary">+ Neuer Bericht</button>
            </div>

            <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
                {zusammenfassung.map((z, i) => (
                    <div className="kpi-card" key={i}>
                        <div className="kpi-card-icon">{z.icon}</div>
                        <div className="kpi-card-label">{z.label}</div>
                        <div className="kpi-card-value">{z.wert}</div>
                    </div>
                ))}
            </div>

            <div className="card">
                <div className="card-title">Alle Berichte</div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Titel</th>
                                <th>Typ</th>
                                <th>Erstellt am</th>
                                <th>Autor</th>
                                <th>Status</th>
                                <th>Aktionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {berichteDaten.map((b) => (
                                <tr key={b.id}>
                                    <td>{b.id}</td>
                                    <td>{b.titel}</td>
                                    <td>{b.typ}</td>
                                    <td>{b.erstellt}</td>
                                    <td>{b.autor}</td>
                                    <td>{statusBadge(b.status)}</td>
                                    <td>
                                        <button className="btn btn-secondary" style={{ marginRight: 6, padding: '5px 12px', fontSize: '0.82rem' }}>Anzeigen</button>
                                        <button className="btn btn-primary" style={{ padding: '5px 12px', fontSize: '0.82rem' }}>Herunterladen</button>
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

export default Berichte;
