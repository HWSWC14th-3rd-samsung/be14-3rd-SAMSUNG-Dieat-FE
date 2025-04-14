<template>
    <main class="post-write-page">
        <h2 class="page-title">자유 게시글 작성</h2>

        <div class="write-form">
            <!-- 제목 -->
            <div class="write-section">
                <label class="write-label">글 제목</label>
                <input v-model="title" type="text" placeholder="글의 제목을 입력하세요." class="write-input" />
            </div>

            <!-- 내용 -->
            <div class="write-section">
                <label class="write-label">본문 내용</label>
                <textarea v-model="content" placeholder="본문 내용을 입력하세요." class="write-textarea" />
            </div>

            <!-- 이미지 등록 -->
            <div class="write-section">
                <label class="write-label">이미지 등록</label>
                <div class="image-upload-box">
                    <span>+ 이미지 선택</span>
                    <input type="file" @change="handleImageUpload" />
                </div>
                <img v-if="imageUrl" :src="imageUrl" class="image-preview" />
            </div>

            <!-- 버튼 -->
            <div class="submit-button-wrapper">
                <button class="submit-button" @click="submitPost">등록</button>
                <button class="cancel-button">취소</button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/common/Header.vue';

const title = ref('');
const content = ref('');
const imageUrl = ref('');

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        imageUrl.value = URL.createObjectURL(file);
    }
}

function submitPost() {
    alert('게시글이 등록되었습니다.');
}

function cancelPost() {
    title.value = '';
    content.value = '';
    imageUrl.value = '';
}
</script>

<style src="@/assets/post/registerFree.css"></style>