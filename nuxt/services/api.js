import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getExpenses() {
    return apiClient.get('/expenses');
  },

  addExpense(expense) {
    return apiClient.post('/expenses', expense);
  },

  deleteExpense(id) {
    return apiClient.delete(`/expenses/${id}`);
  },

  editExpense(id, expense) {
    return apiClient.put(`/expenses/${id}`, expense);
  },
  getExpense(id) {
    return apiClient.get(`/expenses/${id}`);
  },
};
