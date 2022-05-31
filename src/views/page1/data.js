import { reactive, watchEffect } from 'vue'

export const useList = (Http) => {
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
    }).catch((error) => {
      console.error(error)
    })
  }

  watchEffect(() => {
    getList({ type: 1 })
    getList({ type: 2 })
  })

  return {
    list1,
    list2
  }
}
