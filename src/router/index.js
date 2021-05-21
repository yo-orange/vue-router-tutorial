import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    alias: '/a',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/redirect/users/:id',
    redirect: to => {
      // https://github.com/vuejs/vue-router/blob/dev/examples/redirect/app.js#L35
      const { params } = to
      return '/users/' + params.id
    }
  },
  {
    path: '/users/:id',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
    children: [
      {
        path: '',
        name: 'UsersTop',
        component: () => import(/* webpackChunkName: "usersTop" */ '../views/UsersTop.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "usersProfile" */ '../views/UsersProfile.vue'),
      },
      {
        path: 'posts',
        name: 'Posts',
        component: () => import(/* webpackChunkName: "usersPosts" */ '../views/UsersPosts.vue'),
      }
    ]
  },
  {
    path: '/settings',
    name: 'UserSettings',
    component: () => import(/* webpackChunkName: "about" */ '../views/NestedNamed/UserSettings.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'UserEmailsSubscriptions' }
      },
      {
        path: 'emails',
        name: 'UserEmailsSubscriptions',
        components: {
          default: () => import(/* webpackChunkName: "usersTop" */ '../views/NestedNamed/UserEmailsSubscriptions.vue'),
        }
      },
      {
        path: 'profile',
        name: 'UserProfile',
        components: {
          default: () => import(/* webpackChunkName: "usersTop" */ '../views/NestedNamed/UserProfile.vue'),
          helper: () => import(/* webpackChunkName: "usersTop" */ '../views/NestedNamed/UserProfilePreview.vue')
        }
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
