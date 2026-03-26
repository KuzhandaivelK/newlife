import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
    onLogout: () => void;
}

const MainLayout: React.FC<LayoutProps> = ({ onLogout }) => {
    // Retrieve user details from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user') || '{"userName": "Guest", "userRole": "User"}');
    const initials = savedUser.userName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();

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
                        <div className="user-avatar-small">{initials}</div>
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
