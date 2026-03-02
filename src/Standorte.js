import React from 'react';

const Standorte = () => {
    const standorte = [
        { id: 1, name: 'Berlin Zentral', adresse: 'Berliner Str. 1', geraete: 12, status: 'Aktiv' },
        { id: 2, name: 'München Nord', adresse: 'Münchner Str. 5', geraete: 8, status: 'Aktiv' },
        { id: 3, name: 'Hamburg Hafen', adresse: 'Hafenweg 3', geraete: 15, status: 'Wartung' },
        { id: 4, name: 'Frankfurt City', adresse: 'Mainzer Str. 22', geraete: 10, status: 'Aktiv' },
        { id: 5, name: 'Köln West', adresse: 'Kölner Ring 7', geraete: 6, status: 'Inaktiv' },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Standorte</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Adresse</th>
                        <th>Geräte</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {standorte.map(s => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.adresse}</td>
                            <td>{s.geraete}</td>
                            <td>
                                <span className={`status-badge status-${s.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {s.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standorte;
