import { shallowMount } from '@vue/test-utils'

import VueA11yInput from '@/VueA11yInput.vue'

const defaultProps = {
  label: 'Test label',
  value: 'Say hello'
}

describe('VueA11yInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(VueA11yInput, {
      propsData: defaultProps
    })
  })

  it('has a required label prop', () => {
    expect(wrapper.vm.$options.props.label.required).toBeTruthy()
  })

  it('sets the value prop on the input', () => {
    const $input = wrapper.find('input')

    expect($input.element.value).toBe('Say hello')
  })

  it('emits the value on change', () => {
    const $input = wrapper.find('input')
    $input.setValue('Wave goodbye')
    const emittedInput = wrapper.emitted().input

    expect(emittedInput).toBeTruthy()
    expect(emittedInput[0]).toEqual(['Wave goodbye'])
  })

  it.skip('matches html structure', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
