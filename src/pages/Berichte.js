import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const quartalsDaten = [
    { quartal: 'Q1 2025', einnahmen: 138000, ausgaben: 95000 },
    { quartal: 'Q2 2025', einnahmen: 165000, ausgaben: 110000 },
    { quartal: 'Q3 2025', einnahmen: 182000, ausgaben: 118000 },
    { quartal: 'Q4 2025', einnahmen: 213000, ausgaben: 135000 },
];

const berichte = [
    { id: 1, titel: 'Jahresbericht 2025', datum: '31.12.2025', ersteller: 'Admin', typ: 'Finanzen' },
    { id: 2, titel: 'Wartungsbericht Q4 2025', datum: '15.01.2026', ersteller: 'K. Weber', typ: 'Wartung' },
    { id: 3, titel: 'Gerätezustand Q3 2025', datum: '01.10.2025', ersteller: 'A. Müller', typ: 'Geräte' },
    { id: 4, titel: 'Standortanalyse 2025', datum: '20.12.2025', ersteller: 'M. Schmidt', typ: 'Standorte' },
    { id: 5, titel: 'Energieverbrauch 2025', datum: '10.01.2026', ersteller: 'P. Fischer', typ: 'Energie' },
];

const Berichte = () => {
    return (
        <div>
            <h1 className="page-title">Berichte</h1>

            <div className="chart-card">
                <h2>Einnahmen vs. Ausgaben (Quartalsbericht)</h2>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={quartalsDaten}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quartal" />
                        <YAxis />
                        <Tooltip formatter={(v) => `€ ${v.toLocaleString('de-DE')}`} />
                        <Legend />
                        <Bar dataKey="einnahmen" fill="#1565c0" name="Einnahmen" />
                        <Bar dataKey="ausgaben" fill="#e53935" name="Ausgaben" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-card">
                <h2>Gespeicherte Berichte</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titel</th>
                            <th>Datum</th>
                            <th>Ersteller</th>
                            <th>Typ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {berichte.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.titel}</td>
                                <td>{b.datum}</td>
                                <td>{b.ersteller}</td>
                                <td><span className="badge badge-blue">{b.typ}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Berichte;
