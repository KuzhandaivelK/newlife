import React, { useState, useEffect } from 'react';
import './UserMaster.css';

interface User {
    user_id: string;
    user_name: string;
    user_role: string;
    user_dept: string;
}

const UserMaster: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { user_id: 'admin', user_name: 'System Admin', user_role: 'ADMIN', user_dept: 'IT' },
        { user_id: 'kins_user', user_name: 'Insurance Agent', user_role: 'AGENT', user_dept: 'SALES' }
    ]);
    const [formData, setFormData] = useState<User>({ user_id: '', user_name: '', user_role: 'USER', user_dept: '' });
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setUsers(users.map(u => u.user_id === formData.user_id ? formData : u));
        } else {
            setUsers([...users, formData]);
        }
        resetForm();
    };

    const handleEdit = (user: User) => {
        setFormData(user);
        setIsEditing(true);
    };

    const handleDelete = (id: string) => {
        setUsers(users.filter(u => u.user_id !== id));
    };

    const resetForm = () => {
        setFormData({ user_id: '', user_name: '', user_role: 'USER', user_dept: '' });
        setIsEditing(false);
    };

    return (
        <div className="user-master-container">
            <header className="page-header">
                <h1>User Master Management</h1>
                <p>Manage system users, roles, and department assignments.</p>
            </header>

            <div className="main-grid">
                {/* User Form */}
                <section className="form-card">
                    <h2>{isEditing ? 'Edit User' : 'Create New User'}</h2>
                    <form onSubmit={handleSave}>
                        <div className="form-group">
                            <label>User ID</label>
                            <input 
                                type="text" name="user_id" value={formData.user_id} 
                                onChange={handleInputChange} disabled={isEditing} required 
                                placeholder="Enter Login ID"
                            />
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                type="text" name="user_name" value={formData.user_name} 
                                onChange={handleInputChange} required 
                                placeholder="Enter Full Name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <select name="user_role" value={formData.user_role} onChange={handleInputChange}>
                                <option value="ADMIN">Administrator</option>
                                <option value="USER">Standard User</option>
                                <option value="AGENT">Insurance Agent</option>
                                <option value="UNDERWRITER">Underwriter</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <input 
                                type="text" name="user_dept" value={formData.user_dept} 
                                onChange={handleInputChange} required 
                                placeholder="e.g. Sales, IT, Claims"
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-primary">{isEditing ? 'Update User' : 'Create User'}</button>
                            <button type="button" onClick={resetForm} className="btn-secondary">Cancel</button>
                        </div>
                    </form>
                </section>

                {/* User Table */}
                <section className="table-card">
                    <h2>System Users</h2>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.user_id}>
                                    <td>{user.user_id}</td>
                                    <td>{user.user_name}</td>
                                    <td><span className={`role-badge ${user.user_role.toLowerCase()}`}>{user.user_role}</span></td>
                                    <td>{user.user_dept}</td>
                                    <td className="actions-cell">
                                        <button onClick={() => handleEdit(user)} className="btn-edit">Edit</button>
                                        <button onClick={() => handleDelete(user.user_id)} className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default UserMaster;
