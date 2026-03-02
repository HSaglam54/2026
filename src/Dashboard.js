import React from 'react';

const Dashboard = () => {
    const kpis = [
        { title: 'Gesamtstandorte', value: '24', icon: '📍' },
        { title: 'Aktive Geräte', value: '156', icon: '⚙️' },
        { title: 'Wartungen diesen Monat', value: '12', icon: '🔧' },
        { title: 'Offene Tickets', value: '5', icon: '🎫' },
    ];

    const chartData = [
        { month: 'Jan', value: 60 },
        { month: 'Feb', value: 80 },
        { month: 'Mär', value: 45 },
        { month: 'Apr', value: 90 },
        { month: 'Mai', value: 70 },
        { month: 'Jun', value: 85 },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Dashboard</h1>
            <div className="kpi-cards">
                {kpis.map((kpi, index) => (
                    <div key={index} className="card">
                        <div className="card-icon">{kpi.icon}</div>
                        <h3>{kpi.title}</h3>
                        <p className="kpi-value">{kpi.value}</p>
                    </div>
                ))}
            </div>
            <div className="chart-container">
                <h2>Leistungsübersicht</h2>
                <div className="chart-bar-container">
                    {chartData.map((item) => (
                        <div key={item.month} className="chart-bar-wrapper">
                            <div
                                className="chart-bar"
                                style={{ height: `${item.value}%` }}
                            ></div>
                            <span className="chart-label">{item.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
