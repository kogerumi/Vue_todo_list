<template>
<div class="app">
    <v-app class="todo">
        <v-container class="container">
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4">
                    <v-form>
                        <v-text-field type="text" name="todo-input" placeholder="Write a task" v-model="taskText" required></v-text-field>
                        <v-btn color="primary" @click="addTask">Add task</v-btn>
                    </v-form>
                    <div class="task-list">
                        <h2 class="todo-title" v-if="tasks.length">Task list:</h2>
                        <v-list-item class="todo-item" v-for="(task, index) in tasks" :key="task.id">
                            <span>{{ index + 1 }}.</span>
                            <span :class="{done:task.isComplite}"> {{ task.text }}</span>
                            <v-list-item-action class="task-check">
                                <v-checkbox @change="checkTask" v-model="task.isComplite" :input-value="active" color="teal darken-2"></v-checkbox>
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

    // components: {

    // },

    data() {
        return {
            taskText: "",
            tasks: [],
            isDone: false,
            id: 0
        }
    },
    mounted() {
        const data = localStorage.getItem('tasks');
        if (data) {
            this.tasks = JSON.parse(data);
        }

    },
    methods: {
        addTask() {
            this.tasks.push({
                id: this.id,
                text: this.taskText,
                isComplite: this.isDone
            });
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
            this.taskText = "";
        },
        checkTask() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
            
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

.todo {
    &-item {
        border: 2px solid #26A69A;
        border-radius: 4px;
        margin-bottom: 10px;
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
</style>
