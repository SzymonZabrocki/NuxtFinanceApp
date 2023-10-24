<template>
  <div>
    <navbar></navbar> <!-- Dodaj komponent nawigacji -->
    <router-view></router-view>
    <footer>
      <!-- Stopka aplikacji, np. informacje o autorze lub inne dane -->
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; // Importuj komponent nawigacji

export default {
  name: 'App',
  components: {
    Navbar, // Dodaj deklarację komponentu nawigacji
  },
};
</script>
