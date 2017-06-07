// Vue
import Vue from 'vue';
import CheckboxRadio from '../../src';

Vue.use(CheckboxRadio);

new Vue({
    el: '#app',

    data() {
        return {
            checkboxValue: [],
            radioValue: '',
        }
    },
});

// App
require('./app.scss');
