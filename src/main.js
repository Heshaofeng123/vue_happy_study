import './styles/base.less';

import Vue from 'vue'
import App from './App'
import Router from './router'
import Store from './store'

Vue.config.productionTip = false;

//引入vendor组件
import {Slider, SliderItem} from './components/vendor/slider';
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
import {ActionSheet} from './components/vendor/actionsheet';
Vue.component(ActionSheet.name, ActionSheet);
import {Rate} from './components/vendor/rate';
Vue.component(Rate.name, Rate);
import {Confirm, Alert, Toast, Notify, Loading} from './components/vendor/dialog';
Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading
};

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

document.addEventListener('DOMContentLoaded', function () {
  typeof FastClick == 'function' && FastClick.attach(document.body);
}, false);

window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);

const app = new Vue({
    router: Router,
    store: Store,
    render: v => v(App)
}).$mount('#app');
