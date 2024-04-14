<template>
  <!-- 作用？？ -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { create_eth_wallet } from '@bridge/web3_bridge'
const ipcHandle = () => create_eth_wallet(1)
const test = () => {
  console.log('1')
  console.log('2')
}
</script>

<style>
body {
  @apply bg-gray-100;
}

// 样式覆盖
#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px !important;
}
// 全局样式
::-webkit-scrollbar {
  width: 4px;
  height: 6px;
}
::-webkit-scrollbar-corner {
  display: block;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border-right-color: transparent;
  border-left-color: transparent;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
