import React from 'react';

const geraete = [
    { id: 'KA-001', typ: 'Kühlschrank XL', standort: 'Hauptlager Berlin', baujahr: 2019, temp: '-18°C', status: 'Aktiv' },
    { id: 'KA-002', typ: 'Tiefkühlzelle', standort: 'Filiale Hamburg', baujahr: 2020, temp: '-25°C', status: 'Aktiv' },
    { id: 'KA-003', typ: 'Kühltheke', standort: 'Lager München', baujahr: 2018, temp: '+4°C', status: 'Wartung' },
    { id: 'KA-004', typ: 'Industriekühler', standort: 'Depot Köln', baujahr: 2021, temp: '-20°C', status: 'Aktiv' },
    { id: 'KA-005', typ: 'Kühlschrank XL', standort: 'Filiale Frankfurt', baujahr: 2017, temp: '-18°C', status: 'Aktiv' },
    { id: 'KA-006', typ: 'Gefriergerät', standort: 'Lager Stuttgart', baujahr: 2022, temp: '-30°C', status: 'Aktiv' },
    { id: 'KA-007', typ: 'Kühltheke', standort: 'Filiale Düsseldorf', baujahr: 2016, temp: '+2°C', status: 'Inaktiv' },
    { id: 'KA-008', typ: 'Tiefkühlzelle', standort: 'Lager Leipzig', baujahr: 2023, temp: '-22°C', status: 'Aktiv' },
    { id: 'KA-009', typ: 'Industriekühler', standort: 'Filiale Bremen', baujahr: 2020, temp: '-15°C', status: 'Wartung' },
    { id: 'KA-010', typ: 'Kühlschrank XL', standort: 'Lager Nürnberg', baujahr: 2021, temp: '-18°C', status: 'Aktiv' },
];

const badgeClass = (status) => {
    if (status === 'Aktiv') return 'badge badge-green';
    if (status === 'Wartung') return 'badge badge-yellow';
    return 'badge badge-red';
};

const Geraete = () => {
    return (
        <div>
            <h1 className="page-title">Geräte</h1>
            <div className="chart-card">
                <h2>Geräteverzeichnis ({geraete.length} Einträge)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
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
                                <td><span className={badgeClass(g.status)}>{g.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Geraete;
