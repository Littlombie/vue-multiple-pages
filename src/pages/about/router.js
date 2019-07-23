import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Index from './views/home.vue'
import aboutYou from './views/aboutyou.vue'

Vue.use(Router)

const VueRouter = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'AboutHome',
    meta: {
      title: 'AboutHome'
    },
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About'
    },
    component: About
  },
  {
    path: '/about.html',
    name: 'about',
    component: About
  },
  {
    path: '/aboutYou',
    name: 'aboutYou',
    meta: {
      title: 'About You'
    },
    component: aboutYou
  }]
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
