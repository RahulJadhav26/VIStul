// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {store} from './store/store'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  modes: 'history',
  components: { App },
  template: '<App/>'
})
