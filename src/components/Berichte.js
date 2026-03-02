import React from 'react';

const berichte = [
  { id: 'B-2026-03', titel: 'Monatsbericht März 2026',    typ: 'Monatsbericht', erstellt: '01.03.2026', autor: 'M. Schreiber', status: 'ok' },
  { id: 'B-2026-02', titel: 'Monatsbericht Februar 2026', typ: 'Monatsbericht', erstellt: '01.02.2026', autor: 'M. Schreiber', status: 'ok' },
  { id: 'B-2026-01', titel: 'Monatsbericht Januar 2026',  typ: 'Monatsbericht', erstellt: '01.01.2026', autor: 'M. Schreiber', status: 'ok' },
  { id: 'W-2026-09', titel: 'Wartungsbericht KW 09',      typ: 'Wartungsbericht', erstellt: '28.02.2026', autor: 'J. Müller',  status: 'ok' },
  { id: 'W-2026-08', titel: 'Wartungsbericht KW 08',      typ: 'Wartungsbericht', erstellt: '21.02.2026', autor: 'S. Weber',   status: 'ok' },
  { id: 'S-2026-01', titel: 'Störungsanalyse Hamburg',    typ: 'Störungsbericht', erstellt: '01.03.2026', autor: 'P. Braun',   status: 'warn' },
];

const statusBadge = (s) => {
  if (s === 'ok')   return <span className="badge badge-ok">Abgeschlossen</span>;
  return              <span className="badge badge-warn">In Bearbeitung</span>;
};

function Berichte() {
  return (
    <div>
      <h1 className="page-title">Berichte</h1>

      <div className="kpi-grid">
        <div className="kpi-card blue">
          <div className="kpi-label">Berichte gesamt</div>
          <div className="kpi-value">42</div>
          <div className="kpi-sub">dieses Jahr</div>
        </div>
        <div className="kpi-card green">
          <div className="kpi-label">Monatsberichte</div>
          <div className="kpi-value">3</div>
          <div className="kpi-sub">2026</div>
        </div>
        <div className="kpi-card blue">
          <div className="kpi-label">Wartungsberichte</div>
          <div className="kpi-value">9</div>
          <div className="kpi-sub">2026</div>
        </div>
        <div className="kpi-card orange">
          <div className="kpi-label">In Bearbeitung</div>
          <div className="kpi-value">1</div>
          <div className="kpi-sub">ausstehend</div>
        </div>
      </div>

      <div className="table-section">
        <div className="table-section-title">Berichtsliste</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titel</th>
              <th>Typ</th>
              <th>Erstellt am</th>
              <th>Autor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {berichte.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.titel}</td>
                <td>{b.typ}</td>
                <td>{b.erstellt}</td>
                <td>{b.autor}</td>
                <td>{statusBadge(b.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Berichte;
