// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 불러오기
import Home from '@/views/Home.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import DietPostLayout from '@/views/DietPostLayout.vue';
// import About from '@/pages/About.vue';
// import Contact from '@/pages/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: Home, component: Home},
    {path: '/signup', component: Signup},
    {path: '/login', component: Login},
    {path: '/dietPost', component: DietPostLayout}

  ]
});

export default router;
