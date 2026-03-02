import React, { useState } from 'react';

const standorte = [
    { id: 1, name: 'Berlin Mitte', adresse: 'Friedrichstr. 12, 10117 Berlin', geraete: 12, status: 'Online', umsatz: '€ 18.400', verantwortlich: 'Klaus Meyer' },
    { id: 2, name: 'Hamburg Nord', adresse: 'Mönckebergstr. 7, 20095 Hamburg', geraete: 8, status: 'Online', umsatz: '€ 12.100', verantwortlich: 'Sabine Richter' },
    { id: 3, name: 'München Süd', adresse: 'Marienplatz 3, 80331 München', geraete: 15, status: 'Wartung', umsatz: '€ 21.300', verantwortlich: 'Thomas Huber' },
    { id: 4, name: 'Frankfurt West', adresse: 'Zeil 106, 60313 Frankfurt', geraete: 10, status: 'Online', umsatz: '€ 15.700', verantwortlich: 'Anna Schmidt' },
    { id: 5, name: 'Köln Zentrum', adresse: 'Schildergasse 20, 50667 Köln', geraete: 6, status: 'Offline', umsatz: '€ 8.900', verantwortlich: 'Peter Braun' },
    { id: 6, name: 'Stuttgart Ost', adresse: 'Königstr. 5, 70173 Stuttgart', geraete: 9, status: 'Online', umsatz: '€ 13.200', verantwortlich: 'Monika Wolf' },
    { id: 7, name: 'Düsseldorf City', adresse: 'Schadowstr. 40, 40212 Düsseldorf', geraete: 11, status: 'Online', umsatz: '€ 16.800', verantwortlich: 'Frank Fischer' },
    { id: 8, name: 'Leipzig Mitte', adresse: 'Petersstr. 30, 04109 Leipzig', geraete: 7, status: 'Wartung', umsatz: '€ 9.600', verantwortlich: 'Karin Schäfer' },
];

const statusKlasse = (status) => {
    if (status === 'Online') return 'badge badge-online';
    if (status === 'Offline') return 'badge badge-offline';
    return 'badge badge-wartung';
};

const Standorte = () => {
    const [suche, setSuche] = useState('');

    const gefiltert = standorte.filter(s =>
        s.name.toLowerCase().includes(suche.toLowerCase()) ||
        s.adresse.toLowerCase().includes(suche.toLowerCase())
    );

    return (
        <div className="page">
            <h1 className="page-title">📍 Standorte</h1>
            <div className="page-actions">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Standort suchen..."
                    value={suche}
                    onChange={(e) => setSuche(e.target.value)}
                />
                <button className="btn btn-primary">+ Neuer Standort</button>
            </div>
            <div className="table-card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Standortname</th>
                            <th>Adresse</th>
                            <th>Geräte</th>
                            <th>Status</th>
                            <th>Umsatz</th>
                            <th>Verantwortlich</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gefiltert.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td><strong>{s.name}</strong></td>
                                <td>{s.adresse}</td>
                                <td>{s.geraete}</td>
                                <td><span className={statusKlasse(s.status)}>{s.status}</span></td>
                                <td>{s.umsatz}</td>
                                <td>{s.verantwortlich}</td>
                                <td>
                                    <button className="btn btn-sm btn-secondary">✏️ Bearbeiten</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Standorte;
