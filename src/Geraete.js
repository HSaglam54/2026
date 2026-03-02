import React from 'react';

const Geraete = () => {
    const geraete = [
        { id: 1, name: 'Kühlanlage A1', typ: 'Kühlung', standort: 'Berlin Zentral', status: 'Aktiv' },
        { id: 2, name: 'Klimaanlage B2', typ: 'Klimatisierung', standort: 'München Nord', status: 'Wartung' },
        { id: 3, name: 'Freezer C3', typ: 'Gefrierung', standort: 'Hamburg Hafen', status: 'Aktiv' },
        { id: 4, name: 'Kühler D4', typ: 'Kühlung', standort: 'Frankfurt City', status: 'Inaktiv' },
        { id: 5, name: 'Klimaanlage E5', typ: 'Klimatisierung', standort: 'Köln West', status: 'Aktiv' },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Geräte</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Typ</th>
                        <th>Standort</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {geraete.map(g => (
                        <tr key={g.id}>
                            <td>{g.id}</td>
                            <td>{g.name}</td>
                            <td>{g.typ}</td>
                            <td>{g.standort}</td>
                            <td>
                                <span className={`status-badge status-${g.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {g.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Geraete;
