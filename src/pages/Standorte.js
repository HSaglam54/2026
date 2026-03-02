import React from 'react';

const standorte = [
    { id: 1, name: 'Hauptlager Berlin', adresse: 'Berliner Str. 12, 10115 Berlin', geraete: 8, status: 'Aktiv' },
    { id: 2, name: 'Filiale Hamburg', adresse: 'Hafenweg 5, 20095 Hamburg', geraete: 6, status: 'Aktiv' },
    { id: 3, name: 'Lager München', adresse: 'Münchner Ring 44, 80331 München', geraete: 10, status: 'Aktiv' },
    { id: 4, name: 'Depot Köln', adresse: 'Rheinufer 21, 50667 Köln', geraete: 5, status: 'Wartung' },
    { id: 5, name: 'Filiale Frankfurt', adresse: 'Mainzer Landstr. 8, 60329 Frankfurt', geraete: 7, status: 'Aktiv' },
    { id: 6, name: 'Lager Stuttgart', adresse: 'Königsstr. 3, 70173 Stuttgart', geraete: 4, status: 'Aktiv' },
    { id: 7, name: 'Depot Dresden', adresse: 'Altmarkt 2, 01067 Dresden', geraete: 3, status: 'Inaktiv' },
    { id: 8, name: 'Filiale Düsseldorf', adresse: 'Königsallee 18, 40212 Düsseldorf', geraete: 6, status: 'Aktiv' },
    { id: 9, name: 'Lager Leipzig', adresse: 'Karl-Marx-Platz 7, 04109 Leipzig', geraete: 5, status: 'Aktiv' },
    { id: 10, name: 'Filiale Bremen', adresse: 'Schlachte 1, 28195 Bremen', geraete: 4, status: 'Aktiv' },
    { id: 11, name: 'Depot Hannover', adresse: 'Ernst-August-Platz 4, 30159 Hannover', geraete: 5, status: 'Wartung' },
    { id: 12, name: 'Lager Nürnberg', adresse: 'Hauptmarkt 15, 90402 Nürnberg', geraete: 6, status: 'Aktiv' },
];

const badgeClass = (status) => {
    if (status === 'Aktiv') return 'badge badge-green';
    if (status === 'Wartung') return 'badge badge-yellow';
    return 'badge badge-red';
};

const Standorte = () => {
    return (
        <div>
            <h1 className="page-title">Standorte</h1>
            <div className="chart-card">
                <h2>Alle Standorte ({standorte.length})</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Adresse</th>
                            <th>Geräte</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standorte.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.adresse}</td>
                                <td>{s.geraete}</td>
                                <td><span className={badgeClass(s.status)}>{s.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Standorte;
