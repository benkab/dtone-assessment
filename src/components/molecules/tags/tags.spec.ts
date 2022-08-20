import { shallowMount } from '@vue/test-utils'
import Tags from './tags.component.vue'

describe('Tags', () => {
  it('renders tags when required props passed', () => {
    const tags = ['tag 1', 'tag 2']
    const wrapper = shallowMount(Tags, {
      propsData: {
        tags,
      },
    })
    expect(wrapper.props().tags).toBe(tags)
  })
})
