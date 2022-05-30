import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    title: 'this is title'
  }),
  getters: {},
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
