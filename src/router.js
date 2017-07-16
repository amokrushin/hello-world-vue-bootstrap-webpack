import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Album from './components/Album.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    saveScrollPosition: true,
    linkActiveClass: 'active',
    routes: [
        { path: '', component: Home },
        { path: '/album', component: Album },
        { path: '/dashboard', component: Dashboard },
    ],
});
