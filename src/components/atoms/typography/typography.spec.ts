import { shallowMount } from '@vue/test-utils'
import Typography from './typography.component.vue'

describe('Typography', () => {
  it('renders typography when required props passed', () => {
    const text = 'text'
    const wrapper = shallowMount(Typography, {
      propsData: { text },
    })
    expect(wrapper.text()).toMatch('text')
  })
})
