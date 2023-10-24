<template>
    <nav>
      <ul>
        <li><nuxt-link to="/">Strona główna</nuxt-link></li>
        <li><nuxt-link to="/addExpense">Dodaj Wydatek</nuxt-link></li>
        <li><nuxt-link to="/deleteExpense">Usuń Wydatek</nuxt-link></li>
        <li><nuxt-link to="/expenseList">Wszystkie Wydatki</nuxt-link></li>
        <!-- Dodaj linki do innych widoków według potrzeb -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Dodaj stylizację nawigacji według potrzeb */
  </style>