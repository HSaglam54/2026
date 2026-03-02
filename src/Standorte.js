import React from 'react';

const standorte = [
  { id: 1, name: 'Lager Nord', stadt: 'Hamburg', geraete: 12, status: 'ok' },
  { id: 2, name: 'Lager Süd', stadt: 'München', geraete: 8, status: 'ok' },
  { id: 3, name: 'Filiale Mitte', stadt: 'Frankfurt', geraete: 6, status: 'warn' },
  { id: 4, name: 'Lager West', stadt: 'Köln', geraete: 10, status: 'ok' },
  { id: 5, name: 'Filiale Ost', stadt: 'Berlin', geraete: 5, status: 'ok' },
  { id: 6, name: 'Depot Nord', stadt: 'Bremen', geraete: 7, status: 'warn' },
];

const Standorte = () => {
  return (
    <div>
      <h2 className="page-title">Standorte</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Stadt</th>
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
                <td>{s.geraete}</td>
                <td>
                  <span className={`badge ${s.status === 'ok' ? 'ok' : 'warn'}`}>
                    {s.status === 'ok' ? 'Aktiv' : 'Warnung'}
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

export default Standorte;
