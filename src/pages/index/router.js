import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'

Vue.use(Router)

const VueRouter =   new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home page'
      },
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

VueRouter.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

VueRouter.afterEach(() => {
  // 跳到每个页面的时候 让页面滑动到最顶端
  window.scrollTo(0, 0)
})

export default VueRouter