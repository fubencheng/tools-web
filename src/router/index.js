import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home';

import Tools from '@/components/Tools';
import Logback from '@/components/Logback';

import CPU from '@/components/CPU';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home",
      component: Home
    },
    {
      path:'/home',
      component:Home,
      children:[{
        path:'/home/cpu',
        name:'CPU',
        component:CPU
      }]
    },
    {
      path:'/tools',
      name:'Tools',
      component:Tools,
      children:[{
        path:'/tools/logback',
        name:'Logback',
        component:Logback
      }]
    }
  ]
})
