import initialState from './initialState'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export const appSettings = {
  namespaced: true,
  state: Object.assign({}, initialState),
  mutations: mutations,
  actions: actions,
  getters: getters
}
