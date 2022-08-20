/** @format */

import { shallowMount } from '@vue/test-utils'
import Container from './container.component.vue'

describe('Container', () => {
  it('renders container component', () => {
    const wrapper = shallowMount(Container)
    expect(wrapper).toBeTruthy()
  })
})
