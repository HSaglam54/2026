import React from 'react';

const wartungen = [
    { id: 1, geraet: 'KA-001', standort: 'Hauptlager Berlin', datum: '05.03.2026', techniker: 'M. Schmidt', typ: 'Geplant', status: 'Offen' },
    { id: 2, geraet: 'KA-003', standort: 'Lager München', datum: '03.03.2026', techniker: 'A. Müller', typ: 'Ungeplant', status: 'In Bearbeitung' },
    { id: 3, geraet: 'KA-007', standort: 'Filiale Düsseldorf', datum: '01.03.2026', techniker: 'K. Weber', typ: 'Geplant', status: 'Abgeschlossen' },
    { id: 4, geraet: 'KA-009', standort: 'Filiale Bremen', datum: '10.03.2026', techniker: 'P. Fischer', typ: 'Ungeplant', status: 'Offen' },
    { id: 5, geraet: 'KA-002', standort: 'Filiale Hamburg', datum: '12.03.2026', techniker: 'S. Bauer', typ: 'Geplant', status: 'Offen' },
    { id: 6, geraet: 'KA-005', standort: 'Filiale Frankfurt', datum: '02.03.2026', techniker: 'M. Schmidt', typ: 'Geplant', status: 'Abgeschlossen' },
    { id: 7, geraet: 'KA-004', standort: 'Depot Köln', datum: '15.03.2026', techniker: 'A. Müller', typ: 'Geplant', status: 'Offen' },
    { id: 8, geraet: 'KA-006', standort: 'Lager Stuttgart', datum: '18.03.2026', techniker: 'K. Weber', typ: 'Ungeplant', status: 'Offen' },
];

const badgeClass = (status) => {
    if (status === 'Abgeschlossen') return 'badge badge-green';
    if (status === 'In Bearbeitung') return 'badge badge-blue';
    return 'badge badge-yellow';
};

const typBadge = (typ) => {
    return typ === 'Geplant' ? 'badge badge-green' : 'badge badge-red';
};

const Wartung = () => {
    return (
        <div>
            <h1 className="page-title">Wartung</h1>
            <div className="chart-card">
                <h2>Wartungsaufträge ({wartungen.length} gesamt)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
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
                                <td><span className={typBadge(w.typ)}>{w.typ}</span></td>
                                <td><span className={badgeClass(w.status)}>{w.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wartung;
