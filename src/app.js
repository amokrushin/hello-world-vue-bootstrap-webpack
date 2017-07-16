import 'jquery';
import 'bootstrap';
import 'holderjs';

import Vue from 'vue';
import router from './router';
import App from './components/App.vue';

// create the app instance
const app = new Vue({
    // making router available for all child components as `this.$router`
    router,
    // object spread copying everything from App.vue
    ...App,
});

export { app, router };
