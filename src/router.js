import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      /* component: Home */
      redirect: '/todos'
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import(/* webpackChunkName: "todos" */'./views/Todos.vue')
    },
    {
      path: '/todos/create',
      name: 'todos-create',
      component: () => import(/* webpackChunkName: "todos-create" */'./views/TodoCreate.vue')
    },
    {
      path: '/todos/:id/update',
      name: 'todos-update',
      component: () => import(/* webpackChunkName: "todos-update" */'./views/TodoUpdate.vue')
    }
  ]
})
