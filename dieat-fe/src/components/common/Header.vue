<template>
  <header class="header">
    <div>
      <RouterLink to="/" class="logo">
        <img src="@/assets/home_img/DieatLogo2.png" alt="Dieat Main Page" />
      </RouterLink>
    </div>

    <nav class="main-nav">
      <div class="menu-item" @click="toggleDropdown('FOOD')">
        FOOD
        <MenuDrop :menuItems="menu1" :visible="activeMenu === 'FOOD'" />
      </div>

      <div class="menu-item" @click="toggleDropdown('MEAL')">
        MEAL
        <MenuDrop :menuItems="menu2" :visible="activeMenu === 'MEAL'" />
      </div>

      <div class="menu-item" @click="toggleDropdown('POST')">
        POST
        <MenuDrop :menuItems="menu3" :visible="activeMenu === 'POST'" />
      </div>

      <div class="menu-item" @click="toggleDropdown('MYPAGE')">
        MYPAGE
        <MenuDrop :menuItems="menu4" :visible="activeMenu === 'MYPAGE'" />
      </div>

      <div class="menu-item" @click="toggleDropdown('SERVICE')">
        SERVICE
        <MenuDrop :menuItems="menu5" :visible="activeMenu === 'SERVICE'" />
      </div>
    </nav>

    <nav class="auth-nav">
      <template v-if="userStore.isLogin">
        <div class="user-box">
          <div class="user-text">
            <div class="user-name">{{ userStore.user?.userNickname }}</div>
            <div class="user-role">{{ formatRole(userStore.user?.role) }}</div>
          </div>
          <button class="logout-btn" @click="$emit('logout')">로그아웃</button>
        </div>
      </template>
      <template v-else>
        <button @click="$emit('open-login')">로그인</button>
        <RouterLink to="/register">회원가입</RouterLink>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
import MenuDrop from './MenuDrop.vue'

const emit = defineEmits(['open-login', 'logout'])
const userStore = useUserStore()

const activeMenu = ref(null)
const toggleDropdown = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu
}

const formatRole = (role) => {
  switch (role) {
    case 'ADMIN': return '관리자'
    case 'USER': return '일반 사용자'
    default: return '알 수 없음'
  }
}
  const menu1 = [
    { label: '음식 데이터 검색', href: '/searchFood' },
    { label: '음식 데이터 등록', href: '/registerFood' }
  ]
  
  const menu2 = [
    { label: '식사 조회', href: '/meal' },
    { label: '식사 등록', href: '/registermeal' },
    { label: '식단 게시글 조회', href: '/dietPost' },
    { label: '식단 게시글 등록', href: '/registerDiet' }
  ]
  
  const menu3 = [
    { label: '자유 게시글 조회', href: '/readFree' },
    { label: '자유 게시글 등록', href: '/registerFree' },
    { label: '성공기 게시글 조회', href: '/readSuccess' },
    { label: '성공기 게시글 등록', href: '/registerSuccess' }
  ]
  
  const menu4 = [
    { label: '개인 정보', href: '/userInfo' },
    { label: '포인트 적립 내역', href: '/point' },
    { label: '북마크', href: '/bookmarkLayout' },
    { label: '구독 관리', href: '/subscribeMng' },
    { label: '구독 게시판', href: '/subscribePost' },
    { label: '차단', href: '/block' }
  ]
  
  const menu5 = [
    { label: '공지 사항', href: '/noticeLayout' },
    { label: '문의 사항', href: '/qnaLayout' },
    { label: '나의 신고 내역', href: '/myReportLayout' }
  ]
  </script>
  
  <style scoped>
  .header {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    /* line-height: 100px; */
    justify-content: space-between;
    background-color: #155b45;
    padding: 20px 30px;
    z-index: 1000;
    position: relative;
    flex-wrap: wrap;
  }
  
  .logo img {
    height: 50px;
    max-width: 100%;
    margin-left: 50px;
  }
  
  .main-nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    font-size: 20px;
    gap: 80px;
    color: white;
    font-weight: bold;
  }
  
  .menu-item {
    position: relative;
    cursor: pointer;
  }
  
  .auth-nav {
    position: absolute;
    right: 30px;
    bottom: 50px;
    display: flex;
    gap: 20px;
    color: white;
    margin-right: 100px;
    flex-wrap: wrap;
    cursor: pointer;
  }
  
  .auth-nav a {
    height: 50px;
    color: white;
    text-decoration: none;
    font-size: 15px;
  }
  
  .router-link-active {
    font-weight: bold;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .main-nav {
      position: absolute;
      align-items: center;
      gap: 15px;
    }
  
    .header {
      align-items: center;
    }
  
    .logo img {
      position: static;
      margin-left: auto;
    }
  
    .auth-nav {
      justify-content: center;
      margin-right: auto;
    }
  }
  </style>
  
