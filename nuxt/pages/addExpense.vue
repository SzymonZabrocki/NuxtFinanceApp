<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">Dodaj Nowy Wydatek</h2>
        <form @submit.prevent="addExpense" class="bg-white p-4 rounded shadow">
          <div class="form-group">
            <label for="description">Opis:</label>
            <input type="text" id="description" v-model="newExpense.description" required class="form-control">
          </div>
          <div class="form-group">
            <label for="amount">Kwota:</label>
            <input type="number" id="amount" v-model="newExpense.amount" required class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Dodaj</button>
        </form>
      </div>
    </div>
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
          };
        } catch (error) {
          console.error('Błąd dodawania wydatku: ', error);
        }
      },
    },
  };
  </script>

<style scoped>
.container {
  margin-top: 50px;
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

.p-4 {
  padding: 1.5rem !important;
}
</style>

  