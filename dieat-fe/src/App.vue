<template>
  <div>
    <main>
      <RouterView />
    </main>
    <LoginModal :show="isLoginModalOpen" @login="handleLogin" @close="isLoginModalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import LoginModal from '@/components/LoginModal.vue'

const isLoginModalOpen = ref(false)

const handleLogin = ({ id, password }) => {
  console.log('로그인 시도:', id, password)
  isLoginModalOpen.value = false
}
</script>

<style scoped>
.login-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #11875c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  z-index: 1100;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica', 'Arial', sans-serif;
  background-color: #f9f9f9;
}
</style>


