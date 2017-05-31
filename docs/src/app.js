// Vue
import Vue from 'vue';
import CheckboxRadio from '../../src';

Vue.use(CheckboxRadio);

new Vue({
    el: '#app',

    data() {
        return {
            lastEventTimeCheckbox: '',
            lastEventTimeRadio: '',
        }
    },

    methods: {
        onChangeCheckbox() {
            this.lastEventTimeCheckbox = new Date();
        },
        onChangeRadio() {
            this.lastEventTimeRadio = new Date();
        },
    },
});

// App
require('./app.scss');
