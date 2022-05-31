import { } from 'vue'
import styles from './index.module.scss'

// 接口服务
import Http from 'service/index'
import { useList } from './data'

export default {
  setup () {
    const { list1, list2 } = useList(Http)

    return () => (
      <>
        <p>mock数据演示：</p>
        <el-table data={list1} border>
          <el-table-column label="nickname" prop="nickname"></el-table-column>
          <el-table-column label="age" prop="age"></el-table-column>
          <el-table-column label="uid" prop="uid"></el-table-column>
          <el-table-column label="country" prop="country"></el-table-column>
          <el-table-column label="email" prop="email"></el-table-column>
        </el-table>

        <ul className={styles.list}>
          <li>
            {
              list2.map(item => (<p key={item}>{item}</p>))
            }
          </li>
        </ul>
      </>
    )
  },
}
