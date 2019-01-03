import Vue from 'vue'
import Vuex from 'vuex'

// Modulos para el store de vuex
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  }
})
