import React, { useState } from 'react';

const benutzerDaten = [
    { id: 1, name: 'Maria Fischer', email: 'maria.fischer@kälte2026.de', rolle: 'Administrator', standort: 'Berlin Zentral', status: 'aktiv', letzterLogin: '02.03.2026' },
    { id: 2, name: 'Hans Müller', email: 'hans.mueller@kälte2026.de', rolle: 'Techniker', standort: 'Hamburg Nord', status: 'aktiv', letzterLogin: '02.03.2026' },
    { id: 3, name: 'Anna Schmidt', email: 'anna.schmidt@kälte2026.de', rolle: 'Techniker', standort: 'München Süd', status: 'aktiv', letzterLogin: '01.03.2026' },
    { id: 4, name: 'Klaus Weber', email: 'klaus.weber@kälte2026.de', rolle: 'Techniker', standort: 'Frankfurt Main', status: 'aktiv', letzterLogin: '28.02.2026' },
    { id: 5, name: 'Petra Braun', email: 'petra.braun@kälte2026.de', rolle: 'Betrachter', standort: 'Köln Dom', status: 'inaktiv', letzterLogin: '15.02.2026' },
    { id: 6, name: 'Thomas Richter', email: 'thomas.richter@kälte2026.de', rolle: 'Manager', standort: 'Stuttgart Mitte', status: 'aktiv', letzterLogin: '02.03.2026' },
];

const rolleFarbe = (rolle) => {
    if (rolle === 'Administrator') return <span className="badge badge-rot">{rolle}</span>;
    if (rolle === 'Manager') return <span className="badge badge-blau">{rolle}</span>;
    if (rolle === 'Techniker') return <span className="badge badge-gruen">{rolle}</span>;
    return <span className="badge badge-gelb">{rolle}</span>;
};

const statusBadge = (s) => {
    if (s === 'aktiv') return <span className="badge badge-gruen">Aktiv</span>;
    return <span className="badge" style={{ background: '#f1f5f9', color: '#64748b' }}>Inaktiv</span>;
};

const Benutzer = () => {
    const [suche, setSuche] = useState('');

    const gefiltert = benutzerDaten.filter(
        (b) =>
            b.name.toLowerCase().includes(suche.toLowerCase()) ||
            b.email.toLowerCase().includes(suche.toLowerCase()) ||
            b.rolle.toLowerCase().includes(suche.toLowerCase())
    );

    return (
        <div>
            <div className="section-header">
                <h1 className="page-title" style={{ marginBottom: 0 }}>👤 Benutzer</h1>
                <button className="btn btn-primary">+ Benutzer hinzufügen</button>
            </div>

            <div className="card">
                <div style={{ marginBottom: 16 }}>
                    <input
                        type="text"
                        placeholder="Benutzer suchen..."
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
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Rolle</th>
                                <th>Standort</th>
                                <th>Status</th>
                                <th>Letzter Login</th>
                                <th>Aktionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gefiltert.map((b) => (
                                <tr key={b.id}>
                                    <td>{b.id}</td>
                                    <td>{b.name}</td>
                                    <td>{b.email}</td>
                                    <td>{rolleFarbe(b.rolle)}</td>
                                    <td>{b.standort}</td>
                                    <td>{statusBadge(b.status)}</td>
                                    <td>{b.letzterLogin}</td>
                                    <td>
                                        <button className="btn btn-secondary" style={{ marginRight: 6, padding: '5px 12px', fontSize: '0.82rem' }}>Bearbeiten</button>
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

export default Benutzer;
