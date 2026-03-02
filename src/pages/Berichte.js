import React from 'react';

const berichte = [
  { id: 1, name: 'Monatsbericht März 2026', datum: '2026-03-01', typ: 'PDF' },
  { id: 2, name: 'Störungsanalyse Q1 2026', datum: '2026-03-01', typ: 'Excel' },
  { id: 3, name: 'Wartungsprotokoll Februar 2026', datum: '2026-02-28', typ: 'PDF' },
  { id: 4, name: 'Energieverbrauch 2025', datum: '2026-01-15', typ: 'Excel' },
  { id: 5, name: 'Gerätestatus Jahresübersicht', datum: '2026-01-10', typ: 'PDF' },
];

export default function Berichte() {
  const handleDownload = (name) => {
    alert(`Download gestartet: ${name}`);
  };

  return (
    <div>
      <h1 className="page-title">📁 Berichte</h1>
      <div className="table-card" style={{ marginBottom: 24 }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Berichtsname</th>
              <th>Datum</th>
              <th>Format</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {berichte.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.datum}</td>
                <td>{b.typ}</td>
                <td>
                  <button className="download-btn" onClick={() => handleDownload(b.name)}>
                    ⬇ Herunterladen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="chart-card">
        <h3>Schnellzugriff</h3>
        <div className="button-grid" style={{ marginTop: 16 }}>
          <button className="download-btn" onClick={() => handleDownload('Gesamtbericht 2026')}>
            📄 Gesamtbericht 2026
          </button>
          <button className="download-btn" onClick={() => handleDownload('Störungsexport')}>
            📊 Störungsexport
          </button>
          <button className="download-btn" onClick={() => handleDownload('Wartungsplan')}>
            🔧 Wartungsplan exportieren
          </button>
        </div>
      </div>
    </div>
  );
}
