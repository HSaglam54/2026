import React from 'react';

const wartungen = [
  { id: 1, geraet: 'KA-001', typ: 'Inspektion', faellig: '2026-03-10', techniker: 'M. Müller', status: 'Offen' },
  { id: 2, geraet: 'KA-003', typ: 'Kältemittel prüfen', faellig: '2026-02-28', techniker: 'S. Schmidt', status: 'Überfällig' },
  { id: 3, geraet: 'KA-005', typ: 'Reparatur', faellig: '2026-03-05', techniker: 'T. Weber', status: 'In Arbeit' },
  { id: 4, geraet: 'KA-007', typ: 'Inspektion', faellig: '2026-03-20', techniker: 'M. Müller', status: 'Offen' },
  { id: 5, geraet: 'KA-002', typ: 'Filter wechseln', faellig: '2026-02-15', techniker: 'A. Braun', status: 'Erledigt' },
  { id: 6, geraet: 'KA-004', typ: 'Inspektion', faellig: '2026-04-01', techniker: 'S. Schmidt', status: 'Offen' },
];

const badgeMap = {
  Offen: 'badge-warn',
  Überfällig: 'badge-error',
  'In Arbeit': 'badge-warn',
  Erledigt: 'badge-ok',
};

export default function Wartung() {
  return (
    <div>
      <h1 className="page-title">🔧 Wartung</h1>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Gerät</th>
              <th>Wartungstyp</th>
              <th>Fällig am</th>
              <th>Techniker</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {wartungen.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.geraet}</td>
                <td>{w.typ}</td>
                <td>{w.faellig}</td>
                <td>{w.techniker}</td>
                <td><span className={`badge ${badgeMap[w.status]}`}>{w.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
