<template>
 <div class="todo_item"> 
    <!-- <v-app>
        <v-container class="container">
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4"> -->

                    <div class="todo-item" v-for="(task, index) in tasks" :key="task.id">
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

                    </div>
                <!-- </v-col>
            </v-row>
        </v-container>

    </v-app> -->
</div> 
</template>

<script>
export default {
name: 'todo-item',
}
</script>

<style lang="scss" scoped>

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
