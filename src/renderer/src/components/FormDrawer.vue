<template>
  <!--   TODO: 组件传值时， :title  是如何声明的 -->
  <el-drawer
    v-model="showDrawer"
    :title="title"
    :size="size"
    :close-on-click-modal="false"
    :destroy-on-close="destroyOnClose"
  >
    <div class="formDrawer">
      <div class="body">
        <slot />
      </div>
      <div class="actions">
        <el-button type="primary" :loading="loading" @click="submit">
          {{ confirmText }}
        </el-button>
        <el-button type="default" @click="close">取消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)

const open = () => (showDrawer.value = true)
const close = () => (showDrawer.value = false)

const submit = () => emit('submit')

const loading = ref(false)
const showLoading = () => (loading.value = true)
const hideLoading = () => (loading.value = false)

// 组件对外暴露方法
defineExpose({
  open,
  close,
  showLoading,
  hideLoading
})

const emit = defineEmits(['submit'])

// 组件对外暴露属性
defineProps({
  title: String,
  size: {
    type: String,
    default: '45%'
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: '提交'
  }
})
</script>

<style scoped>
.formDrawer {
  width: 100%;
  height: 100%;
  position: relative;
  @apply flex flex-col;
}

.formDrawer .body {
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: auto;
}

.formDrawer .actions {
  height: 50px;
  @apply mt-auto flex items-center;
}
</style>
