<template>
  <div>
    <h1>测试sass</h1>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request';
import {onMounted} from 'vue';

// 当组件挂在完毕执行
onMounted(()=>{
  request({
  url: '/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
}).then(res=>console.log(res))
})

</script>

<style scoped lang="scss">
div {
  h1 {
    color: $base-color; 
  }
}
</style>
