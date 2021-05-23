import { shallowMount } from '@vue/test-utils'
import UsersTop from '@/views/UsersTop.vue'

// import { createRouter, createWebHistory } from 'vue-router'
// const routes = [];
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// https://lmiller1990.github.io/vue-testing-handbook/vue-router.html#using-a-mock-router
describe('UsersTop.vue', () => {
  it('renders route.params.id is String when passed', () => {
    const wrapper = shallowMount(UsersTop, {
      global: {
        mocks: {
          $route: {
            params: { id: 'foo' }
          }
        }
      }
    })
    expect(wrapper.text()).toMatch("This is User Top PageUser ID: foo")
  })
  it('renders route.params.id is Number when passed', () => {
    const wrapper = shallowMount(UsersTop, {
      global: {
        mocks: {
          $route: {
            params: { id: 1 }
          }
        }
      }
    })
    expect(wrapper.text()).toMatch("This is User Top PageUser ID: 1")
  })
})
