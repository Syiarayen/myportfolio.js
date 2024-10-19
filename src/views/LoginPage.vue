<template>
  <div class="d-flex align-items-center justify-content-center vh-100 bg-light-purple">
    <div class="card p-4" style="width: 300px;">
      <h5 class="text-center mb-4">Login</h5>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" class="form-control" id="username" placeholder="Enter username" />
      </div>
      <div class="form-group mt-3">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password" />
      </div>
      <button class="btn btn-primary w-100 mt-4" @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.username && this.password) {
        // Handle authentication logic here
        this.$router.push('/dashboard'); // Redirect on successful login
      } else {
        alert("Please enter both username and password.");
      }
    },
  },
};
</script>

<style scoped>
.bg-light-purple {
  background-color: #E7D5EF; /* Set background color to E7D5EF */
  height: 100vh; /* Full height for the background */
}
</style>
