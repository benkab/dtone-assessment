import { shallowMount } from '@vue/test-utils'
import Navbar from './navbar.component.vue'

describe('Navbar', () => {
  it('renders navbar component', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper).toBeTruthy()
  })
})
