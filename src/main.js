import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';



// Create app instance
const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');