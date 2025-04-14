// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 불러오기
import Home from '@/views/Home.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import MealLayout from '../views/MealLayout.vue';
import NoticeLayout from '../views/NoticeLayout.vue';
import QnaLayout from '../views/QnaLayout.vue';

// import About from '@/pages/About.vue';
// import Contact from '@/pages/Contact.vue';
import SearchFood from '@/features/searchFood/pages/FoodSearchPage.vue'
import RegistFood from '@/features/registerFood/pages/FoodRegisterPage.vue'
import RegistFree from '@/features/registerFree/FreePostWritePage.vue'
import ReadFree from '@/features/readFree/pages/FreePostListPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    { path: '/', name: Home, component: Home },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/meal', component: MealLayout },
    { path: '/searchFood', component: SearchFood },
    { path: '/registerFood', component: RegistFood },
      // 자유 게시글 리스트
      {
        path: '/readFree',
        name: 'FreePostList',
        component: FreePostListPage
      },
      // 자유 게시글 상세
      {
        path: '/readFree/:postId',
        name: 'FreePostDetail',
        component: FreePostDetailPage,
        props: true
      },
    {path: '/noticeLayout', component: NoticeLayout},
    {path: '/qnaLayout', component: QnaLayout}
  ]
});

export default router;
