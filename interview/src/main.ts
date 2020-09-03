import Vue from 'vue'
import App from './App.vue'

// 挂载vuex
import store from '@/store/index';

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new App().$mount()
