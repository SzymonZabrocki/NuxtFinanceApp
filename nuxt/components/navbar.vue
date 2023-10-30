<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link to="/" class="navbar-brand p-2">FinanceApp</nuxt-link>
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
  .navbar {
    background-color: #4e73df !important;
  }
  
  .navbar-brand {
    font-weight: bold;
    color: #ffffff !important;
  }
  
  .navbar-nav .nav-item .nav-link {
    color: #ffffff !important;
  }
  
  .navbar-toggler-icon {
    background-color: #ffffff !important;
  }
  
  .navbar-light .navbar-toggler {
    border-color: #ffffff !important;
  }
  
  .nav-item:hover {
    background-color: #2e59d9 !important;
    border-radius: 0.25rem;
  }
  </style>