<template>
    <div>
      <h2>Dodaj Nowy Wydatek</h2>
      <form @submit.prevent="addExpense">
        <label for="description">Opis:</label>
        <input type="text" id="description" v-model="newExpense.description" required>
        <label for="amount">Kwota:</label>
        <input type="number" id="amount" v-model="newExpense.amount" required>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        newExpense: {
          description: '',
          amount: 0,
          date: new Date(),
        },
      };
    },
    methods: {
      async addExpense() {
        try {
          await api.addExpense(this.newExpense);
          this.newExpense = {
            description: '',
            amount: 0,
            date: new Date()
          }; // Wyczyść pola formularza po dodaniu
        } catch (error) {
          console.error('Błąd dodawania wydatku: ', error);
        }
      },
    },
  };
  </script>
  