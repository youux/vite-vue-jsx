<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true">
          <el-menu-item v-for="item in common.Menu" :key="item.id" :index="item.path">{{item.label}}</el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useCommonStore } from 'store/common'
const common = useCommonStore()
</script>

<style lang="scss" scoped>
.el-menu,
.common-layout,
.el-container {
  width: 100%;
  height: 100%;
}
</style>
