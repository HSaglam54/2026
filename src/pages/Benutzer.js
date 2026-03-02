import React from 'react';

const benutzer = [
    { id: 1, name: 'Max Mustermann', email: 'max.mustermann@firma.de', rolle: 'Administrator', standort: 'Alle', aktiv: true },
    { id: 2, name: 'Anna Müller', email: 'anna.mueller@firma.de', rolle: 'Techniker', standort: 'Berlin', aktiv: true },
    { id: 3, name: 'Klaus Weber', email: 'k.weber@firma.de', rolle: 'Techniker', standort: 'Hamburg', aktiv: true },
    { id: 4, name: 'Peter Fischer', email: 'p.fischer@firma.de', rolle: 'Techniker', standort: 'München', aktiv: false },
    { id: 5, name: 'Sandra Bauer', email: 's.bauer@firma.de', rolle: 'Manager', standort: 'Frankfurt', aktiv: true },
    { id: 6, name: 'Thomas König', email: 't.koenig@firma.de', rolle: 'Techniker', standort: 'Köln', aktiv: true },
    { id: 7, name: 'Maria Schmidt', email: 'm.schmidt@firma.de', rolle: 'Manager', standort: 'Stuttgart', aktiv: true },
    { id: 8, name: 'Robert Schulz', email: 'r.schulz@firma.de', rolle: 'Techniker', standort: 'Dresden', aktiv: false },
];

const rolleBadge = (rolle) => {
    if (rolle === 'Administrator') return 'badge badge-red';
    if (rolle === 'Manager') return 'badge badge-blue';
    return 'badge badge-green';
};

const Benutzer = () => {
    return (
        <div>
            <h1 className="page-title">Benutzer</h1>
            <div className="chart-card">
                <h2>Benutzerverwaltung ({benutzer.length} Benutzer)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Rolle</th>
                            <th>Standort</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {benutzer.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.name}</td>
                                <td>{b.email}</td>
                                <td><span className={rolleBadge(b.rolle)}>{b.rolle}</span></td>
                                <td>{b.standort}</td>
                                <td>
                                    <span className={b.aktiv ? 'badge badge-green' : 'badge badge-red'}>
                                        {b.aktiv ? 'Aktiv' : 'Inaktiv'}
                                    </span>
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
