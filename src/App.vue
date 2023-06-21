<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from './api/user'

onMounted(() => {
  reqLogin({ userName: 'admin', passWord: '111111' })
})
</script>

<style scoped></style>
