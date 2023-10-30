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

<style scoped>
div {
  margin-top: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

label {
  font-size: 1rem;
  margin-right: 10px;
}

input {
  width: 100px;
  padding: 5px;
  font-size: 1rem;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  font-size: 1rem;
  background-color: #dc3545; /* Czerwony kolor Bootstrap */
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #c82333; /* Ciemniejszy czerwony kolor dla efektu hover */
  cursor: pointer;
}
</style>

  