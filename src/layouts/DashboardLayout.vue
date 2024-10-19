<template>
  <div id="wrapper" class="d-flex">
    <AppSidebar />
    <div class="content-wrapper d-flex flex-column flex-grow-1 w-100">
      <AppNavbar />
      <div class="content flex-grow-1 p-4">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppSidebar from "../components/AppSidebar.vue";
import AppNavbar from "../components/AppNavbar.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "DashboardLayout",
  components: {
    AppSidebar,
    AppNavbar,
    AppFooter,
  },
};
</script>

<style scoped>
/* Styles specific to the dashboard layout */
#wrapper {
  display: flex;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
