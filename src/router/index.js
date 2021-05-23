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
    path: '/zipcode',
    name: 'ZipCode',
    component: () => import(/* webpackChunkName: "zipcode" */ '../views/ZipCode.vue')
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
    props: true,
    children: [
      {
        path: '',
        name: 'UsersTop',
        component: () => import(/* webpackChunkName: "usersTop" */ '../views/UsersTop.vue'),
        props: true,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "usersProfile" */ '../views/UsersProfile.vue'),
        props: true,
      },
      {
        path: 'posts',
        name: 'Posts',
        component: () => import(/* webpackChunkName: "usersPosts" */ '../views/UsersPosts.vue'),
        props: route => ({ id: route.params.id, title: '投稿' })
      }
    ]
  },
  {
    path: '/settings',
    name: 'UserSettings',
    component: () => import(/* webpackChunkName: "about" */ '../views/NestedNamed/UserSettings.vue'),
    meta: { requiresAuth: true },
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

// https://router.vuejs.org/ja/api/#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%88%E3%82%99
router.beforeEach((to, from, next) => { // eslint-disable-line
  console.log("global:beforeEach")
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("requiresAuth is true.")
    next()
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => { // eslint-disable-line
  console.log("global:beforeResolve")
  next()
})

router.afterEach((to, from) => { // eslint-disable-line
  console.log("global:afterEach")
})

export default router
