<template>
  <div v-for="li in list" :key="li.id" data-test="todo">
    {{li.text}}
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const list = reactive([
  {
    id: 1,
    text: 'this is demo',
    completad: false
  }
])
</script>

<style lang="scss" scoped>
div {
  font-size: 14px;
}
</style>
