import React from 'react';

const benutzer = [
    { id: 'U-001', name: 'Thomas Müller', email: 'thomas.mueller@firma.de', rolle: 'Administrator', abteilung: 'IT', letzterLogin: '02.03.2026', status: 'Aktiv' },
    { id: 'U-002', name: 'Sabine Hoffmann', email: 'sabine.hoffmann@firma.de', rolle: 'Manager', abteilung: 'Vertrieb', letzterLogin: '02.03.2026', status: 'Aktiv' },
    { id: 'U-003', name: 'Klaus Weber', email: 'klaus.weber@firma.de', rolle: 'Techniker', abteilung: 'Wartung', letzterLogin: '01.03.2026', status: 'Aktiv' },
    { id: 'U-004', name: 'Anna Schmidt', email: 'anna.schmidt@firma.de', rolle: 'Techniker', abteilung: 'Wartung', letzterLogin: '01.03.2026', status: 'Aktiv' },
    { id: 'U-005', name: 'Max Fischer', email: 'max.fischer@firma.de', rolle: 'Analyst', abteilung: 'Controlling', letzterLogin: '28.02.2026', status: 'Aktiv' },
    { id: 'U-006', name: 'Lisa Wagner', email: 'lisa.wagner@firma.de', rolle: 'Techniker', abteilung: 'Wartung', letzterLogin: '27.02.2026', status: 'Aktiv' },
    { id: 'U-007', name: 'Jan Schulz', email: 'jan.schulz@firma.de', rolle: 'Leser', abteilung: 'Buchhaltung', letzterLogin: '15.02.2026', status: 'Inaktiv' },
    { id: 'U-008', name: 'Eva Braun', email: 'eva.braun@firma.de', rolle: 'Manager', abteilung: 'Logistik', letzterLogin: '02.03.2026', status: 'Aktiv' },
];

const rolleBadge = (rolle) => {
    if (rolle === 'Administrator') return <span className="badge badge-red">{rolle}</span>;
    if (rolle === 'Manager') return <span className="badge badge-blue">{rolle}</span>;
    if (rolle === 'Techniker') return <span className="badge badge-green">{rolle}</span>;
    if (rolle === 'Analyst') return <span className="badge badge-yellow">{rolle}</span>;
    return <span className="badge badge-gray">{rolle}</span>;
};

const Benutzer = () => {
    return (
        <div>
            <p className="page-title">Benutzerverwaltung</p>

            <div className="kpi-grid">
                <div className="kpi-card blue">
                    <div className="kpi-label">Gesamt Benutzer</div>
                    <div className="kpi-value">38</div>
                    <div className="kpi-sub">registrierte Konten</div>
                </div>
                <div className="kpi-card green">
                    <div className="kpi-label">Aktiv</div>
                    <div className="kpi-value">35</div>
                    <div className="kpi-sub">letzte 30 Tage</div>
                </div>
                <div className="kpi-card orange">
                    <div className="kpi-label">Techniker</div>
                    <div className="kpi-value">18</div>
                    <div className="kpi-sub">im Außendienst</div>
                </div>
                <div className="kpi-card purple">
                    <div className="kpi-label">Admins</div>
                    <div className="kpi-value">3</div>
                    <div className="kpi-sub">Vollzugriff</div>
                </div>
            </div>

            <div className="table-section">
                <h3>Benutzerübersicht</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Rolle</th>
                            <th>Abteilung</th>
                            <th>Letzter Login</th>
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
                                <td>{b.abteilung}</td>
                                <td>{b.letzterLogin}</td>
                                <td>
                                    {b.status === 'Aktiv'
                                        ? <span className="badge badge-green">{b.status}</span>
                                        : <span className="badge badge-gray">{b.status}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Benutzer;
