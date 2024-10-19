<template>
  <div id="sidebar-wrapper" class="bg-light-lavender vh-100 d-flex flex-column">
    <!-- Logo Section -->
    <div class="navbar-brand text-center py-3 fs-4 text-dark border-bottom bg-orchid">
      <strong>MyAdmin</strong>
    </div>

    <!-- Sidebar Links -->
    <div class="list-group list-group-flush flex-grow-1 overflow-auto">
      <router-link
        to="/dashboard"
        class="list-group-item list-group-item-action text-dark bg-transparent d-flex align-items-center"
      >
        <i class="bi bi-speedometer2 me-2"></i> Dashboard
      </router-link>

      <button
        class="list-group-item list-group-item-action text-dark bg-transparent d-flex align-items-center justify-content-between"
        data-bs-toggle="collapse"
        data-bs-target="#userManagementCollapse"
      >
        <span><i class="bi bi-people me-2"></i> User Management</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="collapse" id="userManagementCollapse">
        <router-link
          to="/dashboard/users"
          class="list-group-item list-group-item-action text-dark ps-5"
        >
          <i class="bi bi-person"></i> All Users
        </router-link>
        <router-link
          to="/dashboard/users/add"
          class="list-group-item list-group-item-action text-dark ps-5"
        >
          <i class="bi bi-person-plus"></i> Add User
        </router-link>
      </div>

      <button
        class="list-group-item list-group-item-action text-dark bg-transparent d-flex align-items-center justify-content-between"
        data-bs-toggle="collapse"
        data-bs-target="#settingsCollapse"
      >
        <span><i class="bi bi-gear me-2"></i> Settings</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="collapse" id="settingsCollapse">
        <router-link
          to="/dashboard/settings/profile"
          class="list-group-item list-group-item-action text-dark ps-5"
        >
          <i class="bi bi-person-circle"></i> Profile Settings
        </router-link>
        <router-link
          to="/dashboard/settings/security"
          class="list-group-item list-group-item-action text-dark ps-5"
        >
          <i class="bi bi-shield-lock"></i> Security
        </router-link>
      </div>

      <div class="sidebar-section mt-3 px-3">
        <small class="text-muted">Reports</small>
      </div>
      <router-link
        to="/dashboard/reports/sales"
        class="list-group-item list-group-item-action text-dark bg-transparent d-flex align-items-center"
      >
        <i class="bi bi-graph-up-arrow me-2"></i> Sales Report
      </router-link>
      <router-link
        to="/dashboard/reports/audit"
        class="list-group-item list-group-item-action text-dark bg-transparent d-flex align-items-center"
      >
        <i class="bi bi-journal-text me-2"></i> Audit Logs
      </router-link>
    </div>

    <!-- Logout Button at the Bottom -->
    <div class="p-3 border-top">
      <button
        class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style scoped>
#sidebar-wrapper {
  width: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-color: #E7D5EF; /* Light lavender background color */
}

.navbar-brand {
  background-color: #8c6c95; /* Orchid background color */
}

.list-group-item {
  border: none;
}

.list-group-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Ensure the links scroll independently of the logout button */
.list-group-flush {
  overflow-y: auto;
}

/* Ensure sidebar fills the height and logout stays pinned */
.flex-grow-1 {
  flex-grow: 1;
}
</style>
