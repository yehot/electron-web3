<script setup></script>

<template>
  <el-col v-for="i in 4" :key="i" :span="6">
    <el-skeleton style="width: 100%" animated loading>
      <template #template>
        <el-card shadow="hover" class="border-0">
          <template #header>
            <div class="flex justify-between">
              <el-skeleton-item variant="text" style="width: 50%" />
              <el-skeleton-item variant="text" style="width: 10%" />
            </div>
          </template>
          <el-skeleton-item variant="h3" style="width: 80%" />
          <el-divider />
          <div class="flex justify-between text-sm text-gray-500">
            <el-skeleton-item variant="text" style="width: 50%" />
            <el-skeleton-item variant="text" style="width: 10%" />
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-col>
</template>

<style scoped></style>
