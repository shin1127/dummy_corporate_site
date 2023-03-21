import Vue from 'vue'
import Router from 'vue-router'
import jigyo from '@/components/jigyo'
import jirei from '@/components/jirei'
import annai from '@/components/annai'
import top from '@/components/top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/jigyo',
      component: jigyo
    },
    {
      path: '/jirei',
      component: jirei
    },
    {
      path: '/top',
      component: top
    },
    {
      path: '/annai',
      component: annai
    }
  ]
})
