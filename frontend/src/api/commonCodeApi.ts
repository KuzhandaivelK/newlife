import axios from 'axios';

const API_BASE_URL = '/api/common-codes';

export interface CommonCode {
    ccId: number;
    ccType: String;
    ccCode: string;
    ccCodeDesc: string;
    ccValue?: string;
}

export const commonCodeApi = {
    getByType: (type: string) => axios.get<CommonCode[]>(`${API_BASE_URL}/${type}`),
};
