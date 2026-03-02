import React from 'react';

const benutzer = [
  { id: 1, name: 'Anna Müller', email: 'a.mueller@firma.de', rolle: 'Admin', aktiv: true },
  { id: 2, name: 'Ben Schmidt', email: 'b.schmidt@firma.de', rolle: 'Techniker', aktiv: true },
  { id: 3, name: 'Clara Weber', email: 'c.weber@firma.de', rolle: 'Techniker', aktiv: false },
  { id: 4, name: 'David Koch', email: 'd.koch@firma.de', rolle: 'Leser', aktiv: true },
  { id: 5, name: 'Eva Braun', email: 'e.braun@firma.de', rolle: 'Admin', aktiv: true },
  { id: 6, name: 'Felix Lang', email: 'f.lang@firma.de', rolle: 'Leser', aktiv: false },
];

const Benutzer = () => {
  return (
    <div>
      <h2 className="page-title">Benutzer</h2>
      <div className="table-container">
        <table>
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
                <td>
                  <span className={`badge ${b.aktiv ? 'ok' : 'warn'}`}>
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
