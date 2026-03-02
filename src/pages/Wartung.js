import React from 'react';

const wartungen = [
  { id: 'W-001', geraet: 'KG-003', standort: 'Berlin Mitte', typ: 'Inspektion', faellig: '2026-03-05', techniker: 'M. Schulz', prioritaet: 'Hoch' },
  { id: 'W-002', geraet: 'KG-005', standort: 'Köln West', typ: 'Reparatur', faellig: '2026-03-03', techniker: 'T. Müller', prioritaet: 'Kritisch' },
  { id: 'W-003', geraet: 'KG-010', standort: 'Hannover', typ: 'Inspektion', faellig: '2026-03-10', techniker: 'A. Weber', prioritaet: 'Mittel' },
  { id: 'W-004', geraet: 'KG-001', standort: 'München Mitte', typ: 'Reinigung', faellig: '2026-03-15', techniker: 'M. Schulz', prioritaet: 'Niedrig' },
  { id: 'W-005', geraet: 'KG-007', standort: 'Düsseldorf', typ: 'Inspektion', faellig: '2026-03-12', techniker: 'S. Fischer', prioritaet: 'Mittel' },
  { id: 'W-006', geraet: 'KG-004', standort: 'Lager Frankfurt', typ: 'Kältemittelbefüllung', faellig: '2026-03-08', techniker: 'T. Müller', prioritaet: 'Hoch' },
  { id: 'W-007', geraet: 'KG-002', standort: 'Hamburg Nord', typ: 'Inspektion', faellig: '2026-03-20', techniker: 'A. Weber', prioritaet: 'Niedrig' },
  { id: 'W-008', geraet: 'KG-009', standort: 'Nürnberg', typ: 'Reinigung', faellig: '2026-03-18', techniker: 'S. Fischer', prioritaet: 'Niedrig' },
];

const badgeClass = (prio) => {
  if (prio === 'Kritisch') return 'badge badge-red';
  if (prio === 'Hoch') return 'badge badge-orange';
  if (prio === 'Mittel') return 'badge badge-blue';
  return 'badge badge-green';
};

const Wartung = () => {
  return (
    <div>
      <p className="page-heading">Wartung</p>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Auftrags-Nr.</th>
              <th>Gerät</th>
              <th>Standort</th>
              <th>Art</th>
              <th>Fällig am</th>
              <th>Techniker</th>
              <th>Priorität</th>
            </tr>
          </thead>
          <tbody>
            {wartungen.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.geraet}</td>
                <td>{w.standort}</td>
                <td>{w.typ}</td>
                <td>{w.faellig}</td>
                <td>{w.techniker}</td>
                <td><span className={badgeClass(w.prioritaet)}>{w.prioritaet}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wartung;
