import Vue from 'vue'
import VueRouter from 'vue-router'
import RecordTable from '../components/recordTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: RecordTable,
    children:[
      {
        path:'detail/:name',
        name:'detail',
        component:()=>import('../components/detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
