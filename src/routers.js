import Vue from 'vue'
import Router from 'vue-router'
import BlockDetail from '@/components/BlockDetail'
import Main from '@/components/main'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
      },
    {
        path: '/blockDetail',
        name: 'BlockDetail',
        component: BlockDetail
    }
  ]
})