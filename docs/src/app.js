import Vue from 'vue';
import CheckboxRadio from '../../src';

Vue.use(CheckboxRadio);

new Vue({
    el: '#app',

    data() {
        return {
            lastEventTime: '',
        }
    },

    methods: {
        onChange() {
            this.lastEventTime = new Date();
        },
    },
});


require('./app.scss');
