<template>
  <div class="container">
    <h2 class="page-title">ABOUT ME</h2>
    <div class="profile-info">
      <img src="@/assets/Profile_.jpg" alt="Profile Picture" class="profile-img" />
      <div class="profile-details">
        <h4>Jullianne Yen I. Marasigan</h4>
        <p><i class="fas fa-genderless icon"></i> <strong>Gender:  </strong> Female</p>
        <p><i class="fas fa-calendar icon"></i> <strong>Age: </strong> 23 years old</p>
        <p><i class="fas fa-birthday-cake icon"></i> <strong>Birthday:  </strong> June 01, 2001</p>
        <p><i class="fas fa-phone icon"></i> <strong>Contact Number:  </strong> 09162563732</p>
        <p><i class="fas fa-map-marker-alt icon"></i> <strong>Address:  </strong> Brgy. Lual Infanta, Quezon</p>
        <p><i class="fas fa-gmail icon"></i> <strong>Gmail Address:  </strong> mjymarasigan1@tip.edu.ph</p>
        <p><i class="fas fa-school icon"></i> <strong>School:  </strong> Technological Institute of the Philippines</p>
      </div>
    </div>
    <div class="about-me">
      <h4><i class="fas fa-user"></i> Bio:</h4>
      <p>
        I'm Jullianne Yen, a passionate and dedicated 4th-year student pursuing a bachelor's degree in Computer Engineering at TIP Manila.
        I have a strong interest in exploring various fields within technology, which allows me to deepen my knowledge and gain valuable
        insights into different areas of the industry, and continuously practicing my coding skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
.container {
  max-width: 1500px; /* Limit the maximum width */
  margin: auto; /* Center the container */
  padding: 50px; /* Add padding around the container */
  background-color: #f7d0dd; /* Updated background color to light pink */
  border-radius: 8px; /* Rounded corners for the container */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}

.page-title {
  text-align: center; /* Center the page title */
  color: #753eb0; /* Light purple color for the title */
  margin-bottom: 30px; /* Space below the title */
}

.profile-info {
  display: flex;
  align-items: center; /* Align items vertically centered */
  margin-bottom: 50px; /* Space below the profile info */
}

.profile-img {
  width: 250px; /* Size of profile image */
  border-radius: 50%; /* Circular image */
  margin-right: 50px; /* Space between image and text */
  border: 3px solid #bd4cf6; /* Add border to image */
}

.profile-details {
  color: black; /* Change text color for better readability against light background */
}

.profile-details p {
  display: flex;
  align-items: center; /* Align icon with text */
  margin: 15px 0; /* Space between each detail */
}

.profile-details i {
  margin-right: 20px; /* Increased space between icon and text */
  color: #c12efb; /* Icon color */
}

.about-me {
  margin-bottom: 1px; /* Space below the about me section */
  color: black; /* Change text color for better readability */
}
</style>
