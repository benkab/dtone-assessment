import { shallowMount } from '@vue/test-utils'
import Modal from './modal.component.vue'

describe('Modal', () => {
  it('renders modal component', () => {
    const wrapper = shallowMount(Modal)
    expect(wrapper).toBeTruthy()
  })
})
