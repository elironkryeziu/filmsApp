import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Films from '@/components/Films'
import AddFilm from '@/components/AddFilm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'films',
      component: Films
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add',
      name: 'addfilm',
      component: AddFilm
    }
  ]
})
