<template>
<div>
    <p>
        <router-link to="/">Home</router-link>
        <br/>
        <router-link to="/note">Note</router-link>
    </p>
    
    <router-view/>
    <!-- <task-form @add="addPost"/>
    <todo-list /> -->
</div>
</template>

<script>


export default {
    name: 'App',

    components: {

       
    },

    data() {
        return {
          todoLists:[]
        }
    },

    setLocalTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },

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

</style>
