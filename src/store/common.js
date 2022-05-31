import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => {
    return {
      Menu: [
        {
          id: '1',
          label: 'page1',
          path: '/'
        },
        {
          id: '2',
          label: 'page2',
          path: '/page2'
        },
      ]
    }
  },
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
