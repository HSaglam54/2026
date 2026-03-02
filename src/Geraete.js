import React from 'react';

const geraete = [
  { id: 1, name: 'Kühlaggregat A1', typ: 'Tiefkühler', standort: 'Lager Nord', temp: -18.2, status: 'ok' },
  { id: 2, name: 'Kühlaggregat A2', typ: 'Kühler', standort: 'Lager Nord', temp: 4.1, status: 'ok' },
  { id: 3, name: 'Kühlaggregat B1', typ: 'Tiefkühler', standort: 'Lager Süd', temp: -17.5, status: 'warn' },
  { id: 4, name: 'Kühlaggregat C1', typ: 'Tiefkühler', standort: 'Filiale Mitte', temp: -19.0, status: 'ok' },
  { id: 5, name: 'Kühlaggregat D1', typ: 'Kühler', standort: 'Lager West', temp: 3.8, status: 'ok' },
  { id: 6, name: 'Kühlaggregat E1', typ: 'Tiefkühler', standort: 'Filiale Ost', temp: -20.1, status: 'ok' },
  { id: 7, name: 'Kühlaggregat F1', typ: 'Kühler', standort: 'Depot Nord', temp: 5.2, status: 'warn' },
];

const Geraete = () => {
  return (
    <div>
      <h2 className="page-title">Geräte</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
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
                <td>{g.name}</td>
                <td>{g.typ}</td>
                <td>{g.standort}</td>
                <td>{g.temp}</td>
                <td>
                  <span className={`badge ${g.status === 'ok' ? 'ok' : 'warn'}`}>
                    {g.status === 'ok' ? 'Online' : 'Warnung'}
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

export default Geraete;
