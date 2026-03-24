import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
    onLogout: () => void;
}

const MainLayout: React.FC<LayoutProps> = ({ onLogout }) => {
    return (
        <div className="layout-container">
            <Sidebar onLogout={onLogout} />
            <main className="main-content">
                <header className="content-header">
                    <div className="search-placeholder">
                        <input type="text" placeholder="Search for applications, policies..." />
                    </div>
                    <div className="header-actions">
                        <span className="last-login">Last Login: {new Date().toLocaleDateString()}</span>
                        <div className="user-avatar-small">JS</div>
                    </div>
                </header>
                <div className="page-view">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
