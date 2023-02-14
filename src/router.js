import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue';
import NotePage from './views/NotePage.vue';

export default new VueRouter({
    // history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/note', component: NotePage },
      ],
      mode:'history'
});