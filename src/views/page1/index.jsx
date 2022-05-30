import { } from 'vue'
import styles from './index.module.scss'

import { useList } from './data'

import { useCommonStore } from 'store/common'

export default {
  setup () {
    const common = useCommonStore()
    const { list1, list2 } = useList()

    return () => (
      <div>
        <div>这里是Pinia返回的数据：{common.title}</div>
        <hr />
        <ul className={styles.list}>
          {
            list1.map(item => (<li key={item}>{item}</li>))
          }
          <hr />
          {
            list2.map(item => (<li key={item}>{item}</li>))
          }
        </ul>
      </div>
    )
  },
}
