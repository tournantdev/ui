import { shallowMount } from '@vue/test-utils'
import A11yCombox from '@/A11yCombobox.vue'

describe('A11yCombobox.vue', () => {
  const inputLabel = 'Search for item'
  const wrapper = shallowMount(A11yCombox, {
    propsData: {
      inputLabel
    }
  })

  it('has a required inputLabel', () => {
    expect(wrapper.vm.$options.props.inputLabel.required).toBeTruthy()
  })

  it('sets the correct aria-label', () => {
    const $input = wrapper.vm.$el.querySelector('input')

    expect($input.getAttribute('aria-label')).toBe(inputLabel)
  })
})
