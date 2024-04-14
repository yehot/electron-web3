<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-1"><eleme-filled /></el-icon>
      Wallet 工具
    </span>

    <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
      <fold v-if="$store.state.asideWidth === '250px'" />
      <expand v-else />
    </el-icon>
    <el-tooltip effect="dark" content="刷新" placement="bottom">
      <el-icon class="icon-btn" @click="handleRefresh"><refresh /></el-icon>
    </el-tooltip>

    <div class="avatar-container">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <el-icon class="icon-btn" @click="toggle">
          <full-screen v-if="!isFullScreen" />
          <aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown class="dropdown" @command="handleDropdown">
        <span class="flex items-center text-light-50">
          <el-avatar class="avatar" :size="25" :src="$store.state.user.avatar"></el-avatar>
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>

    <form-drawer ref="formDrawerRef" title="修改密码" @submit="onSubmit"> </form-drawer>
  </div>
</template>

<script setup>
import {
  Aim,
  ArrowDown,
  ElemeFilled,
  Expand,
  Fold,
  FullScreen,
  Refresh
} from '@element-plus/icons-vue'
import { useFullscreen } from '@vueuse/core'
import { showModal, showToast } from '@renderer/composables/util.js'
import { logout } from '@renderer/api/manager.js'
import store from '@renderer/store/index.js'
import { router } from '@renderer/router/index.js'
import { reactive, ref } from 'vue'
import FormDrawer from '@renderer/components/FormDrawer.vue'

const { isFullScreen, toggle } = useFullscreen()

// 修改密码
const formDrawerRef = ref(null)

const handleDropdown = (c) => {
  switch (c) {
    case 'logout':
      handleLogout()
      break
    case 'rePassword':
      formDrawerRef.value.open()
      break
  }
}

const onSubmit = () => {}

function handleLogout() {
  showModal('是否要退出登录？').then((res) => {
    logout().finally(() => {
      store.dispatch('logout')
      // 跳转回登录页
      router.push('/login')
      // 提示退出登录成功
      showToast('退出登录成功')
    })
  })
}
const handleRefresh = () => location.reload()
</script>

<style scoped>
.avatar {
  @apply mr-2;
}

.avatar-container {
  @apply ml-auto flex items-center;
  padding-right: 30px;
}

.f-header {
  @apply flex items-center bg-indigo-700 text-lime-50 fixed top-0 right-0 left-0;
  height: 64px;
  z-index: 1000;
}

.logo {
  width: 250px;
  @apply flex justify-center items-center text-xl font-thin;
}

.icon-btn {
  @apply flex justify-center items-center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}

.icon-btn:hover {
  @apply bg-indigo-600;
}

.f-header .dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center;
}
</style>
