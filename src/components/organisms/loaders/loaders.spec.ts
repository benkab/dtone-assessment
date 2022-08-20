import { shallowMount } from '@vue/test-utils'
import Loaders from './loaders.component.vue'

describe('Loaders', () => {
  it('renders loaders component', () => {
    const text = 'text'
    const wrapper = shallowMount(Loaders, {
      propsData: { text },
    })
    expect(wrapper).toBeTruthy()
  })
})
