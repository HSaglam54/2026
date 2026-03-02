import React from 'react';

const wartungen = [
  { id: 'W-001', geraet: 'K-101',  standort: 'Berlin Mitte',     datum: '05.03.2026', techniker: 'J. Müller',    typ: 'Inspektion',   status: 'planned' },
  { id: 'W-002', geraet: 'T-204',  standort: 'Hamburg Hafen',    datum: '03.03.2026', techniker: 'S. Weber',     typ: 'Reparatur',    status: 'open'    },
  { id: 'W-003', geraet: 'A-05',   standort: 'München Süd',      datum: '06.03.2026', techniker: 'P. Braun',     typ: 'Inspektion',   status: 'planned' },
  { id: 'W-004', geraet: 'K-302',  standort: 'Frankfurt Ost',    datum: '28.02.2026', techniker: 'M. Klein',     typ: 'Ölwechsel',    status: 'done'    },
  { id: 'W-005', geraet: 'A-11',   standort: 'Köln West',        datum: '27.02.2026', techniker: 'J. Müller',    typ: 'Inspektion',   status: 'done'    },
  { id: 'W-006', geraet: 'T-106',  standort: 'Düsseldorf Mitte', datum: '10.03.2026', techniker: 'S. Weber',     typ: 'Inspektion',   status: 'planned' },
  { id: 'W-007', geraet: 'K-205',  standort: 'Stuttgart Nord',   datum: '12.03.2026', techniker: 'P. Braun',     typ: 'Kältemittel',  status: 'planned' },
];

const statusBadge = (s) => {
  if (s === 'done')    return <span className="badge badge-done">Erledigt</span>;
  if (s === 'open')    return <span className="badge badge-open">Offen</span>;
  return                 <span className="badge badge-planned">Geplant</span>;
};

function Wartung() {
  return (
    <div>
      <h1 className="page-title">Wartung</h1>

      <div className="kpi-grid">
        <div className="kpi-card blue">
          <div className="kpi-label">Gesamt Aufträge</div>
          <div className="kpi-value">24</div>
          <div className="kpi-sub">diesen Monat</div>
        </div>
        <div className="kpi-card green">
          <div className="kpi-label">Erledigt</div>
          <div className="kpi-value">16</div>
          <div className="kpi-sub">abgeschlossen</div>
        </div>
        <div className="kpi-card orange">
          <div className="kpi-label">Offen</div>
          <div className="kpi-value">5</div>
          <div className="kpi-sub">in Bearbeitung</div>
        </div>
        <div className="kpi-card blue">
          <div className="kpi-label">Geplant</div>
          <div className="kpi-value">3</div>
          <div className="kpi-sub">nächste Woche</div>
        </div>
      </div>

      <div className="table-section">
        <div className="table-section-title">Wartungsaufträge</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Auftrag</th>
              <th>Gerät</th>
              <th>Standort</th>
              <th>Datum</th>
              <th>Techniker</th>
              <th>Typ</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {wartungen.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.geraet}</td>
                <td>{w.standort}</td>
                <td>{w.datum}</td>
                <td>{w.techniker}</td>
                <td>{w.typ}</td>
                <td>{statusBadge(w.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wartung;
