<template>
  <div class="container">
    <h2 class="page-title">MY HOBBIES</h2>
    <div class="hobbies-grid">
      <div class="hobby" v-for="hobby in hobbies" :key="hobby.id">
        <img :src="hobby.image" alt="Hobby Image" class="hobby-img" />
        <div class="hobby-description">
          <h4>{{ hobby.title }}</h4>
          <p>{{ hobby.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreativePage",
  data() {
    return {
      hobbies: [
        {
          id: 1,
          title: "Reading Books",
          description: "Reading books is one of my favorite pastimes, particularly when I'm alone just enjoying my me time.",
          image: require("@/assets/reading.jpg"),
        },
        {
          id: 2,
          title: "Collections",
          description: "I have a hobby of collecting books, especially when I really like the author. I almost have all the published books by my favorite authors. Not only do I collect books, but I also collect cute items such as figurines, tea sets, and paintings.",
          image: require("@/assets/collections.jpg"),
        },
        {
          id: 3,
          title: "Watching Anime",
          description: "I enjoy watching anime because it gives me joy and makes me feel like I'm in another world.",
          image: require("@/assets/luffy.jpg"),
        },
        {
          id: 4,
          title: "Adventure",
          description: "I enjoy going to the beach to collect seashells and visiting the mountains to get fresh buko every time I go back to my hometown.",
          image: require("@/assets/adventure.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Increased max width for the container */
  width: 100%; /* Set width to 100% */
  margin: 0 auto; /* Center the container horizontally */
  padding: 70px;
  background-color: #d7add763;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.page-title {
  text-align: center;
  color: #c2671c;
  margin-bottom: 40px;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 30px; /* Increased space between hobby cards */
}

.hobby {
  background-color: #dfd6d1;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  max-width: 350px; /* Maximum width for hobby cards */
  margin: 0 auto; /* Center the cards */
}

.hobby:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}

.hobby-img {
  width: 100%;
  height: auto;
  max-height: 200px; /* Maximum height for images */
  object-fit: cover; /* Keeps images uniform and covers the space */
}

.hobby-description {
  padding: 15px;
  color: rgb(0, 0, 0);
}

.hobby-description h4 {
  margin: 0;
  color: #f38357;
  font-size: 1.1rem; /* Font size for titles */
}

.hobby-description p {
  margin-top: 20px;
  line-height: 1.4; /* Adjusted line height for better readability */
  font-size: 0.9rem; /* Font size for descriptions */
}
</style>
