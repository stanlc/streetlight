import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import info from '../components/info'
import deviceList from '../components/deviceList'
import plan from '../components/plan'
import alarm from '../components/alarm'
import center from '../components/center'
import data from '../components/data'
import log from '../components/log'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect:'/info',
    children:[
      {
        path:'/info',
        name:'info',
        component:info        
      },
      {
        path:'/deviceList',
        name:'deviceList',
        component:deviceList
      },
      {
        path:'/plan',
        name:'plan',
        component:plan
      },      {
        path:'/alarm',
        name:'alarm',
        component:alarm
      },      {
        path:'/center',
        name:'center',
        component:center
      },      {
        path:'/log',
        name:'log',
        component:log
      },      {
        path:'/data',
        name:'data',
        component:data
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

