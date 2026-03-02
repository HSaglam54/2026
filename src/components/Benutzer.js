import React from 'react';

const benutzer = [
  { id: 1, name: 'Max Schreiber',   email: 'max.schreiber@kaeltetechnik.de',   rolle: 'admin',  letzteAnmeldung: '02.03.2026', status: 'ok'  },
  { id: 2, name: 'Jana Müller',     email: 'jana.mueller@kaeltetechnik.de',    rolle: 'tech',   letzteAnmeldung: '02.03.2026', status: 'ok'  },
  { id: 3, name: 'Stefan Weber',    email: 'stefan.weber@kaeltetechnik.de',    rolle: 'tech',   letzteAnmeldung: '01.03.2026', status: 'ok'  },
  { id: 4, name: 'Peter Braun',     email: 'peter.braun@kaeltetechnik.de',     rolle: 'tech',   letzteAnmeldung: '28.02.2026', status: 'ok'  },
  { id: 5, name: 'Maria Klein',     email: 'maria.klein@kaeltetechnik.de',     rolle: 'viewer', letzteAnmeldung: '27.02.2026', status: 'ok'  },
  { id: 6, name: 'Thomas Hofmann',  email: 'thomas.hofmann@kaeltetechnik.de',  rolle: 'viewer', letzteAnmeldung: '25.02.2026', status: 'warn'},
];

const rolleBadge = (r) => {
  if (r === 'admin')  return <span className="badge badge-admin">Admin</span>;
  if (r === 'tech')   return <span className="badge badge-tech">Techniker</span>;
  return                <span className="badge badge-viewer">Betrachter</span>;
};

const statusBadge = (s) => {
  if (s === 'ok') return <span className="badge badge-ok">Aktiv</span>;
  return            <span className="badge badge-warn">Inaktiv</span>;
};

function Benutzer() {
  return (
    <div>
      <h1 className="page-title">Benutzer</h1>

      <div className="kpi-grid">
        <div className="kpi-card blue">
          <div className="kpi-label">Benutzer gesamt</div>
          <div className="kpi-value">6</div>
          <div className="kpi-sub">registriert</div>
        </div>
        <div className="kpi-card green">
          <div className="kpi-label">Aktiv</div>
          <div className="kpi-value">5</div>
          <div className="kpi-sub">angemeldet</div>
        </div>
        <div className="kpi-card orange">
          <div className="kpi-label">Inaktiv</div>
          <div className="kpi-value">1</div>
          <div className="kpi-sub">länger nicht aktiv</div>
        </div>
        <div className="kpi-card blue">
          <div className="kpi-label">Administratoren</div>
          <div className="kpi-value">1</div>
          <div className="kpi-sub">Vollzugriff</div>
        </div>
      </div>

      <div className="table-section">
        <div className="table-section-title">Benutzerliste</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Rolle</th>
              <th>Letzte Anmeldung</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {benutzer.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{rolleBadge(b.rolle)}</td>
                <td>{b.letzteAnmeldung}</td>
                <td>{statusBadge(b.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Benutzer;
