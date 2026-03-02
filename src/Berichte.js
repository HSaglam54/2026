import React from 'react';

const berichte = [
  {
    id: 1,
    title: 'Monatsbericht Februar 2026',
    desc: 'Zusammenfassung aller Kühlsystem-KPIs für Februar 2026.',
    file: 'monatsbericht_feb_2026.pdf',
  },
  {
    id: 2,
    title: 'Wartungsprotokoll Q1 2026',
    desc: 'Alle durchgeführten und geplanten Wartungen im ersten Quartal.',
    file: 'wartung_q1_2026.pdf',
  },
  {
    id: 3,
    title: 'Alarmhistorie 2026',
    desc: 'Vollständige Liste aller Alarme und Eskalationen seit Januar.',
    file: 'alarme_2026.csv',
  },
  {
    id: 4,
    title: 'Energieverbrauch Übersicht',
    desc: 'Energieverbrauch aller Standorte im Vergleich zum Vorjahr.',
    file: 'energie_2026.xlsx',
  },
];

const handleDownload = (file) => {
  alert(`Download gestartet: ${file}\n(Demo – keine echte Datei)`);
};

const Berichte = () => {
  return (
    <div>
      <h2 className="page-title">Berichte</h2>
      <div className="reports-grid">
        {berichte.map((b) => (
          <div key={b.id} className="report-card">
            <h4>{b.title}</h4>
            <p>{b.desc}</p>
            <button className="btn" onClick={() => handleDownload(b.file)}>
              ⬇ Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berichte;
