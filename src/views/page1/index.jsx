import { } from 'vue'
import styles from './index.module.scss'

import { useCommonStore } from 'store/common'

import { useList } from './data'

export default {
  setup () {
    const common = useCommonStore()
    const { list1, list2 } = useList()

    return () => (
      <>
        <p>{common.title}</p>
        <ul className={styles.list}>
          <li>
            {
              list1.map(item => (<div key={item}>{item}</div>))
            }
          </li>
          <li>-------</li>
          <li>
            {
              list2.map(item => (<div key={item}>{item}</div>))
            }
          </li>
        </ul>
      </>
    )
  },
}
