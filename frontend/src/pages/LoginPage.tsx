import React, { useState } from 'react';
import './LoginPage.css';
import { Lock, User, LayoutDashboard } from 'lucide-react';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (id === 'kins_user' && password === 'kins_user') {
            onLogin();
        } else {
            setError('Invalid credentials. Hint: kins_user / kins_user');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-brand">
                    <div className="brand-logo">
                        <LayoutDashboard size={40} color="#4f46e5" />
                    </div>
                    <h2>L.I.C.S</h2>
                    <p>Life Insurance Core System</p>
                </div>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <User size={20} className="icon" />
                        <input 
                            type="text" placeholder="User ID" 
                            value={id} onChange={(e) => setId(e.target.value)} required 
                        />
                    </div>
                    <div className="input-field">
                        <Lock size={20} className="icon" />
                        <input 
                            type="password" placeholder="Password" 
                            value={password} onChange={(e) => setPassword(e.target.value)} required
                        />
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit" className="login-btn">
                        Sign In
                    </button>
                    
                    <div className="login-footer">
                        <a href="#">Forgot Password?</a>
                        <p>© 2026 Antigravity Systems</p>
                    </div>
                </form>
            </div>
            <div className="login-backdrop"></div>
        </div>
    );
};

export default LoginPage;
