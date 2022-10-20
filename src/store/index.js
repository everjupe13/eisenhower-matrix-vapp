import { createStore } from 'vuex'
import { matrixModule } from './matrixModule'

export default createStore({
  state: () => ({
    likes: 0
  }),
  getters: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    matrix: matrixModule
  }
})
