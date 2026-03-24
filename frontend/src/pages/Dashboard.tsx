import React from 'react';
import { 
    Users, ShieldCheck, FileText, Activity, 
    TrendingUp, AlertCircle, CheckCircle2 
} from 'lucide-react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const stats = [
        { title: 'Active Policies', value: '12,842', trend: '+12%', icon: FileText, color: '#4f46e5' },
        { title: 'Pending Claims', value: '458', trend: '-5%', icon: Activity, color: '#ef4444' },
        { title: 'New Underwriting', value: '890', trend: '+28%', icon: ShieldCheck, color: '#10b981' },
        { title: 'Total Users', value: '254', trend: '+2%', icon: Users, color: '#0ea5e9' },
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h1>System Overview</h1>
                    <p>Welcome back, Administrator. Here's what's happening today.</p>
                </div>
                <div className="current-date">
                    <CheckCircle2 size={20} color="#10b981" />
                    <span>All services are operational</span>
                </div>
            </header>

            <div className="stats-grid">
                {stats.map(stat => (
                    <article key={stat.title} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <stat.icon size={28} />
                        </div>
                        <div className="stat-info">
                            <h3>{stat.title}</h3>
                            <div className="stat-value-row">
                                <span className="stat-value">{stat.value}</span>
                                <span className={`stat-trend ${stat.trend.startsWith('+') ? 'up' : 'down'}`}>
                                    <TrendingUp size={14} /> {stat.trend}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <section className="dashboard-sections">
                <div className="section-card main">
                    <h2>Recent Activities</h2>
                    <ul className="activity-list">
                        {[1, 2, 3].map(i => (
                            <li key={i} className="activity-item">
                                <div className="activity-dot"></div>
                                <div className="activity-text">
                                    <p className="activity-desc">New policy <strong>POL-8293-{i}</strong> has been approved.</p>
                                    <span className="activity-time">{i * 2} mins ago</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="section-card side">
                    <h2>System Status</h2>
                    <div className="status-item">
                        <div className="status-label">Oracle DB Connect</div>
                        <div className="status-badge stable">Stable</div>
                    </div>
                    <div className="status-item">
                        <div className="status-label">API Services</div>
                        <div className="status-badge stable">Responsive</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
