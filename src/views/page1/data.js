import { reactive, watchEffect } from 'vue'

export const useList = (Http) => {
  const list = reactive([])

  const getList = (data) => {
    Http.get('/api/getList', { params: data }).then(res => {
      for (const [key, value] of Object.entries(res.data)) {
        list.push(value)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  watchEffect(() => {
    getList({ type: 1 })
  })

  return {
    list
  }
}
