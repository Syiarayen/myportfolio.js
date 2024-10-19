<template>
  <div class="container">
    <h2>CONTACT ME</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="mb-4">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Enter your name" required />
      </div>
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Enter your email" required />
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="5" v-model="form.message" placeholder="Type your message here..." required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.form.name}`);
      // Handle form submission logic here
    },
  },
};
</script>

<style scoped>
.container {
  padding: 40px; /* Increased padding for more space */
  background-color: #DBB6EE; /* Light purple background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Soft shadow for depth */
  max-width: 1000px; /* Max width for form container */
  margin: 0 auto; /* Centering the container */
  color: #000000; /* Black text color */
}

h2 {
  text-align: center; /* Center the title */
  margin-bottom: 40px; /* Space below the title */
  color: #000000; /* Black color for the title */
  font-family: 'Courier New', monospace; /* Techy font style */
  font-size: 2rem; /* Larger font size for the title */
}

.contact-form {
  display: flex;
  flex-direction: column; /* Column layout for the form */
}

.form-label {
  margin-bottom: 5px; /* Space below labels */
  font-weight: 1500; /* Bold labels */
}

.form-control {
  padding: 15px; /* Increased padding inside input fields */
  border: 1px solid #444; /* Dark border for input fields */
  border-radius: 5px; /* Rounded corners for input fields */
  background-color: #E6E6FA; /* Light lavender background for input fields */
  color: #000000; /* Black text color */
  font-size: 1rem; /* Increased font size for better readability */
  transition: border-color 0.3s, box-shadow 0.3s; /* Transition effects */
}

.form-control::placeholder {
  color: #a0aec0; /* Placeholder text color */
  opacity: 1; /* Ensures opacity is consistent */
}

.form-control:focus {
  border-color: #00c8ff; /* Light blue border on focus */
  box-shadow: 0 0 5px rgba(172, 114, 175, 0.5); /* Light blue shadow on focus */
  outline: none; /* Remove outline */
}

.btn {
  padding: 15px 20px; /* Increased padding for buttons */
  background-color: #9169c1; /* Changed to the specified color */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  color: white; /* White text color */
  font-weight: bold; /* Bold text */
  transition: background-color 0.3s, transform 0.2s; /* Transition effects */
  font-size: 1rem; /* Increased font size for the button */
}

.btn:hover {
  background-color: #805aa3; /* Darker shade on hover */
  transform: translateY(-3px); /* Lift effect on hover */
}
</style>
