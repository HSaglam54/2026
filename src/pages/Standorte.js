import React from 'react';

const standorte = [
  { id: 1, name: 'Lager Nord', adresse: 'Industriestr. 12, Berlin', geraete: 8, status: 'OK' },
  { id: 2, name: 'Lager Süd', adresse: 'Hauptstr. 45, München', geraete: 6, status: 'OK' },
  { id: 3, name: 'Filiale Ost', adresse: 'Ringstr. 3, Dresden', geraete: 4, status: 'Warnung' },
  { id: 4, name: 'Filiale West', adresse: 'Bahnhofstr. 21, Köln', geraete: 5, status: 'OK' },
  { id: 5, name: 'Zentrallager', adresse: 'Logistikpark 1, Frankfurt', geraete: 15, status: 'OK' },
  { id: 6, name: 'Depot Hamburg', adresse: 'Hafenweg 8, Hamburg', geraete: 7, status: 'Fehler' },
];

const badgeClass = { OK: 'badge-ok', Warnung: 'badge-warn', Fehler: 'badge-error' };

export default function Standorte() {
  return (
    <div>
      <h1 className="page-title">📍 Standorte</h1>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Adresse</th>
              <th>Geräte</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {standorte.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.adresse}</td>
                <td>{s.geraete}</td>
                <td><span className={`badge ${badgeClass[s.status]}`}>{s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
