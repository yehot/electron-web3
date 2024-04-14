<template>
  <div class="f-menu" :style="{ width: $store.state.asideWidth }">
    <el-menu
      unique-opened
      :collapse="isCollapse"
      class="border-0"
      :collapse-transition="false"
      :default-active="defaultActive"
      @select="handleSelect"
    >
      <template v-for="(item, index) in asideMenus" :key="index">
        <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.child"
            :key="index2"
            :index="item2.frontPath"
          >
            <el-icon>
              <component :is="item2.icon"></component>
            </el-icon>
            <span>{{ item2.name }}</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.frontPath">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { router } from '@renderer/router/index.js'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { asideMenus } from '@renderer/router/sideMenu'

const route = useRoute()
const store = useStore()

const isCollapse = computed(() => !(store.state.asideWidth === '250px'))

const defaultActive = ref(route.path)

const handleSelect = (e) => {
  router.push(e)
}
</script>

<style scoped>
.f-menu {
  top: 64px;
  bottom: 0;
  left: 0;
  overflow: auto;
  @apply shadow-md fixed bg-light-50;
}
</style>
