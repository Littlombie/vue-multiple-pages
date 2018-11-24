import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about.html',
      name: 'about',
      component: About
    },
    {
      path: '/home',
      beforeEnter(){
        window.location.href = 'index.html'
      }
    }
  ]
})
