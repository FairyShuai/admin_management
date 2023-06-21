<template>
  <svg :style="{width, height}">
    <!-- xlink:href执行用哪一个图标，属性值务必#icon-图标名字 -->
    <!-- usebiaoqianfill属性可以设置图标颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
    defineProps({
        // xlink:href属性前缀
        prefix: {
            type: String,
            default: '#icon-'
        },
        // 提供使用图标名字
        name: String,
        // 接受父组件传递颜色
        color: {
            type: String,
            default: 'blue'
        },
        // 接受父组件传递宽度
        width: {
            type: String,
            default: '16px'
        },
        // 接受父组件传递高度
        height: {
            type: String,
            default: '16px'
        }
    })
</script>

<style scoped>
</style>