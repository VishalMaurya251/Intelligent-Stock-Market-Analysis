import axios from 'axios';

export const analyzeSymbol = (symbol) => {
    return axios.post('http://localhost:5000/api/analyze', { symbol });
}