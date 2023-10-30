<template>
  <div>
    <navbar></navbar> 
    <router-view></router-view>
    <footer>

    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'; 

export default {
  name: 'App',
  components: {
    Navbar, 
  },
};
</script>
