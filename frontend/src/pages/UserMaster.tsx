import React, { useState, useEffect } from 'react';
import { userApi, User } from '../api/userApi';
import { commonCodeApi, CommonCode } from '../api/commonCodeApi';
import { UserPlus, Edit3, Trash2, X, Check, Search, Shield, Building2 } from 'lucide-react';
import './UserMaster.css';

const UserMaster: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState<CommonCode[]>([]);
    const [formData, setFormData] = useState<User>({
        userId: '',
        userName: '',
        userPassword: '',
        userRole: 'USER',
        userDept: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await commonCodeApi.getByType('USER_ROLE');
            setRoles(response.data);
        } catch (err) {
            console.error('Failed to fetch roles', err);
        }
    };

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await userApi.getAll();
            setUsers(response.data);
            setError(null);
        } catch (err: any) {
            const detail = err.response?.data?.message || err.message || 'Check if backend is running.';
            setError(`Failed to fetch users: ${detail}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            if (isEditing) {
                await userApi.update(formData.userId, formData);
                setSuccessMessage('User updated successfully!');
            } else {
                await userApi.create(formData);
                setSuccessMessage('User created successfully!');
            }
            fetchUsers();
            resetForm();
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err: any) {
            const detail = err.response?.data?.message || err.message || 'Check if backend is running.';
            setError(`Error saving user: ${detail}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (user: User) => {
        setFormData({ ...user, userPassword: '' }); // Don't show password for editing
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        
        setLoading(true);
        try {
            await userApi.delete(id);
            setSuccessMessage('User deleted successfully!');
            fetchUsers();
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            setError('Failed to delete user.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            userId: '',
            userName: '',
            userPassword: '',
            userRole: 'USER',
            userDept: ''
        });
        setIsEditing(false);
        setError(null);
    };

    const filteredUsers = users.filter(user => 
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.userDept.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="user-master-container">
            <header className="page-header">
                <div>
                    <h1>User Master</h1>
                    <p className="subtitle">Manage system users, roles, and organizational structure.</p>
                </div>
            </header>

            {error && <div className="toast error"><X size={18} /> {error}</div>}
            {successMessage && <div className="toast success"><Check size={18} /> {successMessage}</div>}

            <div className="main-grid">
                {/* Form Section */}
                <section className="form-card neumorphic">
                    <div className="card-header">
                        <UserPlus size={24} className="icon-main" />
                        <h2>{isEditing ? 'Update User Details' : 'Onboard New User'}</h2>
                    </div>
                    
                    <form onSubmit={handleSave} className="premium-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label><Shield size={14} /> User ID (Unique Login)</label>
                                <input 
                                    type="text" 
                                    name="userId" 
                                    value={formData.userId} 
                                    onChange={handleInputChange} 
                                    disabled={isEditing} 
                                    required 
                                    placeholder="e.g. jdoe01"
                                />
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input 
                                    type="text" 
                                    name="userName" 
                                    value={formData.userName} 
                                    onChange={handleInputChange} 
                                    required 
                                    placeholder="Enter full name"
                                />
                            </div>
                            {!isEditing && (
                                <div className="form-group">
                                    <label>Temporary Password</label>
                                    <input 
                                        type="password" 
                                        name="userPassword" 
                                        value={formData.userPassword} 
                                        onChange={handleInputChange} 
                                        required 
                                        placeholder="Set initial password"
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label>System Role</label>
                                <div className="custom-select">
                                    <select name="userRole" value={formData.userRole} onChange={handleInputChange}>
                                        <option value="">Select Role</option>
                                        {roles.map(role => (
                                            <option key={role.ccCode} value={role.ccCode}>
                                                {role.ccCodeDesc}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><Building2 size={14} /> Department</label>
                                <input 
                                    type="text" 
                                    name="userDept" 
                                    value={formData.userDept} 
                                    onChange={handleInputChange} 
                                    required 
                                    placeholder="e.g. Sales, Underwriting"
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className={`btn-primary ${loading ? 'btn-loading' : ''}`} disabled={loading}>
                                {isEditing ? <Edit3 size={18} /> : <UserPlus size={18} />}
                                <span>{isEditing ? 'Update Profile' : 'Register User'}</span>
                            </button>
                            <button type="button" onClick={resetForm} className="btn-secondary">
                                <X size={18} /> Cancel
                            </button>
                        </div>
                    </form>
                </section>

                {/* Table Section */}
                <section className="table-card neumorphic">
                    <div className="table-header">
                        <h2>Registered Personnel</h2>
                        <div className="search-bar">
                            <Search size={18} />
                            <input 
                                type="text" 
                                placeholder="Filter users by name, ID or dept..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="table-wrapper">
                        {loading && users.length === 0 ? (
                            <div className="loading-state">
                                <div className="spinner"></div>
                                <p>Loading specialized data...</p>
                            </div>
                        ) : (
                            <table className="premium-table">
                                <thead>
                                    <tr>
                                        <th>Professional ID</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Level</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.length > 0 ? filteredUsers.map(user => (
                                        <tr key={user.userId}>
                                            <td className="id-col">{user.userId}</td>
                                            <td className="name-col">{user.userName}</td>
                                            <td>{user.userDept}</td>
                                            <td>
                                                <span className={`role-badge ${user.userRole.toLowerCase()}`}>
                                                    {user.userRole}
                                                </span>
                                            </td>
                                            <td className="actions-cell text-right">
                                                <button onClick={() => handleEdit(user)} className="action-btn edit" title="Edit Profile">
                                                    <Edit3 size={16} />
                                                </button>
                                                <button onClick={() => handleDelete(user.userId)} className="action-btn delete" title="Suspend Account">
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={5} className="empty-state">No users found matching your criteria.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserMaster;

