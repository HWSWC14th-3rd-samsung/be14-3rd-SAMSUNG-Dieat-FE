// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 불러오기
import Home from '@/views/Home.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import NoticeLayout from '../views/NoticeLayout.vue';
import QnaLayout from '../views/QnaLayout.vue';
// import About from '@/pages/About.vue';
// import Contact from '@/pages/Contact.vue';
import SearchFood from '@/features/searchFood/pages/FoodSearchPage.vue'
import ReadFree from '@/features/readFree/pages/FreePostListPage.vue'

import FreePostListPage from '@/features/readFree/pages/FreePostListPage.vue';
import FreePostDetailPage from '@/features/readFree/pages/FreePostDetailPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: Home, component: Home },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/searchFood', component: SearchFood },
    { path: '/readFree', component: ReadFree },
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
    { path: '/noticeLayout', component: NoticeLayout },
    { path: '/qnaLayout', component: QnaLayout }
  ]
});

export default router;
