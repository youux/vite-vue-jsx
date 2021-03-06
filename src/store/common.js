import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => {
    return {
      Menu: [
        {
          id: '1',
          label: 'page1',
          path: '/page1'
        }
      ]
    }
  },
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
