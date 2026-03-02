import React from 'react';

const berichte = [
  {
    id: 1,
    titel: 'Monatsbericht Februar 2026',
    beschreibung: 'Vollständiger Überblick über Umsatz, Kosten und Gerätestatus im Februar 2026.',
    datum: '2026-03-01',
    format: 'PDF',
  },
  {
    id: 2,
    titel: 'Wartungsübersicht Q1 2026',
    beschreibung: 'Zusammenfassung aller Wartungsaufträge und Störungen im ersten Quartal 2026.',
    datum: '2026-03-01',
    format: 'Excel',
  },
  {
    id: 3,
    titel: 'Energieverbrauchsbericht 2026',
    beschreibung: 'Analyse des Energieverbrauchs aller Kälteanlagen nach Standort und Gerätetyp.',
    datum: '2026-02-28',
    format: 'PDF',
  },
  {
    id: 4,
    titel: 'Standortbericht München',
    beschreibung: 'Detaillierter Bericht über alle Geräte und Vorfälle am Standort München Mitte.',
    datum: '2026-02-25',
    format: 'PDF',
  },
  {
    id: 5,
    titel: 'Störungsanalyse Januar–Februar 2026',
    beschreibung: 'Auswertung der gemeldeten Störungen mit Ursachenanalyse und Maßnahmenplan.',
    datum: '2026-02-20',
    format: 'Excel',
  },
  {
    id: 6,
    titel: 'Techniker-Einsatzbericht',
    beschreibung: 'Übersicht aller Techniker-Einsätze, Fahrzeiten und abgerechneter Stunden.',
    datum: '2026-02-15',
    format: 'PDF',
  },
];

const Berichte = () => {
  const handleDownload = (titel, format) => {
    alert(`Download gestartet: ${titel} (${format})`);
  };

  return (
    <div>
      <p className="page-heading">Berichte</p>
      <div className="berichte-grid">
        {berichte.map((b) => (
          <div className="bericht-card" key={b.id}>
            <h3>{b.titel}</h3>
            <p>{b.beschreibung}</p>
            <div style={{ fontSize: '0.8rem', color: '#999' }}>Erstellt: {b.datum} &bull; Format: {b.format}</div>
            <button
              className="btn btn-primary"
              onClick={() => handleDownload(b.titel, b.format)}
            >
              ⬇ {b.format} herunterladen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berichte;
