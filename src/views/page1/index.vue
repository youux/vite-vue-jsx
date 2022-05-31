<template>
  <div class="title">mock数据演示：</div>
  <el-table :data="list" border>
    <el-table-column label="nickname" prop="nickname"></el-table-column>
    <el-table-column label="age" prop="age"></el-table-column>
    <el-table-column label="uid" prop="uid"></el-table-column>
    <el-table-column label="country" prop="country"></el-table-column>
    <el-table-column label="email" prop="email"></el-table-column>
  </el-table>

  <p>
    <button @click="print">点击{{num}}</button>
  </p>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
// 接口服务
import Http from 'service/index'

const num = ref(1)
const list = reactive([])

const print = () => {
  num.value++
}

const getList = (data) => {
  Http.get('/api/getList', { params: data }).then(res => {
    for (const [key, value] of Object.entries(res.data)) {
      list[key] = value
    }
  }).catch((error) => {
    console.log(error)
  })
}

watchEffect(() => {
  getList({ type: 1 })
})

</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
}
</style>
