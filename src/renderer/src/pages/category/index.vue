<template>
  <div>
    <el-row :gutter="20">
      <template> </template>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getStatistics1 } from '@renderer/api/index.js'

const panels = ref([])
getStatistics1().then((res) => {
  panels.value = res.panels
  console.log(panels.value)
})
</script>

<style scoped></style>
