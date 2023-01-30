<template>
<div id="app">
    <div class="container">
        <input type="text" name="todo_input" placeholder="Write a task" v-model="taskText">
        <button @click="addTask">Add task</button>
        <p>{{tasks}}</p>
    </div>
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
            tasks: []
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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
