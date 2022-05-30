import { reactive, watchEffect } from 'vue'
import styles from './index.module.scss'

import Http from 'service/index'

import { useCommonStore } from 'store/common'

export default {
  setup () {
    const common = useCommonStore()
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

    return () => (
      <>
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
      </>
    )
  },
}
