import React from 'react';

const benutzer = [
  { id: 1, name: 'Max Müller', email: 'max.mueller@firma.de', rolle: 'Administrator', status: 'Aktiv' },
  { id: 2, name: 'Sandra Schmidt', email: 's.schmidt@firma.de', rolle: 'Techniker', status: 'Aktiv' },
  { id: 3, name: 'Thomas Weber', email: 't.weber@firma.de', rolle: 'Techniker', status: 'Aktiv' },
  { id: 4, name: 'Anna Braun', email: 'a.braun@firma.de', rolle: 'Leser', status: 'Inaktiv' },
  { id: 5, name: 'Klaus Fischer', email: 'k.fischer@firma.de', rolle: 'Manager', status: 'Aktiv' },
  { id: 6, name: 'Lisa Hoffmann', email: 'l.hoffmann@firma.de', rolle: 'Leser', status: 'Aktiv' },
];

const badgeClass = { Aktiv: 'badge-ok', Inaktiv: 'badge-error' };

export default function Benutzer() {
  return (
    <div>
      <h1 className="page-title">👤 Benutzer</h1>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Rolle</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {benutzer.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.rolle}</td>
                <td><span className={`badge ${badgeClass[b.status]}`}>{b.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
