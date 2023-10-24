<template>
    <div>
      <h2>Usuń Wydatek</h2>
      <label for="expenseId">Podaj ID wydatku do usunięcia:</label>
      <input type="number" id="expenseId" v-model="expenseId" required>
      <button @click="deleteExpense">Usuń Wydatek</button>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        expenseId: null, // Dodaj pole expenseId do przechowywania ID wydatku
      };
    },
    methods: {
      async deleteExpense() {
        if (!this.expenseId) {
          // Jeśli nie podano ID wydatku, nie podejmuj akcji
          return;
        }
        try {
          await api.deleteExpense(this.expenseId);
          // Możesz dodać dodatkowe akcje po usunięciu, np. przekierowanie
        } catch (error) {
          console.error('Błąd usuwania wydatku: ', error);
        }
      },
    },
  };
  </script>
  