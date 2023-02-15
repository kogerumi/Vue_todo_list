import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      tasks:[]
    },
    
mutations: {
  addTask (state, task) {
    state.tasks.push(task)
  }
}
});


export default store;