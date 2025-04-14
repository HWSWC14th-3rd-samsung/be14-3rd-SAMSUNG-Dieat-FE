// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 불러오기
import Home from '@/views/Home.vue';
import Regist from '@/components/member/Regist.vue';


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

import MyReportLayout from '@/views/service/MyReportLayout.vue';
// import SearchFood from '@/features/searchFood/pages/FoodSearchPage.vue';
// import ReadFree from '@/features/readFree/pages/FreePostListPage.vue';
// import DietPostDetail from '@/views/dietpost/DietPostDetail.vue';

import Dashboard from '@/views/dashboard/Dashboard.vue';

import NoticeDetail from '@/views/service/NoticeDetail.vue';
import QnaDetail from '@/views/service/QnaDetail.vue';
import RegistQna from '@/views/service/RegistQna.vue';

import BookMarkLayout from '@/views/bookmark/BookMarkLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/register', component: Regist },


    // { path: '/meal', component: MealLayout },
    // { path: '/registmeal', component: RegistMeal },
    { path: '/MealLayout', component: MealLayout },
    { path: '/RegistMeal', component: RegistMeal },

    { path: '/dietPost', component: DietPostLayout },
    { path: '/dietPost/:id', component: DietPostDetail },

    { path: '/searchFood', component: SearchFood },
    { path: '/registerFood', component: RegistFood },

    { path: '/readFree', component: FreePostListPage },
    { path: '/readFree/:postId', component: FreePostDetailPage, props: true },
    { path: '/registerFree', component: RegistFree },

    { path: '/noticeLayout', component: NoticeLayout },
    { path: '/qnaLayout', component: QnaLayout },

    { path: '/myReportLayout', component: MyReportLayout },
    { path: '/dietPost/:id', component: DietPostDetail },
    { path: '/MealLayout', component: MealLayout},
    {path: '/RegistMeal', component: RegistMeal},
    { path: '/noticeDetail/:id', name: 'NoticeDetail', component: NoticeDetail, props: true},
    { path: '/qnaDetail/:id', name: 'QnaDetail', component: QnaDetail, props: true},
    { path: '/registQna', component: RegistQna},
    // {path: '/readFree', component: ReadFree },
    {path: '/dashboard', component: Dashboard},
    {path: '/bookmarkLayout', component: BookMarkLayout},

  ]
});

export default router;