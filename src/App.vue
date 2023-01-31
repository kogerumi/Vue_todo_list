<template>
<div class="" id="app">
    <v-app class="todo">
        <v-container class="container">
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4">
                    <v-form>
                        <v-text-field type="text" name="todo_input" placeholder="Write a task" v-model="taskText" required></v-text-field>
                        <v-btn color="primary" @click="addTask">Add task</v-btn>
                    </v-form>
                    <div class="taskList">
                        <v-list-item class="todoItem" v-for="(task, id) in tasks" :key="id" >
                          <span :class="{done:isDone}"> {{ task }}</span>             
                            <v-list-item-action class="taskCheck">
                                <v-checkbox v-model="isDone" :input-value="active" color="teal darken-2"></v-checkbox>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    </v-app>
</div>
</template>

<script>
export default {
    name: 'App',

    components: {

    },

    data() {
        return {
            taskText: "",
            tasks: [],
            isDone: false
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskText);
            this.taskText = "";
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.todoItem {
    border: 2px solid #26A69A;
    border-radius: 4px;
    margin-bottom: 10px;
}

.taskCheck {
    margin-left: 5px;
}

.taskList{
  margin-top: 30px;
}

.done{
  color: rgb(139, 139, 139);
  text-decoration: line-through;
}
</style>
