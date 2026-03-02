import React, { useState } from 'react';

const standorteDaten = [
    { id: 1, name: 'Berlin Zentral', adresse: 'Unter den Linden 12, 10117 Berlin', geraete: 18, status: 'aktiv' },
    { id: 2, name: 'Hamburg Nord', adresse: 'Reeperbahn 55, 20359 Hamburg', geraete: 12, status: 'aktiv' },
    { id: 3, name: 'München Süd', adresse: 'Marienplatz 8, 80331 München', geraete: 25, status: 'aktiv' },
    { id: 4, name: 'Frankfurt Main', adresse: 'Zeil 100, 60313 Frankfurt', geraete: 9, status: 'wartung' },
    { id: 5, name: 'Köln Dom', adresse: 'Domkloster 3, 50667 Köln', geraete: 14, status: 'aktiv' },
    { id: 6, name: 'Stuttgart Mitte', adresse: 'Königstraße 23, 70173 Stuttgart', geraete: 7, status: 'inaktiv' },
    { id: 7, name: 'Düsseldorf Altstadt', adresse: 'Bolkerstraße 7, 40213 Düsseldorf', geraete: 11, status: 'aktiv' },
    { id: 8, name: 'Leipzig West', adresse: 'Karl-Liebknecht-Straße 44, 04107 Leipzig', geraete: 6, status: 'aktiv' },
];

const statusBadge = (status) => {
    if (status === 'aktiv') return <span className="badge badge-gruen">Aktiv</span>;
    if (status === 'wartung') return <span className="badge badge-gelb">Wartung</span>;
    return <span className="badge badge-rot">Inaktiv</span>;
};

const Standorte = () => {
    const [suche, setSuche] = useState('');

    const gefiltert = standorteDaten.filter(
        (s) =>
            s.name.toLowerCase().includes(suche.toLowerCase()) ||
            s.adresse.toLowerCase().includes(suche.toLowerCase())
    );

    return (
        <div>
            <div className="section-header">
                <h1 className="page-title" style={{ marginBottom: 0 }}>📍 Standorte</h1>
                <button className="btn btn-primary">+ Standort hinzufügen</button>
            </div>

            <div className="card">
                <div style={{ marginBottom: 16 }}>
                    <input
                        type="text"
                        placeholder="Standort suchen..."
                        value={suche}
                        onChange={(e) => setSuche(e.target.value)}
                        style={{
                            padding: '8px 14px',
                            borderRadius: 6,
                            border: '1px solid #cbd5e1',
                            fontSize: '0.9rem',
                            width: 260,
                        }}
                    />
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Adresse</th>
                                <th>Geräte</th>
                                <th>Status</th>
                                <th>Aktionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gefiltert.map((s) => (
                                <tr key={s.id}>
                                    <td>{s.id}</td>
                                    <td>{s.name}</td>
                                    <td>{s.adresse}</td>
                                    <td>{s.geraete}</td>
                                    <td>{statusBadge(s.status)}</td>
                                    <td>
                                        <button className="btn btn-secondary" style={{ marginRight: 6, padding: '5px 12px', fontSize: '0.82rem' }}>Bearbeiten</button>
                                        <button className="btn btn-danger" style={{ padding: '5px 12px', fontSize: '0.82rem' }}>Löschen</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Standorte;
