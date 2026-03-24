import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import UserMaster from './pages/UserMaster';
import MainLayout from './components/MainLayout';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    return (
        <Router>
            <Routes>
                {/* Public Route */}
                <Route 
                    path="/login" 
                    element={!isAuthenticated ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/" />} 
                />

                {/* Protected Routes */}
                <Route 
                    path="/" 
                    element={isAuthenticated ? <MainLayout onLogout={handleLogout} /> : <Navigate to="/login" />}
                >
                    <Route index element={<Dashboard />} />
                    <Route path="factory/user-master" element={<UserMaster />} />
                    
                    {/* Placeholders for future submenus */}
                    <Route path="underwriting" element={<div className="placeholder-page"><h1>Underwriting Module</h1><p>Coming Soon...</p></div>} />
                    <Route path="policy-servicing" element={<div className="placeholder-page"><h1>Policy Servicing Module</h1><p>Coming Soon...</p></div>} />
                    <Route path="claims" element={<div className="placeholder-page"><h1>Claims Module</h1><p>Coming Soon...</p></div>} />
                    <Route path="reinsurance" element={<div className="placeholder-page"><h1>Reinsurance Module</h1><p>Coming Soon...</p></div>} />
                    <Route path="reports" element={<div className="placeholder-page"><h1>Reports Module</h1><p>Coming Soon...</p></div>} />
                    <Route path="auto-process" element={<div className="placeholder-page"><h1>Auto Process Module</h1><p>Coming Soon...</p></div>} />
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
            </Routes>

            <style>{`
                .placeholder-page {
                    text-align: center;
                    padding: 4rem;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                }
                .placeholder-page h1 { font-size: 2rem; margin-bottom: 1rem; color: #1e293b; }
                .placeholder-page p { color: #64748b; font-size: 1.1rem; }
            `}</style>
        </Router>
    );
};

export default App;
