import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import ZipCode from '@/views/ZipCode.vue'

jest.mock('axios')

describe('ZipCode.vue', () => {
  it('renders props.msg when passed', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    const wrapper = shallowMount(ZipCode, {
      global: {
        mocks: {
          axios: axios
        }
      }
    })
    expect(wrapper.text()).toMatch("Loading...")
  })
})
