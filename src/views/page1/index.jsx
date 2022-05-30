import { reactive, watchEffect } from 'vue'
import styles from './index.module.scss'

import Http from 'service/index'

export default {
  setup () {
    const list1 = reactive([])
    const list2 = reactive([])

    const getList = (data) => {
      Http.get('/api/getList', { params: data }).then(res => {
        const list = res.data
        if (data.type === 1) {
          for (const [key, value] of Object.entries(list)) {
            list1.push(value)
          }
        } else {
          for (const [key, value] of Object.entries(list)) {
            list2.push(value)
          }
        }
      })
    }

    watchEffect(() => {
      getList({ type: 1 })
      getList({ type: 2 })
    })

    return () => <ul className={styles.list}>
      <li>
        {
          list1.map(item => (<div key={item}>{item}</div>))
        }
      </li>
      <li>
        {
          list2.map(item => (<div key={item}>{item}</div>))
        }
      </li>
    </ul>
  },
}
