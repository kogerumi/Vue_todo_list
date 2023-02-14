<template>
<div class="todo-list">
    <v-app class="todo">
        <v-container class="container">
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4">
                    <!-- <v-form>
                        <v-text-field type="text" name="todo-input" placeholder="Write a task" v-model="taskText" required></v-text-field>
                        <v-btn color="primary" @click="addTask">Add task</v-btn>
                    </v-form> -->
                   
                    <div class="task-list">
                        <h2 class="todo-title" v-if="tasks.length">Task list:</h2>
                        <!-- <v-list-item class="todo-item" v-for="(task, index) in tasks" :key="task.id">
                            <span>{{ index + 1 }}.</span>
                            <span :class="{done:task.isComplite}"> {{ task.text }}</span>
                            <v-list-item-action class="task-check">
                                <v-checkbox @change="checkTask" v-model="task.isComplite" :input-value="active" color="teal darken-2"></v-checkbox>
                            </v-list-item-action>
                            <div class="btn-container">
                                <v-icon class="edit-btn" @click="editTask(task)">
                                    mdi-pencil-box-outline
                                </v-icon>
                                <v-icon class="delete-btn" @click="deleteTask(i)">
                                    mdi-close-box-outline
                                </v-icon>
                            </div>

                        </v-list-item> -->
                        <v-list-item>
                            <todo-item/>
                        </v-list-item>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    </v-app>
</div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    name: 'todo-list',

    components: {
        TodoItem, 
    },

    data() {
        return {
            taskText: "",
            tasks: [],
            // task: {
            //     id: this.id,
            //     text: this.taskText,
            //     isComplite: this.isDone
            // },
            isDone: false,
            id: 0,
            isEdit: false
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
            if (this.isEdit === false) {
                this.id++;
                this.tasks.push({
                    id: this.id,
                    text: this.taskText,
                    isComplite: this.isDone
                });
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                this.taskText = "";
            } else {

                this.tasks.map(function (item) {
                    if (item.id === this.task.id) {
                        this.task.text = this.taskText;
                    }
                });
                // this.isEdit = false;
            }
            //  this.task.text = this.taskText;
            //if (this.isEdit === true && ){
            //    let currentTask = this.tasks.filter(task => task.text === this.taskText)
            //   currentTask.text = this.taskText;
            //   console.log(currentTask)
            // this.isEdit = false;

            //     this.task.text = this.taskText;

            //     this.taskText = "";
            //     // 

        },
        checkTask() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },

        deleteTask(i) {
            this.tasks.splice(i, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },

        editTask(task) {
            this.isEdit = true;
            this.id = task.id
            this.taskText = task.text;
            // this.isEdit = false;

        }
    }
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
