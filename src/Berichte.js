import React from 'react';

const Berichte = () => {
    const berichte = [
        { label: 'Monatsbericht generieren', beschreibung: 'Erstellt einen detaillierten Bericht für den aktuellen Monat.' },
        { label: 'Quartalsbericht generieren', beschreibung: 'Erstellt einen Überblick über das aktuelle Quartal.' },
        { label: 'Jahresbericht generieren', beschreibung: 'Erstellt einen vollständigen Jahresbericht.' },
        { label: 'Wartungsbericht exportieren', beschreibung: 'Exportiert alle Wartungsdaten als PDF.' },
        { label: 'Standortbericht exportieren', beschreibung: 'Exportiert eine Übersicht aller Standorte.' },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Berichte</h1>
            <div className="berichte-grid">
                {berichte.map((b, index) => (
                    <div key={index} className="card bericht-card">
                        <p>{b.beschreibung}</p>
                        <button
                            className="button"
                            onClick={() => alert(`${b.label}...`)}
                        >
                            {b.label}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Berichte;
