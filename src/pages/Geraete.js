import React from 'react';

const geraete = [
  { id: 'KG-001', typ: 'Kühlregal', modell: 'AHT Tango 2', standort: 'München Mitte', temp: '-18°C', status: 'Aktiv' },
  { id: 'KG-002', typ: 'Tiefkühltruhe', modell: 'Liebherr GT 3432', standort: 'Hamburg Nord', temp: '-22°C', status: 'Aktiv' },
  { id: 'KG-003', typ: 'Kühlschrank', modell: 'Liebherr FKS 5000', standort: 'Berlin Mitte', temp: '+4°C', status: 'Wartung' },
  { id: 'KG-004', typ: 'Kältezelle', modell: 'Viessmann KZ-400', standort: 'Lager Frankfurt', temp: '-5°C', status: 'Aktiv' },
  { id: 'KG-005', typ: 'Kühlregal', modell: 'AHT Tango 3', standort: 'Köln West', temp: '-20°C', status: 'Defekt' },
  { id: 'KG-006', typ: 'Tiefkühltruhe', modell: 'Liebherr GT 4000', standort: 'Stuttgart', temp: '-21°C', status: 'Aktiv' },
  { id: 'KG-007', typ: 'Kühlschrank', modell: 'Bosch KSV36AI40', standort: 'Düsseldorf', temp: '+5°C', status: 'Aktiv' },
  { id: 'KG-008', typ: 'Kältezelle', modell: 'Viessmann KZ-600', standort: 'Lager Leipzig', temp: '-8°C', status: 'Aktiv' },
  { id: 'KG-009', typ: 'Kühlregal', modell: 'AHT Tango 2', standort: 'Nürnberg', temp: '-18°C', status: 'Aktiv' },
  { id: 'KG-010', typ: 'Tiefkühltruhe', modell: 'Liebherr GT 3432', standort: 'Hannover', temp: '-22°C', status: 'Wartung' },
];

const badgeClass = (status) => {
  if (status === 'Aktiv') return 'badge badge-green';
  if (status === 'Wartung') return 'badge badge-orange';
  return 'badge badge-red';
};

const Geraete = () => {
  return (
    <div>
      <p className="page-heading">Geräte</p>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Geräte-ID</th>
              <th>Typ</th>
              <th>Modell</th>
              <th>Standort</th>
              <th>Temperatur</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {geraete.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.typ}</td>
                <td>{g.modell}</td>
                <td>{g.standort}</td>
                <td>{g.temp}</td>
                <td><span className={badgeClass(g.status)}>{g.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Geraete;
