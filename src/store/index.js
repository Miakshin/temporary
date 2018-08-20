import Vue from 'vue'
import Vuex from 'vuex'
import { appSettings } from './app-settings'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    appSettings
  }
})

export default store
