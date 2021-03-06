import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path:'/Profile/:user_id',
      name:'ViewProfile',
      component:ViewProfile
    }

  ]
})
