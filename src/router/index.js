import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Trends from '../views/Trends.vue'
import SearchProducts from '../views/SearchProducts.vue'
import Watchlist from '../views/Watchlist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/Dashboard/:code',
          name: 'userMatch',
          component: Dashboard
        }
      ]
    },
    {
      path: '/Trends',
      name: 'Trends',
      component: Trends
    },
    {
      path: '/SearchProducts',
      name: 'SearchProducts',
      component: SearchProducts
    },
    {
      path: '/WatchList',
      name: 'WatchList',
      component: Watchlist,
      props: true
    }
  ],
  mode: 'history'
})
