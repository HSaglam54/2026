import React from 'react';

const wartungsauftraege = [
    { id: 'W-1045', geraet: 'Kühlschrank G-204', standort: 'München – Zentralmarkt', techniker: 'Max Müller', faelligkeit: '01.03.2026', prioritaet: 'Normal', status: 'Erledigt' },
    { id: 'W-1044', geraet: 'Tiefkühler G-088', standort: 'Hamburg – Lager Nord', techniker: 'Anna Schmidt', faelligkeit: '28.02.2026', prioritaet: 'Hoch', status: 'Erledigt' },
    { id: 'W-1043', geraet: 'Klimaanlage G-011', standort: 'Berlin – Büro HQ', techniker: 'Klaus Weber', faelligkeit: '05.03.2026', prioritaet: 'Kritisch', status: 'In Bearbeitung' },
    { id: 'W-1042', geraet: 'Kühltheke G-305', standort: 'Köln – Filiale Ost', techniker: 'Sabine Bauer', faelligkeit: '10.03.2026', prioritaet: 'Normal', status: 'Offen' },
    { id: 'W-1041', geraet: 'Kühlschrank G-119', standort: 'Frankfurt – Markt 2', techniker: 'Tom Fischer', faelligkeit: '25.02.2026', prioritaet: 'Niedrig', status: 'Erledigt' },
    { id: 'W-1040', geraet: 'Tiefkühler G-077', standort: 'Stuttgart – Depot', techniker: 'Lisa Wagner', faelligkeit: '03.03.2026', prioritaet: 'Kritisch', status: 'Offen' },
    { id: 'W-1039', geraet: 'Klimaanlage G-156', standort: 'Leipzig – Markt 1', techniker: 'Jan Schulz', faelligkeit: '08.03.2026', prioritaet: 'Hoch', status: 'In Bearbeitung' },
    { id: 'W-1038', geraet: 'Kühltheke G-233', standort: 'Dresden – Filiale West', techniker: 'Eva Braun', faelligkeit: '15.03.2026', prioritaet: 'Normal', status: 'Offen' },
];

const statusBadge = (s) => {
    if (s === 'Erledigt') return <span className="badge badge-green">{s}</span>;
    if (s === 'In Bearbeitung') return <span className="badge badge-blue">{s}</span>;
    return <span className="badge badge-yellow">{s}</span>;
};

const prioritaetBadge = (p) => {
    if (p === 'Kritisch') return <span className="badge badge-red">{p}</span>;
    if (p === 'Hoch') return <span className="badge badge-yellow">{p}</span>;
    if (p === 'Normal') return <span className="badge badge-blue">{p}</span>;
    return <span className="badge badge-gray">{p}</span>;
};

const Wartung = () => {
    return (
        <div>
            <p className="page-title">Wartungsmanagement</p>

            <div className="kpi-grid">
                <div className="kpi-card blue">
                    <div className="kpi-label">Gesamt Aufträge</div>
                    <div className="kpi-value">156</div>
                    <div className="kpi-sub">dieses Quartal</div>
                </div>
                <div className="kpi-card green">
                    <div className="kpi-label">Erledigt</div>
                    <div className="kpi-value">121</div>
                    <div className="kpi-sub">77,6%</div>
                </div>
                <div className="kpi-card orange">
                    <div className="kpi-label">In Bearbeitung</div>
                    <div className="kpi-value">12</div>
                    <div className="kpi-sub">aktive Techniker</div>
                </div>
                <div className="kpi-card red">
                    <div className="kpi-label">Kritisch / Offen</div>
                    <div className="kpi-value">7</div>
                    <div className="kpi-sub">sofort handeln!</div>
                </div>
            </div>

            <div className="table-section">
                <h3>Wartungsaufträge</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Auftrag-Nr.</th>
                            <th>Gerät</th>
                            <th>Standort</th>
                            <th>Techniker</th>
                            <th>Fälligkeit</th>
                            <th>Priorität</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wartungsauftraege.map((w) => (
                            <tr key={w.id}>
                                <td>{w.id}</td>
                                <td>{w.geraet}</td>
                                <td>{w.standort}</td>
                                <td>{w.techniker}</td>
                                <td>{w.faelligkeit}</td>
                                <td>{prioritaetBadge(w.prioritaet)}</td>
                                <td>{statusBadge(w.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wartung;
