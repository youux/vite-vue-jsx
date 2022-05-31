import { } from 'vue'
import styles from './index.module.scss'

// 接口服务
import Http from 'service/index'
import { useList } from './data'

export default {
  setup () {
    const { list } = useList(Http)

    return () => (
      <>
        <div className={styles.title}>mock数据演示：</div>
        <el-table data={list} border>
          <el-table-column label="nickname" prop="nickname"></el-table-column>
          <el-table-column label="age" prop="age"></el-table-column>
          <el-table-column label="uid" prop="uid"></el-table-column>
          <el-table-column label="country" prop="country"></el-table-column>
          <el-table-column label="email" prop="email"></el-table-column>
        </el-table>
      </>
    )
  },
}
