import React from 'react';

const kpiData = [
  { label: 'Aktive Geräte',       value: '142',   sub: 'von 150 gesamt',      color: 'green'  },
  { label: 'Standorte',           value: '12',    sub: 'bundesweit',           color: 'blue'   },
  { label: 'Offene Wartungen',    value: '8',     sub: 'fällig diese Woche',   color: 'orange' },
  { label: 'Störungen',           value: '3',     sub: 'aktiv',                color: 'red'    },
];

const recentEvents = [
  { id: 1, datum: '02.03.2026', standort: 'Berlin Mitte',      geraet: 'Kühlanlage K-101', ereignis: 'Wartung abgeschlossen',  status: 'ok'   },
  { id: 2, datum: '01.03.2026', standort: 'Hamburg Hafen',     geraet: 'Tiefkühlzelle T-204', ereignis: 'Störung gemeldet',    status: 'error'},
  { id: 3, datum: '01.03.2026', standort: 'München Süd',       geraet: 'Kälteaggregat A-05', ereignis: 'Inspektion geplant',  status: 'warn' },
  { id: 4, datum: '28.02.2026', standort: 'Frankfurt Ost',     geraet: 'Kühlzelle K-302',   ereignis: 'Wartung abgeschlossen', status: 'ok'  },
  { id: 5, datum: '27.02.2026', standort: 'Köln West',         geraet: 'Anlage A-11',        ereignis: 'Alarm quittiert',      status: 'ok'  },
];

const statusBadge = (s) => {
  if (s === 'ok')    return <span className="badge badge-ok">OK</span>;
  if (s === 'error') return <span className="badge badge-error">Störung</span>;
  return               <span className="badge badge-warn">Ausstehend</span>;
};

function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Dashboard — Übersicht</h1>

      <div className="kpi-grid">
        {kpiData.map((k) => (
          <div key={k.label} className={`kpi-card ${k.color}`}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="table-section">
        <div className="table-section-title">Letzte Ereignisse</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Standort</th>
              <th>Gerät</th>
              <th>Ereignis</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentEvents.map((e) => (
              <tr key={e.id}>
                <td>{e.datum}</td>
                <td>{e.standort}</td>
                <td>{e.geraet}</td>
                <td>{e.ereignis}</td>
                <td>{statusBadge(e.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
