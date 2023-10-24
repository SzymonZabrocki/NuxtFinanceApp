<template>
    <div>
      <h2>Lista Wydatków</h2>
      <ul>
        <li v-for="expense in expenses" :key="expense.id">
          {{ expense.description }} - {{ expense.amount }}
          <button @click="deleteExpense(expense.id)">Usuń</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        expenses: [],
      };
    },
    methods: {
      async fetchExpenses() {
        try {
          const response = await api.getExpenses();
          this.expenses = response.data;
        } catch (error) {
          console.error('Błąd pobierania wydatków: ', error);
        }
      },
      async deleteExpense(id) {
        try {
          await api.deleteExpense(id);
          this.fetchExpenses(); // Odśwież listę wydatków po usunięciu
        } catch (error) {
          console.error('Błąd usuwania wydatku: ', error);
        }
      },
    },
    created() {
      this.fetchExpenses();
    },
  };
  </script>
  