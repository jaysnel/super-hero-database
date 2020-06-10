import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Heroes from '../views/Heroes.vue'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/heroes',
    name: 'Heroes',
    component: Heroes,
  },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero,
      children: [
        {
          path: ':id',
          meta: {
            label: 'Hero Details'
          },
          name: 'Hero',
          component: Hero
        }
      ]
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
