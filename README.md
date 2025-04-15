# 🥗 Dieat - 감각적인 식단 기록 커뮤니티


---

## 🎯 프로젝트 개요

**Dieat**는 감각적인 UI와 직관적인 UX로 누구나 쉽게 식단을 기록하고 공유할 수 있도록 돕는 식단 커뮤니티 플랫폼입니다.

음식을 검색하고, 나만의 식단을 구성하고, 다른 사람들과 함께 이야기해 보세요!

---

## 🍊 주요 기능

| 기능 | 설명 |
|------|------|
| 🔍 **음식 검색** | 실시간 검색 및 자동완성 |
| 🧾 **음식 등록** | 음식명, 단위, 영양 정보 등을 직접 입력 |
| 🛒 **장바구니 기능** | 선택한 음식으로 나만의 식단 구성 및 수량 조절 |
| 💬 **자유 게시판** | 식단 공유, 질문, 후기 작성 가능 (좋아요 및 댓글 포함) |
| 🖼️ **이미지 업로드** | 게시글과 음식 등록에 이미지 첨부 가능 |

---

## 📋 요구사항 명세서 (Summary)

[요구사항 명세서 보기](https://github.com/user-attachments/assets/3d6159ec-6847-449e-b710-921f7bd6073d)

---

## 🖼️ Wire Frame

---

## 🕊️ 기능 명세서
- 식단
  <details>
    <summary>게시글 등록</summary>
    <img src="https://github.com/user-attachments/assets/8f4e9263-5951-40ec-862f-4bb1750c6e76">
  </details>

  <details>
    <summary>게시글 수정</summary>
    <img src="https://github.com/user-attachments/assets/d4c42cc2-e7e2-4f88-8fb7-738f77951ad4">
  </details>

  <details>
    <summary>게시글 전체 조회</summary>
    <img src="https://github.com/user-attachments/assets/8d8fa8a5-7681-4a41-8ee7-f4818a70f15f">
  </details>

  <details>
    <summary>단일 게시글 상세 조회</summary>
    <img src="https://github.com/user-attachments/assets/49848e3b-e0b8-4be4-a1f4-3a392cb5c002">
  </details>

  <details>
    <summary>페이징네이션</summary>
    <img src="https://github.com/user-attachments/assets/e845a1de-0d0e-4353-80f5-7673d5fb455c">
  </details>
  
  <details>
    <summary>영양소 범위로 조회</summary>
    <img src="https://github.com/user-attachments/assets/771769b6-f567-49cc-a286-0bdca76fdc19">
  </details>

- 회원
  <details>
    <summary>로그인</summary>
    <img src="https://github.com/user-attachments/assets/b4d2a3f2-a2b7-4038-840e-072432740d9a">
  </details>
  
  <details>
    <summary>회원 가입</summary>
    <img src="https://github.com/user-attachments/assets/031c2679-f316-489b-9288-dbb035cb0d6b">
  </details>

- 댓글
  <details>
    <summary>댓글 등록</summary>
    <img src="https://github.com/user-attachments/assets/8f6aa988-b7a5-4d45-80e8-82ae792ba337">
  </details>
  
  <details>
    <summary>댓글 수정</summary>
    <img src="https://github.com/user-attachments/assets/2ea6adfb-87d4-4f5e-9077-2336b43bf299">
  </details>
  
  <details>
    <summary>댓글 삭제(soft)</summary>
    <img src="https://github.com/user-attachments/assets/d70a7fe0-4685-46e3-ae65-f6fc32ae31a7">
  </details>
  
  <details>
    <summary>특정 게시글의 댓글 조회</summary>
    <img src="https://github.com/user-attachments/assets/a1c8c9da-7067-41b7-b625-42fc67f0642d">
  </details>

- 사용자 데이터 음식 평가
  <details>
    <summary>수정이 필요해요</summary>
    <img src="https://github.com/user-attachments/assets/6d3627fd-6db2-401c-a93d-a621896e3d87">
  </details>
  
  <details>
    <summary>음식 정보 정확해요</summary>
    <img src="https://github.com/user-attachments/assets/824a8de7-803c-4a79-a646-f1984b5b6b76">
  </details>
  
  <details>
    <summary>평가 삭제</summary>
    <img src="https://github.com/user-attachments/assets/92918f28-73e3-4aa2-bb05-66607035f009">
  </details>

- 사용자 데이터 음식
  <details>
    <summary>음식 추가</summary>
    <img src="https://github.com/user-attachments/assets/8bc895b5-f891-4eb7-8c50-a813e3cb8de9">
  </details>
  
  <details>
    <summary>음식 삭제</summary>
    <img src="https://github.com/user-attachments/assets/7ab950bd-56ab-47d0-90b4-8bd1209afdac">
  </details>

---

## 🎬 스토리보드

---

## 🧪 테스트 계획 및 결과

---

## 🛠️ 기술 스택

- **Frontend**: Vue.js + Vite
- **State Management**: Pinia (장바구니, 검색 상태 등)
- **Backend**: JSON Server (Mock API)
- **디자인**: Figma 기반 UI / 시그니처 컬러 시스템 적용
- **기타 기능**: 페이지네이션, 동적 라우팅, 반응형 구성


---

## 🚀 앞으로의 방향

- 사용자 인증 및 마이 페이지 도입
- 영양 통계 시각화 기능 (예: 탄수/단백/지방 그래프)
- AI 기반 식단 추천 기능 (GPT 연동)
- 모바일 최적화 및 정식 API 서버 연동


