<template>
  <div class="container">
    <h2>MY PROJECT</h2>
    <div class="row"> <!-- Removed 'justify-content-center' to avoid redundancy -->
      <div class="col-md-4" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="image-container">
            <img :src="project.image" class="card-img-top" alt="Project Image">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Figma Project",
          description: "A mobile application design for our emerging technologies, created using Figma.",
          image: require('@/assets/figma.jpg'),
          link: "https://www.figma.com/design/WFOzntsXe7xhBuQGjz8KAL/mobile-app?node-id=0-1&node-type=canvas&t=XlmSFB4HqRcFDrBH-0",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 15px;
  background-color: #ecc7e8;
  color: #ffffff;
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #000000;
}

.row {
  margin: 50px 0 0 0; /* Add 50px margin to the top */
  justify-content: center; /* Ensure the row content is centered */
}

.card {
  margin-bottom: 40px;
  border: 3px solid #444;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.637);
  color: #000000;
  width: 100%; /* Make sure the card takes full column width */
  max-width: 350px; /* Set a max width for the card */
}

.image-container {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  text-align: center;
}
</style>
