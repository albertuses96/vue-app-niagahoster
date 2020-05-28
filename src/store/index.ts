import Vue from 'vue'
import Vuex from 'vuex'
import {Data} from '@/Domain/Entities'
import mutations from '@/Data/use-case/mutations'
import actions from '@/Data/use-case/actions'

Vue.use(Vuex)

export type IStore = {
  state: {
    data: Array<Data>,
    theme: string
  },
  mutations: any,
  actions: any,
  modules: any
}

const VueStore: IStore = {
  state: {
    data: [],
    theme: 'light'
  },
  mutations: mutations,
  actions: actions,
  modules: {
  }
}

export default new Vuex.Store(VueStore)
