import React from 'react';

const standorte = [
    { id: 'S-001', name: 'München – Zentralmarkt', stadt: 'München', bundesland: 'Bayern', geraete: 28, status: 'Aktiv' },
    { id: 'S-002', name: 'Hamburg – Lager Nord', stadt: 'Hamburg', bundesland: 'Hamburg', geraete: 15, status: 'Aktiv' },
    { id: 'S-003', name: 'Berlin – Büro HQ', stadt: 'Berlin', bundesland: 'Berlin', geraete: 42, status: 'Aktiv' },
    { id: 'S-004', name: 'Köln – Filiale Ost', stadt: 'Köln', bundesland: 'NRW', geraete: 19, status: 'Aktiv' },
    { id: 'S-005', name: 'Frankfurt – Markt 2', stadt: 'Frankfurt', bundesland: 'Hessen', geraete: 33, status: 'Aktiv' },
    { id: 'S-006', name: 'Stuttgart – Depot', stadt: 'Stuttgart', bundesland: 'Baden-W.', geraete: 11, status: 'Inaktiv' },
    { id: 'S-007', name: 'Dresden – Filiale West', stadt: 'Dresden', bundesland: 'Sachsen', geraete: 8, status: 'Aktiv' },
    { id: 'S-008', name: 'Leipzig – Markt 1', stadt: 'Leipzig', bundesland: 'Sachsen', geraete: 22, status: 'Wartung' },
];

const Standorte = () => {
    return (
        <div>
            <p className="page-title">Standortverwaltung</p>

            <div className="kpi-grid">
                <div className="kpi-card blue">
                    <div className="kpi-label">Gesamt Standorte</div>
                    <div className="kpi-value">47</div>
                    <div className="kpi-sub">in 6 Bundesländern</div>
                </div>
                <div className="kpi-card green">
                    <div className="kpi-label">Aktiv</div>
                    <div className="kpi-value">43</div>
                    <div className="kpi-sub">91% Verfügbarkeit</div>
                </div>
                <div className="kpi-card orange">
                    <div className="kpi-label">In Wartung</div>
                    <div className="kpi-value">3</div>
                    <div className="kpi-sub">vorübergehend</div>
                </div>
                <div className="kpi-card red">
                    <div className="kpi-label">Inaktiv</div>
                    <div className="kpi-value">1</div>
                    <div className="kpi-sub">geschlossen</div>
                </div>
            </div>

            <div className="table-section">
                <h3>Alle Standorte</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Stadt</th>
                            <th>Bundesland</th>
                            <th>Geräte</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standorte.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.stadt}</td>
                                <td>{s.bundesland}</td>
                                <td>{s.geraete}</td>
                                <td>
                                    {s.status === 'Aktiv' && <span className="badge badge-green">{s.status}</span>}
                                    {s.status === 'Inaktiv' && <span className="badge badge-gray">{s.status}</span>}
                                    {s.status === 'Wartung' && <span className="badge badge-yellow">{s.status}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Standorte;
