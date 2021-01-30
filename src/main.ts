import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueContentPlaceholders from 'vue-content-placeholders';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/styles.scss';
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-content-placeholders/dist/vue-content-placeholders.css';

Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueContentPlaceholders);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
