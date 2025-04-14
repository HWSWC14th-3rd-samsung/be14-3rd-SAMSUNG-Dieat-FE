<template>
    <div class="page-wrapper">
        <div class="breadcrumb">
            <RouterLink to="/" class="text-link">Home &gt; </RouterLink>
            <span>Service &gt; </span>
            <RouterLink to="/myReportLayout" class="text-link">나의 신고 내역</RouterLink>
        </div>

        <h1>나의 신고 내역</h1>

        <ReportTable />
    </div>

    <br /><br /><br /><br />
    <Footer />
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ReportTable from './ReportTable.vue'
</script>

<style scoped>
.page-wrapper {
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.breadcrumb {
    text-align: right;
    color: gray;
    margin-bottom: 1rem;
}

.text-link {
    color: inherit;
    text-decoration: none;
    font-weight: normal;
    cursor: pointer;
}

h1 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
}
</style>