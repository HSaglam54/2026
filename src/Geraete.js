import React from 'react';

const geraete = [
    { id: 'G-204', typ: 'Kühlschrank', modell: 'FrostPro 3000', standort: 'München – Zentralmarkt', temp: '-4°C', status: 'OK' },
    { id: 'G-088', typ: 'Tiefkühler', modell: 'ArcticBox X2', standort: 'Hamburg – Lager Nord', temp: '-22°C', status: 'OK' },
    { id: 'G-011', typ: 'Klimaanlage', modell: 'CoolAir Pro', standort: 'Berlin – Büro HQ', temp: '20°C', status: 'Warnung' },
    { id: 'G-305', typ: 'Kühltheke', modell: 'DisplayCool 500', standort: 'Köln – Filiale Ost', temp: '-2°C', status: 'OK' },
    { id: 'G-119', typ: 'Kühlschrank', modell: 'FrostPro 2000', standort: 'Frankfurt – Markt 2', temp: '-5°C', status: 'OK' },
    { id: 'G-077', typ: 'Tiefkühler', modell: 'ArcticBox X1', standort: 'Stuttgart – Depot', temp: '-18°C', status: 'Ausgefallen' },
    { id: 'G-233', typ: 'Kühltheke', modell: 'DisplayCool 300', standort: 'Dresden – Filiale West', temp: '-3°C', status: 'OK' },
    { id: 'G-156', typ: 'Klimaanlage', modell: 'CoolAir Basic', standort: 'Leipzig – Markt 1', temp: '22°C', status: 'Wartung' },
    { id: 'G-391', typ: 'Kühlschrank', modell: 'FrostPro 3000', standort: 'München – Zentralmarkt', temp: '-4°C', status: 'OK' },
    { id: 'G-044', typ: 'Tiefkühler', modell: 'ArcticBox X3', standort: 'Berlin – Büro HQ', temp: '-24°C', status: 'OK' },
];

const statusBadge = (status) => {
    if (status === 'OK') return <span className="badge badge-green">{status}</span>;
    if (status === 'Warnung') return <span className="badge badge-yellow">{status}</span>;
    if (status === 'Wartung') return <span className="badge badge-blue">{status}</span>;
    return <span className="badge badge-red">{status}</span>;
};

const Geraete = () => {
    return (
        <div>
            <p className="page-title">Geräteverwaltung</p>

            <div className="kpi-grid">
                <div className="kpi-card blue">
                    <div className="kpi-label">Gesamt Geräte</div>
                    <div className="kpi-value">312</div>
                    <div className="kpi-sub">alle Standorte</div>
                </div>
                <div className="kpi-card green">
                    <div className="kpi-label">Betriebsbereit</div>
                    <div className="kpi-value">274</div>
                    <div className="kpi-sub">87,8%</div>
                </div>
                <div className="kpi-card orange">
                    <div className="kpi-label">Warnung</div>
                    <div className="kpi-value">14</div>
                    <div className="kpi-sub">Überprüfung nötig</div>
                </div>
                <div className="kpi-card red">
                    <div className="kpi-label">Ausgefallen</div>
                    <div className="kpi-value">6</div>
                    <div className="kpi-sub">sofortige Reparatur</div>
                </div>
            </div>

            <div className="table-section">
                <h3>Geräteliste</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Geräte-ID</th>
                            <th>Typ</th>
                            <th>Modell</th>
                            <th>Standort</th>
                            <th>Temperatur</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {geraete.map((g) => (
                            <tr key={g.id}>
                                <td>{g.id}</td>
                                <td>{g.typ}</td>
                                <td>{g.modell}</td>
                                <td>{g.standort}</td>
                                <td>{g.temp}</td>
                                <td>{statusBadge(g.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Geraete;
