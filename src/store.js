import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userModule from './modules/userModule'
import postModule from './modules/postModule'
import complexModule from './modules/complexModule'

export default new Vuex.Store({
  state: {
    loading: false,
    userIsLogged: true,
  },
  mutations: {
      setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {

  },
  modules: {
    userModule,
    postModule,
    complexModule
  }
})
