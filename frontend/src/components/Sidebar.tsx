import React, { useState } from 'react';
import './Sidebar.css';
import { 
    Settings, ShieldCheck, FileText, Activity, Layers, 
    BarChart3, RefreshCcw, LogOut, ChevronRight, UserCircle 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
    const [openMenus, setOpenMenus] = useState<string[]>([]);
    const location = useLocation();

    const toggleMenu = (name: string) => {
        setOpenMenus(prev => 
            prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]
        );
    };

    const mainMenus = [
        { name: 'Factory Settings', icon: Settings, submenu: [{ name: 'User Master', path: '/factory/user-master' }] },
        { name: 'Underwriting', icon: ShieldCheck, path: '/underwriting' },
        { name: 'Policy Servicing', icon: FileText, path: '/policy-servicing' },
        { name: 'Claims', icon: Activity, path: '/claims' },
        { name: 'Reinsurance', icon: Layers, path: '/reinsurance' },
        { name: 'Reports', icon: BarChart3, path: '/reports' },
        { name: 'Auto Process', icon: RefreshCcw, path: '/auto-process' },
    ];

    // Retrieve user details from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user') || '{"userName": "Guest", "userRole": "User"}');

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="logo-symbol">L</div>
                <h1>L.I.C.S</h1>
            </div>

            <div className="sidebar-user">
                <UserCircle size={40} className="user-icon" />
                <div className="user-info">
                    <p className="user-name">{savedUser.userName}</p>
                    <p className="user-role">{savedUser.userRole}</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {mainMenus.map(menu => (
                        <li key={menu.name} className={openMenus.includes(menu.name) ? 'menu-open' : ''}>
                            {menu.submenu ? (
                                <div className="menu-item expandable" onClick={() => toggleMenu(menu.name)}>
                                    <span className="menu-icon-label">
                                        <menu.icon size={20} className="menu-icon" />
                                        {menu.name}
                                    </span>
                                    <ChevronRight size={16} className={`arrow ${openMenus.includes(menu.name) ? 'rotate' : ''}`} />
                                </div>
                            ) : (
                                <Link to={menu.path || '#'} className={`menu-item ${location.pathname === menu.path ? 'active' : ''}`}>
                                    <span className="menu-icon-label">
                                        <menu.icon size={20} className="menu-icon" />
                                        {menu.name}
                                    </span>
                                </Link>
                            )}

                            {menu.submenu && openMenus.includes(menu.name) && (
                                <ul className="submenu">
                                    {menu.submenu.map(sub => (
                                        <li key={sub.name}>
                                            <Link to={sub.path} className={`submenu-item ${location.pathname === sub.path ? 'active' : ''}`}>
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <button onClick={onLogout} className="signout-btn">
                    <LogOut size={20} strokeWidth={2.5} />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
