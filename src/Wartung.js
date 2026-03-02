import React from 'react';

const wartungen = [
  { id: 1, gerät: 'Kühlaggregat A1', standort: 'Lager Nord', datum: '2026-03-05', typ: 'Inspektion', status: 'pending' },
  { id: 2, gerät: 'Kühlaggregat B1', standort: 'Lager Süd', datum: '2026-03-07', typ: 'Reparatur', status: 'warn' },
  { id: 3, gerät: 'Kühlaggregat C1', standort: 'Filiale Mitte', datum: '2026-03-10', typ: 'Inspektion', status: 'pending' },
  { id: 4, gerät: 'Kühlaggregat D1', standort: 'Lager West', datum: '2026-02-28', typ: 'Filterwechsel', status: 'ok' },
  { id: 5, gerät: 'Kühlaggregat E1', standort: 'Filiale Ost', datum: '2026-03-15', typ: 'Inspektion', status: 'pending' },
  { id: 6, gerät: 'Kühlaggregat F1', standort: 'Depot Nord', datum: '2026-03-01', typ: 'Reparatur', status: 'ok' },
];

const STATUS_LABEL = { ok: 'Erledigt', pending: 'Geplant', warn: 'Überfällig' };

const Wartung = () => {
  return (
    <div>
      <h2 className="page-title">Wartung</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Gerät</th>
              <th>Standort</th>
              <th>Datum</th>
              <th>Typ</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {wartungen.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.gerät}</td>
                <td>{w.standort}</td>
                <td>{w.datum}</td>
                <td>{w.typ}</td>
                <td>
                  <span className={`badge ${w.status}`}>
                    {STATUS_LABEL[w.status]}
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

export default Wartung;
