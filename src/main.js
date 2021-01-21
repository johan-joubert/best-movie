import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)
Vue.use(require('vue-moment'));

import home from './components/Home.vue'
import Top50 from './components/Top50.vue'
import FrenchFilms from './components/FrenchFilms.vue'
import Films2020 from './components/Films2020.vue'
import AmericanFilms from './components/AmericanFilms.vue'
import Search from './components/Search.vue'
import ZoomMovie from './components/ZoomMovie.vue'

const routes = [ 
  {path: '/', component: home},
  {path: '/top50', component: Top50}, 
  {path: '/frenchfilms', component: FrenchFilms}, 
  {path: '/films2020', component: Films2020}, 
  {path: '/americanfilms', component: AmericanFilms}, 
  {path: '/search', component: Search}, 
  {path: '/zoommovie/:id', component: ZoomMovie}, 
]


const router = new VueRouter({
  mode: 'history',
  routes
});

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
