require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('app', require('./components/App.vue').default);

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);


const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});

