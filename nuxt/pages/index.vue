<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">MyApp</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  
      <b-container class="mt-3">
        <h1>FinanceApp</h1>
        <p>Najlepsza aplikacja dla biednego studenta.</p>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    // Opcje komponentu
  }
  </script>
  
  <style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  animation: fadeInUp 1s ease-in-out;
}

p {
  font-size: 1.2rem;
  text-align: center;
}

.b-navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.b-container {
  max-width: 800px;
  margin: 50px auto; /* Center the container */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

  
  