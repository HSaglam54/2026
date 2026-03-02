import React from 'react';

const geraete = [
  { id: 'K-101', typ: 'Kühlanlage',       standort: 'Berlin Mitte',     baujahr: 2019, temp: '-18 °C', status: 'ok'    },
  { id: 'T-204', typ: 'Tiefkühlzelle',    standort: 'Hamburg Hafen',    baujahr: 2017, temp: '-22 °C', status: 'error' },
  { id: 'A-05',  typ: 'Kälteaggregat',   standort: 'München Süd',      baujahr: 2021, temp: '-15 °C', status: 'warn'  },
  { id: 'K-302', typ: 'Kühlzelle',        standort: 'Frankfurt Ost',    baujahr: 2018, temp: '-20 °C', status: 'ok'    },
  { id: 'A-11',  typ: 'Anlage',           standort: 'Köln West',        baujahr: 2020, temp: '-18 °C', status: 'ok'    },
  { id: 'K-205', typ: 'Kühlanlage',       standort: 'Stuttgart Nord',   baujahr: 2022, temp: '-17 °C', status: 'ok'    },
  { id: 'T-106', typ: 'Tiefkühlzelle',    standort: 'Düsseldorf Mitte', baujahr: 2016, temp: '-25 °C', status: 'warn'  },
  { id: 'A-33',  typ: 'Kälteaggregat',   standort: 'Leipzig Zentrum',  baujahr: 2023, temp: '-16 °C', status: 'ok'    },
];

const statusBadge = (s) => {
  if (s === 'ok')    return <span className="badge badge-ok">Betrieb</span>;
  if (s === 'error') return <span className="badge badge-error">Störung</span>;
  return               <span className="badge badge-warn">Wartung</span>;
};

function Geraete() {
  return (
    <div>
      <h1 className="page-title">Geräte</h1>

      <div className="kpi-grid">
        <div className="kpi-card blue">
          <div className="kpi-label">Geräte gesamt</div>
          <div className="kpi-value">142</div>
          <div className="kpi-sub">inventarisiert</div>
        </div>
        <div className="kpi-card green">
          <div className="kpi-label">In Betrieb</div>
          <div className="kpi-value">131</div>
          <div className="kpi-sub">störungsfrei</div>
        </div>
        <div className="kpi-card orange">
          <div className="kpi-label">In Wartung</div>
          <div className="kpi-value">8</div>
          <div className="kpi-sub">planmäßig</div>
        </div>
        <div className="kpi-card red">
          <div className="kpi-label">Störung</div>
          <div className="kpi-value">3</div>
          <div className="kpi-sub">sofort handeln</div>
        </div>
      </div>

      <div className="table-section">
        <div className="table-section-title">Geräteliste</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Geräte-ID</th>
              <th>Typ</th>
              <th>Standort</th>
              <th>Baujahr</th>
              <th>Temperatur</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {geraete.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.typ}</td>
                <td>{g.standort}</td>
                <td>{g.baujahr}</td>
                <td>{g.temp}</td>
                <td>{statusBadge(g.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Geraete;
