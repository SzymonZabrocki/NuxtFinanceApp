<template>
    <div>
      <h2>Edytuj Wydatek</h2>
      <form @submit="editExpense">
        <div class="form-group">
          <label for="name">Nazwa</label>
          <input type="text" id="name" v-model="editedExpense.name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="amount">Kwota</label>
          <input type="number" id="amount" v-model="editedExpense.amount" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Zapisz</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      // Odczytaj przekazywane ID z parametrów trasy
      const expenseId = params.id;
  
      // Symulacja danych wydatku (możesz zmienić na pobieranie z API)
      const expenseData = {
        name: 'Przykładowy Wydatek',
        amount: 100.0,
      };
  
      return {
        editedExpense: {
          id: expenseId,
          name: expenseData.name,
          amount: expenseData.amount,
        },
      };
    },
    methods: {
      editExpense() {
        // Tutaj dodaj logikę edycji wydatku na podstawie editedExpense
        // Możesz wywołać API lub edytować go lokalnie
        console.log('Zedytowany wydatek:', this.editedExpense);
        // Po zakończeniu edycji, możesz przekierować użytkownika na inną stronę, na przykład na stronę ExpenseList
        this.$router.push('/expense-list');
      },
    },
  };
  </script>
  