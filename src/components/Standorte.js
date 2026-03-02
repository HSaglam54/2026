import React from 'react';

const standorte = [
  { id: 1, name: 'Berlin Mitte',   adresse: 'Unter den Linden 1, 10117 Berlin',      geraete: 18, status: 'ok'    },
  { id: 2, name: 'Hamburg Hafen',  adresse: 'Speicherstadt 5, 20457 Hamburg',         geraete: 12, status: 'error' },
  { id: 3, name: 'München Süd',    adresse: 'Isarstraße 22, 81667 München',           geraete: 21, status: 'ok'    },
  { id: 4, name: 'Frankfurt Ost',  adresse: 'Ostendstraße 14, 60314 Frankfurt',       geraete: 9,  status: 'warn'  },
  { id: 5, name: 'Köln West',      adresse: 'Aachener Str. 200, 50933 Köln',         geraete: 15, status: 'ok'    },
  { id: 6, name: 'Stuttgart Nord', adresse: 'Pragstraße 100, 70376 Stuttgart',        geraete: 11, status: 'ok'    },
  { id: 7, name: 'Düsseldorf Mitte', adresse: 'Königsallee 30, 40212 Düsseldorf',    geraete: 14, status: 'ok'    },
  { id: 8, name: 'Leipzig Zentrum', adresse: 'Karl-Marx-Platz 3, 04109 Leipzig',      geraete: 8,  status: 'warn'  },
];

const statusBadge = (s) => {
  if (s === 'ok')    return <span className="badge badge-ok">Aktiv</span>;
  if (s === 'error') return <span className="badge badge-error">Störung</span>;
  return               <span className="badge badge-warn">Wartung</span>;
};

function Standorte() {
  return (
    <div>
      <h1 className="page-title">Standorte</h1>

      <div className="kpi-grid">
        <div className="kpi-card blue">
          <div className="kpi-label">Gesamt Standorte</div>
          <div className="kpi-value">12</div>
          <div className="kpi-sub">bundesweit</div>
        </div>
        <div className="kpi-card green">
          <div className="kpi-label">Aktive Standorte</div>
          <div className="kpi-value">9</div>
          <div className="kpi-sub">ohne Probleme</div>
        </div>
        <div className="kpi-card orange">
          <div className="kpi-label">Wartung fällig</div>
          <div className="kpi-value">2</div>
          <div className="kpi-sub">diese Woche</div>
        </div>
        <div className="kpi-card red">
          <div className="kpi-label">Mit Störung</div>
          <div className="kpi-value">1</div>
          <div className="kpi-sub">sofort handeln</div>
        </div>
      </div>

      <div className="table-section">
        <div className="table-section-title">Alle Standorte</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Standort</th>
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
                <td>{statusBadge(s.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Standorte;
