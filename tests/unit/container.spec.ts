/** @format */

import { shallowMount } from '@vue/test-utils'
import Container from '@/components/layouts/container/container.component.vue'

describe('Container', () => {
  it('renders container component', () => {
    const wrapper = shallowMount(Container)
    expect(wrapper).toBeTruthy()
  })
})
