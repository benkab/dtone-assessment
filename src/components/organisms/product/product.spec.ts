import { shallowMount } from '@vue/test-utils'
import Product from './product.component.vue'

describe('Product', () => {
  it('renders product component', () => {
    const wrapper = shallowMount(Product)
    expect(wrapper).toBeTruthy()
  })
})
