<template>
  <div>
    <el-row :gutter="10">
      <template v-if="panels.length === 0">
        <IndexHeaderSk />
      </template>

      <el-col v-for="(item, index) in panels" :key="index" :span="6" :offset="0">
        <el-card shadow="hover" class="border-0">
          <template #header>
            <div class="flex justify-between">
              <span>{{ item.title }}</span>
              <el-tag :type="item.unitColor" effect="plain">{{ item.unit }}</el-tag>
            </div>
          </template>
          <span>
            <CountTo :value="item.value" />
          </span>
          <el-divider />
          <div class="flex justify-between">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <IndexNavs />

    <el-row :gutter="20" class="mt-5">
      <el-col :span="12" :offset="0">
        <IndexChart v-permission="['getStatistics3,GET']" />
      </el-col>
      <el-col :span="12" :offset="0">
        <IndexCard title="店铺及商品提示" tip="店铺及商品提示" :btns="goods" class="mb-3" />
        <IndexCard title="交易提示" tip="需要立即处理的交易订单" :btns="order" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { getStatistics1, getStatistics2 } from '@renderer/api/index.js'
import { ref } from 'vue'
import CountTo from '@renderer/components/CountTo.vue'
import IndexHeaderSk from '@renderer/components/IndexHeaderSk.vue'
import IndexNavs from '@renderer/components/IndexNavs.vue'
import IndexChart from '@renderer/components/IndexChart.vue'
import IndexCard from '@renderer/components/IndexCard.vue'

const panels = ref([])
getStatistics1().then((res) => {
  panels.value = res.panels
})

const goods = ref([])
const order = ref([])
getStatistics2().then((res) => {
  goods.value = res.goods
  order.value = res.order
})
</script>

<style>
.bg-left {
  background-color: lightblue;
}
</style>
