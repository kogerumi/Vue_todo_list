<template>
<div class="todo-list">
    <v-app class="todo">
        <v-container class="container">
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4">


                        <h2 class="todo-title" v-if="taskList.length">Task list:</h2>

                  <div>Tasklist!!</div>
                  <div  v-for="(task) in taskList" :key="task.text">
                    {{task.text}}
                  </div>

                </v-col>
            </v-row>
        </v-container>

    </v-app>
</div>
</template>

<script>
// import TodoItem from './TodoItem';
export default {
    name: 'todo-list',

    components: {
        // TodoItem,
    },


    data() {
        return {
            tasks: this.$store.state.tasks,
        }
    },
  computed: {
    taskList () {
      console.log('COMPUTED', this.$store.state.tasks);
      return this.$store.state.tasks;
    }
  },
    // mounted() {
    //     const data = localStorage.getItem('tasks');
    //     if (data) {
    //         this.tasks = JSON.parse(data);
    //     }

    // },
    methods: {
addTask() {
this.$store.commit('addTask')
console.log(this.$store.state.tasks)
},
            // if (this.isEdit === false) {
            //     this.id++;
            //     this.tasks.push({
            //         id: this.id,
            //         text: this.taskText,
            //         isComplite: this.isDone
            //     });
            //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
            //     this.taskText = "";
            // } else {

            //     this.tasks.map(function (item) {
            //         if (item.id === this.task.id) {
            //             this.task.text = this.taskText;
            //         }
            //     });
                // this.isEdit = false;
            //}
            //  this.task.text = this.taskText;
            //if (this.isEdit === true && ){
            //    let currentTask = this.tasks.filter(task => task.text === this.taskText)
            //   currentTask.text = this.taskText;
            //   console.log(currentTask)
            // this.isEdit = false;

            //     this.task.text = this.taskText;

            //     this.taskText = "";
            //     //

       // },
        // checkTask() {
        //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
        // },

        // deleteTask(i) {
        //     this.tasks.splice(i, 1);
        //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
        // },

        // editTask(task) {
        //     this.isEdit = true;
        //     this.id = task.id
        //     this.taskText = task.text;
        //     // this.isEdit = false;

        // }
    },
    // computed:{
    //     tasks(){
    //         return this.$store.state.tasks;

    //     }
    // },
}
</script>

<style lang="scss">

.todo {
    &-item {
        border: 2px solid #26A69A;
        border-radius: 4px;
        margin-bottom: 10px;
        //padding: 15px 0;

    }

}

.task-check {
    margin-left: 5px;
}

.task-list {
    margin-top: 40px;
}

.todo-title {
    margin-bottom: 30px;
}

.done {
    color: rgb(139, 139, 139);
    text-decoration: line-through;
}

.btn-container {
    margin-left: auto;
}

.delete-btn {
    cursor: pointer;
}

.edit-btn {
    cursor: pointer;
}
</style>
