<script setup lang="ts">
// 引入图标组件
import { Plus, Edit } from '@element-plus/icons-vue'
console.log(import.meta.env)

</script>

<template>
  <div>后台管理系统</div>
  <svg style="width:100px">
    <!-- xlink:href执行用哪一个图标，属性值务必#icon-图标名字 -->
    <!-- usebiaoqianfill属性可以设置图标颜色 -->
    <use xlink:href="#icon-phone" fill="red"></use>
  </svg>
  
</template>

<style scoped>

</style>

