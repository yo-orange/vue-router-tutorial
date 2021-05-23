import { shallowMount } from '@vue/test-utils'
import UsersPosts from '@/views/UsersPosts.vue'

// https://lmiller1990.github.io/vue-testing-handbook/components-with-props.html#setting-props-with-propsdata
describe('UsersPosts.vue', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(UsersPosts, {
      propsData: {
        id: 'foo',
        title: 'Unit Tests',
      }
    })
    expect(wrapper.text()).toMatch("This is Posts pagePost User ID: fooPost Title: Unit Tests")
  })
})
