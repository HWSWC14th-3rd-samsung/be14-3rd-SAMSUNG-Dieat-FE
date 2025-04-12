import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/main.css'
import '@/features/searchFood/assets/style.css'
import '@/features/readFree/assets/style.css'

const app = createApp(App);
app.use(router);
app.mount('#app');