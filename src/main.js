import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App';
import router from './router';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
});
