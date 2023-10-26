<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <div>
      <h2 class="text-center">Lista Wydatków</h2>
      <div class="table-responsive">
        <table v-if="expenses.length > 0" class="table table-striped table-sm border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nazwa</th>
              <th>Kwota</th>
              <th>Data</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.id">
              <td>{{ expense.id }}</td>
              <td>{{ expense.description }}</td>
              <td>{{ expense.amount }}</td>
              <td>{{ formatDate(expense.date) }}</td>
              <td>
                <button @click="deleteExpense(expense.id)" class="btn btn-danger">
                  Usuń
                </button>
              </td>
              <td>
                <!-- Dodaj link z parametrem id do strony edycji -->
                <nuxt-link :to="'/editExpense/' + expense.id" class="btn btn-primary">
                  Edytuj
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
        <nuxt-link v-else to="/addExpense" class="btn btn-primary">
          Dodaj Wydatek
        </nuxt-link>
      </div>
    </div>
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
      formatDate(isoDate) {
      const date = new Date(isoDate);
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    },
    },
    created() {
      this.fetchExpenses();
    },
  };
  </script>
  
  