import Checkbox from './components/Checkbox';
import Radio from './components/Radio';

export default {
    install (Vue) {
        console.log('eee');
        Vue.component('checkbox', Checkbox);
        Vue.component('radio', Radio);
    }
}

export { Checkbox, Radio }
