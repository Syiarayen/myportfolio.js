<template>
  <div id="app">
    <AppNavbar v-if="isLoggedIn" @logout="logout" />
    <div class="content-wrapper">
      <router-view @updateLoginStatus="setLoginStatus" />
    </div>
    <AppFooter v-if="isLoggedIn" />
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "AppRoot",
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      isLoggedIn: false, // Initialize as not logged in
    };
  },
  methods: {
    setLoginStatus(status) {
      this.isLoggedIn = status; // Update the login status
    },
    logout() {
      // Clear login status in local storage
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false; // Update state

      // Redirect to the login page
      this.$router.push('/');
    },
  },
  mounted() {
    // Check local storage for login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedIn = loggedIn;
  },
};
</script>

<style scoped>
.content-wrapper {
  padding: 20px;
  min-height: 100vh;
}
</style>