<template>
    <div>
      <h2>Edit Expense</h2>
      <form @submit.prevent="editExpense">
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="editedExpense.description" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input type="number" id="amount" v-model="editedExpense.amount" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        expenseId: null,
        editedExpense: {
          description: '',
          amount: null,
        },
      };
    },
    async mounted() {
      this.expenseId = this.$route.query.id;
      if (this.expenseId) {
        try {
          const response = await api.getExpense(this.expenseId);
          this.editedExpense = response.data;
        } catch (error) {
          console.error('Error fetching expense:', error);
        }
      }
    },
    methods: {
      async editExpense() {
        try {
          await api.editExpense(this.expenseId, this.editedExpense);
          console.log('Expense edited successfully:', this.editedExpense);
          this.$router.push('/expenseList');
        } catch (error) {
          console.error('Error editing expense:', error);
        }
      },
    },
  };
  </script>
  