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
