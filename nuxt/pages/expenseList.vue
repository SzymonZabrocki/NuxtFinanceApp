<template>
  <div class="d-flex justify-content-center align-items-center h-100 bg-light">
    <div class="w-75 p-4 bg-white rounded shadow">
      <h2 class="text-center mb-4">Lista Wydatków</h2>

      <div class="filters mb-3">
        <label for="dateFrom">Od: </label>
        <input v-model="dateFrom" type="date" id="dateFrom" class="mr-2">
        <label for="dateTo">Do: </label>
        <input v-model="dateTo" type="date" id="dateTo" class="mr-2">
        <button @click="fetchExpenses" class="btn btn-primary btn-sm">Filtruj</button>
      </div>
      
      <p class="total-amount">Suma wydatków: {{ totalAmount }} zł</p>

      <div class="table-responsive">
        <table v-if="filteredExpenses().length > 0" class="table table-striped table-sm border">
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
            <tr v-for="expense in filteredExpenses()" :key="expense.id">
              <td>{{ expense.id }}</td>
              <td>{{ expense.description }}</td>
              <td>{{ expense.amount }}</td>
              <td>{{ formatDate(expense.date) }}</td>
              <td>
                <router-link :to="{ path: '/editExpense', query: { id: expense.id }}" class="btn btn-primary mx-2">Edit</router-link>
                <button @click="deleteExpense(expense.id)" class="btn btn-danger">
                  Usuń
                </button>
              </td>
            </tr>
          </tbody>
          <div class="total-expense">
            Suma wydatków: {{ calculateTotalExpense() }} PLN
          </div>
        </table>
        <div v-else class="text-center">
          <p>Brak wydatków.</p>
        </div>
        <nuxt-link to="/addExpense" class="btn btn-success mt-3">Dodaj Wydatek</nuxt-link>
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
      totalAmount: 0,
      dateFrom: '',
      dateTo: '',
    };
  },
  methods: {
    async fetchExpenses() {
      try {
        const response = await api.getExpenses();
        this.expenses = response.data;
        this.totalAmount = this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
      } catch (error) {
        console.error('Błąd pobierania wydatków: ', error);
      }
    },
    async deleteExpense(id) {
      try {
        await api.deleteExpense(id);
        this.fetchExpenses();
      } catch (error) {
        console.error('Błąd usuwania wydatku: ', error);
      }
    },
    formatDate(isoDate) {
      const date = new Date(isoDate);
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    },
    filteredExpenses() {
      return this.expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        const fromDate = this.dateFrom ? new Date(this.dateFrom) : null;
        const toDate = this.dateTo ? new Date(this.dateTo) : null;
        if (fromDate && expenseDate < fromDate) return false;
        if (toDate && expenseDate > toDate) return false;
        return true;
      });
    },
    calculateTotalExpense() {
      let total = 0;
      for (const expense of this.expenses) {
        total += expense.amount;
      }
      return total;
    },
  },
  created() {
    this.fetchExpenses();
  },
};
</script>

<style scoped>
.d-flex {
  min-height: 100vh;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-white {
  background-color: #ffffff !important;
}

.rounded {
  border-radius: .2rem !important;
}

.shadow {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.text-center {
  text-align: center !important;
}

.w-75 {
  width: 75% !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.filters {
  display: flex;
  align-items: center;
}

.total-amount {
  font-weight: bold;
  margin-top: 1rem;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}
</style>
