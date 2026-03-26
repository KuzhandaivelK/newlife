import axios from 'axios';

const API_BASE_URL = '/api/auth';

export interface LoginResponse {
    success: boolean;
    userId: string;
    userName: string;
    userRole: string;
    message?: string;
}

export const authApi = {
    login: (credentials: any) => axios.post<LoginResponse>(`${API_BASE_URL}/login`, credentials),
};
