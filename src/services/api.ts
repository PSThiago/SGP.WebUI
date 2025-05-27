import axios from 'axios';
import { type Processo } from '../types/Processo';

const API_URL = 'https://localhost:7118/api/processos';

export const getProcessos = async () => await axios.get<Processo[]>(API_URL);
export const getProcesso = (id: string) => axios.get<Processo>(`${API_URL}/${id}`);
export const createProcesso = (p: Processo) => axios.post(API_URL, p);
export const updateProcesso = (id: string, p: Processo) => axios.put(`${API_URL}/${id}`, p);
export const deleteProcesso = (id: string) => axios.delete(`${API_URL}/${id}`);
