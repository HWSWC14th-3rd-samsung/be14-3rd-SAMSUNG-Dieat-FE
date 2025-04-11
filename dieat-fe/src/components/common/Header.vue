<template>
    <header class="header">
        <div>
            <RouterLink to="/" class="logo">
            <img src="@/assets/DieatLogo2.png" alt="Dieat Main Page" />
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
            <RouterLink to="/signup">회원가입</RouterLink>
            <RouterLink to="/login">로그인</RouterLink>
        </nav>
    </header>
</template>
  
<script setup>
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'
    import MenuDrop from './MenuDrop.vue'
    
    const activeMenu = ref(null)
    
    const toggleDropdown = (menu) => {
        activeMenu.value = activeMenu.value === menu ? null : menu
    }
    
    const menu1 = [
        { label: '음식 데이터 검색', href: '/searchFood' },
        { label: '음식 데이터 등록', href: '/registerFood' }
    ]
  
    const menu2 = [
        { label: '식사 조회', href: '/readMeal' },
        { label: '식사 등록', href: '/registerMeal' },
        { label: '식단 게시글 조회', href: '/readDiet' },
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
        { label: '북마크', href: '/category' },
        { label: '구독 관리', href: '/subscribeMng' },
        { label: '구독 게시판', href: '/subscribePost' },
        { label: '차단', href: '/block' }
    ]
    
    const menu5 = [
        { label: '공지 사항', href: '/noticeLayout' },
        { label: '문의 사항', href: '/qna' },
        { label: '나의 신고 내역', href: '/myReport' }
    ]
</script>
  
<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #155b45;
        padding: 30px;
        z-index: 3000;
        position: relative;
    }
  
    .logo img {
        height: 50px;
        margin-left: 50px;
    }
  
    .main-nav {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 100px;
        color: white;
        font-weight: bold;
    }
  
    .menu-item {
        position: relative; /* 중요: 드롭다운 위치 기준점 */
        cursor: pointer;
    }
  
    .auth-nav {
        display: flex;
        gap: 20px;
        margin-right: 50px;
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
</style>
  