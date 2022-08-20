import { shallowMount } from '@vue/test-utils'
import Textfield from './textfield.component.vue'

describe('Textfield', () => {
  it('renders textfield component', () => {
    const onInputChange = jest.fn()
    const wrapper = shallowMount(Textfield, {
      propsData: {
        onInputChange,
      },
    })
    expect(wrapper.props().onInputChange).toBe(onInputChange)
  })
})
