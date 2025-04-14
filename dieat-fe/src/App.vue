<template>
  <div>
    <main>
      <RouterView />
    </main>
    <LoginModal :show="isLoginModalOpen" @login="handleLogin" @close="isLoginModalOpen = false" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>