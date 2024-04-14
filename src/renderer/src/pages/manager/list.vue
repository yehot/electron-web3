<template>
  <el-button @click="showImagePicker">图片选择</el-button>
  <ChooseImage />
</template>

<script setup>
import ChooseImage from '@renderer/components/ChooseImage.vue'

const showImagePicker = () => {}
</script>

<style scoped></style>
