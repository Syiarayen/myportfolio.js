<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-orchid px-4">
    <!-- Brand / Logo -->
    <router-link class="navbar-brand" to="/">Home</router-link>

    <!-- Toggler for smaller screens -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Content -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <!-- Removed the Login link -->
        <li class="nav-item">
          <router-link class="nav-link link-big-bold" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-big-bold" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-big-bold" to="/creative">Creative</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-big-bold" to="/profile">Profile</router-link>
        </li>
      </ul>

      <!-- Search Bar -->
      <form class="d-flex me-4" @submit.prevent="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchQuery"
        />
        <button class="btn btn-outline-light" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>

      <!-- User Profile Dropdown -->
      <div class="dropdown">
        <button
          class="btn btn-outline-light dropdown-toggle"
          type="button"
          id="userDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-person-circle me-1"></i> Jullianne Yen
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      alert(`Search for: ${this.searchQuery}`);
    },
  },
};
</script>

<style scoped>
/* Custom navbar color */
.bg-orchid {
  background-color: #8c6c95; /* Orchid color */
}

/* Adjust dropdown alignment */
.dropdown-menu {
  min-width: 160px;
}

/* Make navbar links bold and larger */
.link-big-bold {
  font-weight: bold;
  font-size: 1.25rem; /* Adjust size to your preference */
}

/* Optional: Change link colors to white for contrast */
.nav-link {
  color: white !important; /* Ensures nav links are white */
}
</style>
