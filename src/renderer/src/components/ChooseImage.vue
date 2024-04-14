<template>
  <div class="choose-image-btn">
    <el-icon :size="25" class="text-gray-500"><Plus /></el-icon>
  </div>

  <el-dialog v-model="dialogVisible" title="选择图片" width="80%" top="5vh">
    <template #footer> </template>
  </el-dialog>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style scoped>
.choose-image-btn {
  @apply w-[100px] h-[100px] rounded border flex justify-center items-center cursor-pointer hover:(bg-gray-100);
}
</style>
