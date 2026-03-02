import React from 'react';

const berichte = [
    { id: 'B-2026-03', titel: 'Monatsbericht März 2026', typ: 'Umsatz', erstellt: '01.03.2026', groesse: '2,4 MB', status: 'Aktuell' },
    { id: 'B-2026-02', titel: 'Monatsbericht Februar 2026', typ: 'Umsatz', erstellt: '01.02.2026', groesse: '2,1 MB', status: 'Archiviert' },
    { id: 'B-W-2026-09', titel: 'Wartungsbericht KW 09/2026', typ: 'Wartung', erstellt: '28.02.2026', groesse: '1,8 MB', status: 'Aktuell' },
    { id: 'B-E-2026-02', titel: 'Energieverbrauch Feb 2026', typ: 'Energie', erstellt: '03.03.2026', groesse: '3,2 MB', status: 'Aktuell' },
    { id: 'B-Q-2026-01', titel: 'Quartalsbericht Q1/2026', typ: 'Quartal', erstellt: '15.01.2026', groesse: '5,7 MB', status: 'In Erstellung' },
    { id: 'B-2026-01', titel: 'Monatsbericht Januar 2026', typ: 'Umsatz', erstellt: '01.01.2026', groesse: '2,0 MB', status: 'Archiviert' },
    { id: 'B-G-2026-02', titel: 'Geräteausfälle Feb 2026', typ: 'Technik', erstellt: '05.03.2026', groesse: '1,1 MB', status: 'Aktuell' },
];

const umsatzDaten = [
    { monat: 'Jan', wert: 320 },
    { monat: 'Feb', wert: 385 },
    { monat: 'Mär', wert: 412 },
    { monat: 'Apr', wert: 298 },
    { monat: 'Mai', wert: 450 },
    { monat: 'Jun', wert: 390 },
];

const Berichte = () => {
    return (
        <div>
            <p className="page-title">Berichte & Analysen</p>

            <div className="kpi-grid">
                <div className="kpi-card blue">
                    <div className="kpi-label">Berichte gesamt</div>
                    <div className="kpi-value">47</div>
                    <div className="kpi-sub">dieses Jahr</div>
                </div>
                <div className="kpi-card green">
                    <div className="kpi-label">Umsatz Q1/2026</div>
                    <div className="kpi-value">€ 1,1 Mio.</div>
                    <div className="kpi-sub">+8% ggü. Vorjahr</div>
                </div>
                <div className="kpi-card orange">
                    <div className="kpi-label">Energiekosten</div>
                    <div className="kpi-value">€ 84.200</div>
                    <div className="kpi-sub">Feb 2026</div>
                </div>
                <div className="kpi-card purple">
                    <div className="kpi-label">Wartungskosten</div>
                    <div className="kpi-value">€ 23.500</div>
                    <div className="kpi-sub">Feb 2026</div>
                </div>
            </div>

            <div className="two-col">
                <div className="table-section">
                    <h3>Umsatz 2026 (in Tsd. €)</h3>
                    <div className="bar-chart">
                        {umsatzDaten.map((d, i) => (
                            <div key={i} className="bar-col">
                                <div className="bar-value">{d.wert}</div>
                                <div className="bar" style={{ height: `${(d.wert / 450) * 100}%` }}></div>
                                <div className="bar-label">{d.monat}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="table-section">
                    <h3>Kosten nach Kategorie</h3>
                    <table>
                        <tbody>
                            <tr><td>Wartung & Reparatur</td><td><strong>€ 23.500</strong></td></tr>
                            <tr><td>Energie & Strom</td><td><strong>€ 84.200</strong></td></tr>
                            <tr><td>Personal</td><td><strong>€ 145.000</strong></td></tr>
                            <tr><td>Neuanschaffungen</td><td><strong>€ 38.900</strong></td></tr>
                            <tr><td>Sonstiges</td><td><strong>€ 12.300</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="table-section">
                <h3>Berichtsverwaltung</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Bericht-Nr.</th>
                            <th>Titel</th>
                            <th>Typ</th>
                            <th>Erstellt am</th>
                            <th>Größe</th>
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
                                <td>{b.groesse}</td>
                                <td>
                                    {b.status === 'Aktuell' && <span className="badge badge-green">{b.status}</span>}
                                    {b.status === 'Archiviert' && <span className="badge badge-gray">{b.status}</span>}
                                    {b.status === 'In Erstellung' && <span className="badge badge-blue">{b.status}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Berichte;
