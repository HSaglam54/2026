import React from 'react';

const standorte = [
  { id: 1, name: 'Filiale München Mitte', stadt: 'München', plz: '80331', geraete: 12, status: 'Aktiv' },
  { id: 2, name: 'Filiale Hamburg Nord', stadt: 'Hamburg', plz: '20095', geraete: 8, status: 'Aktiv' },
  { id: 3, name: 'Filiale Berlin Mitte', stadt: 'Berlin', plz: '10117', geraete: 15, status: 'Aktiv' },
  { id: 4, name: 'Lager Frankfurt', stadt: 'Frankfurt', plz: '60311', geraete: 20, status: 'Aktiv' },
  { id: 5, name: 'Filiale Köln West', stadt: 'Köln', plz: '50667', geraete: 10, status: 'Wartung' },
  { id: 6, name: 'Filiale Stuttgart', stadt: 'Stuttgart', plz: '70173', geraete: 7, status: 'Aktiv' },
  { id: 7, name: 'Filiale Düsseldorf', stadt: 'Düsseldorf', plz: '40213', geraete: 9, status: 'Aktiv' },
  { id: 8, name: 'Lager Leipzig', stadt: 'Leipzig', plz: '04109', geraete: 14, status: 'Aktiv' },
  { id: 9, name: 'Filiale Nürnberg', stadt: 'Nürnberg', plz: '90402', geraete: 6, status: 'Aktiv' },
  { id: 10, name: 'Filiale Hannover', stadt: 'Hannover', plz: '30159', geraete: 11, status: 'Inaktiv' },
];

const badgeClass = (status) => {
  if (status === 'Aktiv') return 'badge badge-green';
  if (status === 'Wartung') return 'badge badge-orange';
  return 'badge badge-red';
};

const Standorte = () => {
  return (
    <div>
      <p className="page-heading">Standorte</p>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Standortname</th>
              <th>Stadt</th>
              <th>PLZ</th>
              <th>Geräte</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {standorte.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.stadt}</td>
                <td>{s.plz}</td>
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
