import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      tasks:[],
    //   task:{
    //     id:0,
    //     text:"",
    //     isDone:false
    // }
    },
    
mutations: {
  addTask (state, task) {
    state.tasks.push(task)
  }
}
});


export default store