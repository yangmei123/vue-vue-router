// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import warpHeader from './components/warp-header.vue';
import selectItem from './components/select-item/select-item.vue';
import nextBtn from './components/next-btn/next-btn.vue';

Vue.use(VueResource);
Vue.config.productionTip = false
Vue.component('selectItem', selectItem);
Vue.component('warp-header', warpHeader);
Vue.component('next-btn', nextBtn);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
