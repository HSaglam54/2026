import React from 'react';

const benutzer = [
  { id: 1, name: 'Klaus Müller', email: 'k.mueller@kältetechnik.de', rolle: 'Administrator', standort: 'Alle', aktiv: true },
  { id: 2, name: 'Sabine Weber', email: 's.weber@kältetechnik.de', rolle: 'Manager', standort: 'München', aktiv: true },
  { id: 3, name: 'Thomas Schulz', email: 't.schulz@kältetechnik.de', rolle: 'Techniker', standort: 'Hamburg', aktiv: true },
  { id: 4, name: 'Anna Fischer', email: 'a.fischer@kältetechnik.de', rolle: 'Techniker', standort: 'Berlin', aktiv: false },
  { id: 5, name: 'Michael Wagner', email: 'm.wagner@kältetechnik.de', rolle: 'Berichtswesen', standort: 'Alle', aktiv: true },
  { id: 6, name: 'Julia Becker', email: 'j.becker@kältetechnik.de', rolle: 'Manager', standort: 'Frankfurt', aktiv: true },
  { id: 7, name: 'Stefan Hoffmann', email: 's.hoffmann@kältetechnik.de', rolle: 'Techniker', standort: 'Köln', aktiv: true },
  { id: 8, name: 'Lisa Schneider', email: 'l.schneider@kältetechnik.de', rolle: 'Techniker', standort: 'Stuttgart', aktiv: false },
];

const rolleClass = (rolle) => {
  if (rolle === 'Administrator') return 'badge badge-red';
  if (rolle === 'Manager') return 'badge badge-blue';
  return 'badge badge-green';
};

const Benutzer = () => {
  return (
    <div>
      <p className="page-heading">Benutzer</p>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Rolle</th>
              <th>Zuständiger Standort</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {benutzer.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td><span className={rolleClass(b.rolle)}>{b.rolle}</span></td>
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
