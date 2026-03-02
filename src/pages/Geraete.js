import React from 'react';

const geraete = [
  { id: 'KA-001', typ: 'Kühlzelle', standort: 'Lager Nord', temp: -18, status: 'OK' },
  { id: 'KA-002', typ: 'Tiefkühlschrank', standort: 'Filiale Ost', temp: -21, status: 'OK' },
  { id: 'KA-003', typ: 'Klimaanlage', standort: 'Zentrallager', temp: 18, status: 'Warnung' },
  { id: 'KA-004', typ: 'Kühlzelle', standort: 'Lager Süd', temp: -17, status: 'OK' },
  { id: 'KA-005', typ: 'Tiefkühltruhe', standort: 'Depot Hamburg', temp: -15, status: 'Fehler' },
  { id: 'KA-006', typ: 'Kühlschrank', standort: 'Filiale West', temp: 4, status: 'OK' },
  { id: 'KA-007', typ: 'Kühlzelle', standort: 'Zentrallager', temp: -19, status: 'OK' },
];

const badgeClass = { OK: 'badge-ok', Warnung: 'badge-warn', Fehler: 'badge-error' };

export default function Geraete() {
  return (
    <div>
      <h1 className="page-title">❄️ Geräte</h1>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Geräte-ID</th>
              <th>Typ</th>
              <th>Standort</th>
              <th>Temperatur (°C)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {geraete.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.typ}</td>
                <td>{g.standort}</td>
                <td>{g.temp}°C</td>
                <td><span className={`badge ${badgeClass[g.status]}`}>{g.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
