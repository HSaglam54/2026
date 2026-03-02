import React from 'react';

const Wartung = () => {
    const wartungen = [
        { id: 1, geraet: 'Kühlanlage A1', datum: '2026-03-05', techniker: 'Max Müller', typ: 'Inspektion', status: 'Geplant' },
        { id: 2, geraet: 'Klimaanlage B2', datum: '2026-02-28', techniker: 'Anna Schmidt', typ: 'Reparatur', status: 'Abgeschlossen' },
        { id: 3, geraet: 'Freezer C3', datum: '2026-03-10', techniker: 'Peter Klaus', typ: 'Inspektion', status: 'Geplant' },
        { id: 4, geraet: 'Kühler D4', datum: '2026-02-15', techniker: 'Lisa Weber', typ: 'Wartung', status: 'Abgeschlossen' },
        { id: 5, geraet: 'Klimaanlage E5', datum: '2026-03-20', techniker: 'Thomas Braun', typ: 'Reparatur', status: 'In Bearbeitung' },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Wartung</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Gerät</th>
                        <th>Datum</th>
                        <th>Techniker</th>
                        <th>Typ</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {wartungen.map(w => (
                        <tr key={w.id}>
                            <td>{w.id}</td>
                            <td>{w.geraet}</td>
                            <td>{w.datum}</td>
                            <td>{w.techniker}</td>
                            <td>{w.typ}</td>
                            <td>
                                <span className={`status-badge status-${w.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {w.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wartung;
