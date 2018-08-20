import Vue from 'vue'
import Vuex from 'vuex'
import appSettings from './appSettings'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    appSettings
  }
})

export default store
