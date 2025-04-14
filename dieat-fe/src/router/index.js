// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 불러오기
import Home from '@/views/Home.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';

import MealLayout from '@/views/meal/MealLayout.vue';
import RegistMeal from '@/views/meal/RegistMeal.vue';

import DietPostLayout from '@/views/dietpost/DietPostLayout.vue';
import DietPostDetail from '@/views/dietpost/DietPostDetail.vue';

import SearchFood from '@/views/food/FoodSearchPage.vue';
import RegistFood from '@/views/food/FoodRegisterPage.vue';

import FreePostListPage from '@/views/post/FreePostListPage.vue';
import FreePostDetailPage from '@/views/post/FreePostDetailPage.vue';
import RegistFree from '@/views/post/FreePostWritePage.vue';

import NoticeLayout from '@/views/service/NoticeLayout.vue';
import QnaLayout from '@/views/service/QnaLayout.vue';

import Dashboard from '@/views/dashboard/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },

    { path: '/meal', component: MealLayout },
    { path: '/registmeal', component: RegistMeal },

    { path: '/dietPost', component: DietPostLayout },
    { path: '/dietPost/:id', component: DietPostDetail },

    { path: '/searchFood', component: SearchFood },
    { path: '/registerFood', component: RegistFood },

    { path: '/readFree', component: FreePostListPage },
    { path: '/readFree/:postId', component: FreePostDetailPage, props: true },
    { path: '/registerFree', component: RegistFree },

    { path: '/noticeLayout', component: NoticeLayout },
    { path: '/qnaLayout', component: QnaLayout },

    { path: '/dashboard', component: Dashboard }
  ]
});

export default router;