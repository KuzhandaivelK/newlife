import axios from 'axios';

const API_BASE_URL = '/api';

export interface User {
    userId: string;
    userName: string;
    userPassword?: string;
    userRole: string;
    userDept: string;
}

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const userApi = {
    getAll: () => api.get<User[]>('/users'),
    getById: (id: string) => api.get<User>(`/users/${id}`),
    create: (user: User) => api.post<User>('/users', user),
    update: (id: string, user: User) => api.put<User>(`/users/${id}`, user),
    delete: (id: string) => api.delete(`/users/${id}`),
};

export default api;
