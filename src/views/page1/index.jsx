import { reactive } from 'vue'
import styles from './index.module.scss'

import Http from 'service/index'

export default {
  setup () {
    const list = reactive([])

    Http.get('/api/getList').then(res => {
      for (const [key, value] of Object.entries(res.data)) {
        list.push(value)
      }
    })

    return () => <div className={styles.list}>{
      list.map(item => (<div key={item}>{item}</div>))}</div>
  },
}
