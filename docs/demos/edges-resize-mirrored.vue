<script setup lang="ts">
import { reactive, ref } from 'vue'

// 演示同时启用四边缩放 + 镜像布局（is-mirrored）效果
const mirrored = ref(true)
const layout = reactive([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 3, i: '1' },
  { x: 4, y: 0, w: 2, h: 4, i: '2' },
  { x: 6, y: 0, w: 2, h: 3, i: '3' },
])
</script>

<template>
  <label style="display:inline-flex;gap:6px;align-items:center;font-size:14px;">
    <input v-model="mirrored" type="checkbox" /> Mirrored
  </label>
  <GridLayout v-model:layout="layout" :row-height="30" :is-mirrored="mirrored">
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :resize-option="{ edges: { top: true, right: true, bottom: true, left: true }, margin: 6 }"
    >
      <div class="text">
        {{ item.i }}
      </div>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.vgl-layout {
    background:#eee;
  }

:deep(.vgl-item:not(.vgl-item--placeholder)) {
    background:#ccc;
    border:1px solid #000;
  }

.text {
    position:absolute;
    inset:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
  }
</style>
