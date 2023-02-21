<template>
<div>
    <v-app>
        <v-container>
            <v-row class="d-flex justify-center mb-6">
                <v-col cols="12" md="4">
                    <h1 class="note-title" v-if="!editing" @dblclick="editing = true">{{noteTitle}}</h1>
                    <v-text-field :value="titleForm"
                     @focus="startEdit" 
                     @blur="doneEdit" 
                     @keyup.enter="doneEdit" 
                     @keyup.esc="cancelEdit" 
                     color="primary" maxlength="1023" 
                     ref="input" placeholder="Note title" 
                     v-else v-focus="editing">
                    </v-text-field>
                   
                    
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <task-form/> 
                </v-col>
            </v-row>
           
                <todo-list/>
              
        </v-container>

    </v-app>

    

</div>
</template>

<script>
import TodoList from '@/components/TodoList';
import TaskForm from '@/components/TaskForm';

export default {
    name: 'NotePage',
    components: {
        TodoList,
        TaskForm
    },
    data() {
        return {
            editing: false,
            titleForm: "",
            noteTitle: "Note title"
        }
    },
    directives: {
        focus(el, {
            value
        }, {
            context
        }) {
            if (value) {
                context.$nextTick(() => {
                    context.$refs.input.focus()
                })
            }

        }
    },
    mounted() {
        const data = localStorage.getItem('noteTitle');
        if (data) {
            this.noteTitle = JSON.parse(data);
        }
    },
    methods: {
        startEdit() {
          this.titleForm = this.noteTitle;
        },

        doneEdit(e) {

            const value = e.target.value.trim()
            if (value) {
                this.noteTitle = value;
            }

            // const { title } = this
            // if (!value) {
            //   this.removeTodo(title)
            // } else if (this.editing) {
            //   this.editTodo({
            //     title,
            //     value
            //   })
            localStorage.setItem('noteTitle', JSON.stringify(this.noteTitle));
            this.editing = false

        },
        cancelEdit() {
            this.editing = false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
