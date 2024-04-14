<script setup>
import FHeader from '@renderer/layout/components/FHeader.vue'
import FMenu from '@renderer/layout/components/FMenu.vue'
import FTagList from '@renderer/layout/components/FTagList.vue'
</script>

<template>
  <el-container>
    <el-header>
      <!-- 用大写首字母命名的组件，可以小写加 - 引入 -->
      <f-header></f-header>
    </el-header>
    <el-container>
      <el-aside class="el-aside" :width="$store.state.asideWidth">
        <f-menu></f-menu>
      </el-aside>
      <el-main>
        <f-tag-list></f-tag-list>
        <router-view v-slot="{ Component }">
          <keep-alive :max="10">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-aside {
  transition: all 0.2s;
}
</style>
