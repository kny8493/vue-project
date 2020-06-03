// route 할 path 적는 파일

import login from '@/views/login'
import home from '@/views/home'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]
export default routes
