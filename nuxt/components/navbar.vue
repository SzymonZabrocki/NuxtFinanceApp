<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand p-2" href="#">Twoja Aplikacja</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link to="/expenseList" class="nav-link">Wszystkie Wydatki</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/addExpense" class="nav-link">Dodaj Wydatek</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/deleteExpense" class="nav-link">Usuń Wydatek</nuxt-link>
        </li>
      </ul>
    </div>
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