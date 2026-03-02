import React from 'react';

const Benutzer = () => {
    const benutzer = [
        { id: 1, name: 'Max Müller', email: 'max@firma.de', rolle: 'Administrator', status: 'Aktiv' },
        { id: 2, name: 'Anna Schmidt', email: 'anna@firma.de', rolle: 'Techniker', status: 'Aktiv' },
        { id: 3, name: 'Peter Klaus', email: 'peter@firma.de', rolle: 'Techniker', status: 'Aktiv' },
        { id: 4, name: 'Lisa Weber', email: 'lisa@firma.de', rolle: 'Manager', status: 'Inaktiv' },
        { id: 5, name: 'Thomas Braun', email: 'thomas@firma.de', rolle: 'Techniker', status: 'Aktiv' },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Benutzer</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Rolle</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {benutzer.map(b => (
                        <tr key={b.id}>
                            <td>{b.id}</td>
                            <td>{b.name}</td>
                            <td>{b.email}</td>
                            <td>{b.rolle}</td>
                            <td>
                                <span className={`status-badge status-${b.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {b.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Benutzer;
