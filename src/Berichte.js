import React, { useState } from 'react';

const berichteVorhanden = [
    { id: 1, name: 'Monatsbericht Januar 2026', typ: 'PDF', datum: '01.02.2026', groesse: '1,2 MB' },
    { id: 2, name: 'Umsatzanalyse Q4 2025', typ: 'Excel', datum: '15.01.2026', groesse: '890 KB' },
    { id: 3, name: 'Energieverbrauch 2025', typ: 'PDF', datum: '10.01.2026', groesse: '2,4 MB' },
    { id: 4, name: 'Geräte-Statusbericht', typ: 'CSV', datum: '28.01.2026', groesse: '320 KB' },
    { id: 5, name: 'Wartungsprotokoll 2025', typ: 'PDF', datum: '05.01.2026', groesse: '3,1 MB' },
    { id: 6, name: 'Standortübersicht Januar', typ: 'Excel', datum: '31.01.2026', groesse: '560 KB' },
];

const typFarbe = { PDF: '#cc0000', Excel: '#00aa44', CSV: '#ff9900' };
const typIcon = { PDF: '📄', Excel: '📊', CSV: '📋' };

const Berichte = () => {
    const [generiert, setGeneriert] = useState(false);

    const handleExport = (format) => {
        setGeneriert(true);
        setTimeout(() => setGeneriert(false), 3000);
    };

    return (
        <div className="page">
            <h1 className="page-title">📋 Berichte</h1>

            <div className="berichte-export-section">
                <h3>Bericht erstellen</h3>
                <div className="export-buttons">
                    <button className="btn btn-export btn-pdf" onClick={() => handleExport('PDF')}>
                        📄 PDF exportieren
                    </button>
                    <button className="btn btn-export btn-excel" onClick={() => handleExport('Excel')}>
                        📊 Excel exportieren
                    </button>
                    <button className="btn btn-export btn-csv" onClick={() => handleExport('CSV')}>
                        📋 CSV exportieren
                    </button>
                </div>
                {generiert && (
                    <div className="export-success">
                        ✅ Bericht wurde erfolgreich erstellt und steht zum Download bereit.
                    </div>
                )}
            </div>

            <div className="table-card">
                <h3 className="chart-title">Vorhandene Berichte</h3>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Berichtsname</th>
                            <th>Format</th>
                            <th>Erstellt am</th>
                            <th>Dateigröße</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {berichteVorhanden.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td><strong>{b.name}</strong></td>
                                <td>
                                    <span className="badge" style={{ backgroundColor: typFarbe[b.typ] }}>
                                        {typIcon[b.typ]} {b.typ}
                                    </span>
                                </td>
                                <td>{b.datum}</td>
                                <td>{b.groesse}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">⬇️ Herunterladen</button>
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
