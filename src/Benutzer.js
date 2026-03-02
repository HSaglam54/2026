import React, { useState } from 'react';

const benutzer = [
    { id: 1, name: 'Max Mustermann', email: 'max.mustermann@kaeltefach.de', rolle: 'CEO', status: 'Aktiv', letzterLogin: '02.02.2026, 08:15' },
    { id: 2, name: 'Anna Schmidt', email: 'anna.schmidt@kaeltefach.de', rolle: 'Admin', status: 'Aktiv', letzterLogin: '02.02.2026, 09:30' },
    { id: 3, name: 'Thomas Huber', email: 'thomas.huber@kaeltefach.de', rolle: 'Techniker', status: 'Aktiv', letzterLogin: '01.02.2026, 17:45' },
    { id: 4, name: 'Sabine Richter', email: 'sabine.richter@kaeltefach.de', rolle: 'Manager', status: 'Aktiv', letzterLogin: '01.02.2026, 14:20' },
    { id: 5, name: 'Peter Braun', email: 'peter.braun@kaeltefach.de', rolle: 'Techniker', status: 'Inaktiv', letzterLogin: '15.01.2026, 11:00' },
    { id: 6, name: 'Monika Wolf', email: 'monika.wolf@kaeltefach.de', rolle: 'Manager', status: 'Aktiv', letzterLogin: '02.02.2026, 07:55' },
    { id: 7, name: 'Frank Fischer', email: 'frank.fischer@kaeltefach.de', rolle: 'Techniker', status: 'Aktiv', letzterLogin: '31.01.2026, 16:30' },
    { id: 8, name: 'Karin Schäfer', email: 'karin.schaefer@kaeltefach.de', rolle: 'Viewer', status: 'Gesperrt', letzterLogin: '20.01.2026, 10:10' },
];

const rolleFarbe = {
    CEO: '#003d7a',
    Admin: '#0066cc',
    Manager: '#8800cc',
    Techniker: '#ff6600',
    Viewer: '#666666',
};

const statusKlasse = (status) => {
    if (status === 'Aktiv') return 'badge badge-online';
    if (status === 'Inaktiv') return 'badge badge-wartung';
    return 'badge badge-offline';
};

const Benutzer = () => {
    const [suche, setSuche] = useState('');

    const gefiltert = benutzer.filter(b =>
        b.name.toLowerCase().includes(suche.toLowerCase()) ||
        b.email.toLowerCase().includes(suche.toLowerCase()) ||
        b.rolle.toLowerCase().includes(suche.toLowerCase())
    );

    return (
        <div className="page">
            <h1 className="page-title">👥 Benutzerverwaltung</h1>
            <div className="page-actions">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Benutzer suchen..."
                    value={suche}
                    onChange={(e) => setSuche(e.target.value)}
                />
                <button className="btn btn-primary">+ Neuer Benutzer</button>
            </div>
            <div className="table-card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Rolle</th>
                            <th>Status</th>
                            <th>Letzter Login</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gefiltert.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td><strong>{b.name}</strong></td>
                                <td>{b.email}</td>
                                <td>
                                    <span className="badge" style={{ backgroundColor: rolleFarbe[b.rolle] || '#666' }}>
                                        {b.rolle}
                                    </span>
                                </td>
                                <td><span className={statusKlasse(b.status)}>{b.status}</span></td>
                                <td>{b.letzterLogin}</td>
                                <td>
                                    <button className="btn btn-sm btn-secondary">✏️ Bearbeiten</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Benutzer;
