<template>
  <footer class="footer text-center py-3">
    <small>© {{ currentYear }} Jullianne's Portfolio. All Rights Reserved.</small>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%; /* Full width */
  padding: 10px 0; /* Padding for footer */
  background-color: #8c6c95; /* Orchid background color */
  color: #ffffff; /* White text color for contrast */
  font-family: 'Arial', sans-serif; /* Font family */
  text-align: center; /* Center text */
  position: fixed; /* Keep footer fixed at the bottom */
  left: 0; /* Align to the left */
  bottom: 0; /* Align to the bottom */
  z-index: 10; /* Ensure it stays above other content */
}
</style>
