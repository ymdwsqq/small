import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoList:[]
  },
  mutations: {
    setPhotoList(state,_data){
      state.photoList=_data
    }
  },
  actions: {
  },
  modules: {
  }
})
