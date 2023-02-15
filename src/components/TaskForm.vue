<template>
<div class="task-form">
    <v-app>
        <v-container>
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4">
                    <v-form>
                        <v-text-field type="text" name="todo-input" placeholder="Write a task" v-model="taskText" required></v-text-field>
                        <v-btn color="primary" @click="addTask">Add task</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</div>
</template>

<script>
export default {
    name: 'task-form',
    data() {
        return {
            id: 0,
            taskText: "",
            isDone: false,
            task: {
                text: this.taskText,
            }

        };
    },

    methods: {
        addTask() {
            const text = this.taskText.trim()
            if (text) {
                // this.$emit('addTask', this.task);
                this.task = {
                    id: this.id++,
                    text: text,
                    isComplite: this.isDone
                }
                this.$store.commit('addTask', this.task)
                this.taskText = "";
            }
            // console.log(this.task)
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
        //     // this.isEdit = false;
        // }
        //  this.task.text = this.taskText;
        //if (this.isEdit === true && ){
        //    let currentTask = this.tasks.filter(task => task.text === this.taskText)
        //   currentTask.text = this.taskText;
        //   console.log(currentTask)
        // this.isEdit = false;

        //     this.task.text = this.taskText;

        //     this.taskText = "";
        //     // 

    }
}
</script>

<style lang="scss" scoped>

</style>
