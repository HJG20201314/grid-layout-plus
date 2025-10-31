<script setup lang="ts">
import { reactive } from 'vue'

// 展示通过 resizeOption.edges 启用四条边进行缩放，并演示 hover / active 边颜色反馈。
const layout = reactive([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1' },
  { x: 4, y: 0, w: 2, h: 3, i: '2' },
  { x: 6, y: 0, w: 2, h: 3, i: '3' },
])
</script>

<template>
  <GridLayout v-model:layout="layout" :row-height="30" responsive>
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :resizeOption="{ edges: { top: true, right: true, bottom: true, left: true }, margin: 6 }"
    >
      <div class="text">
        <span>{{ item.i }}</span>
      </div>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.vgl-layout { background-color: #eee; }
:deep(.vgl-item:not(.vgl-item--placeholder)) { background-color: #ccc; border:1px solid #000; }
.text { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:24px; }
</style>
