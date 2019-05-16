import { shallowMount } from '@vue/test-utils'

import VueA11yInput from '@/VueA11yInput.vue'

const defaultProps = {
  label: 'Test label',
  value: 'Say hello',
  validation: {
    $error: true,
    $dirty: false
  },
  required: false
}

describe('VueA11yInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(VueA11yInput, {
      propsData: defaultProps,
      slots: {
        'required-text': ' required',
        feedback: '<p>Input is required</p>'
      }
    })
  })

  describe('props', () => {
    it('has a required label prop', () => {
      expect(wrapper.vm.$options.props.label.required).toBeTruthy()
    })

    it('has a `inputType` prop', () => {
      expect(wrapper.vm.$options.props.inputType).toBeDefined()
    })

    it('has a `required` prop', () => {
      expect(wrapper.vm.$options.props.required).toBeDefined()
    })

    it('renders the `required` attribute if `required` prop is set', () => {
      wrapper.setProps({ required: true })

      const input = wrapper.find('input')

      expect(input.attributes('required')).toBeDefined()
    })

    it('has a validation prop', () => {
      expect(wrapper.vm.$options.props.validation).toBeDefined()
    })
  })

  describe('`v-model` compatibility', () => {
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
  })

  describe('aria attributes invalid state', () => {
    beforeEach(() => {
      wrapper.setProps({
        validation: {
          $error: true,
          $dirty: true
        }
      })
    })

    it('sets `aria-invalid`', () => {
      const input = wrapper.find('input')

      expect(input.attributes('aria-invalid')).toBe('true')
    })

    it('sets `aria-describedby` to the id of the feedback message container', () => {
      const input = wrapper.find('input')
      const feedbackMessages = wrapper.find('.v-a11y-input__feedback')
      const feedbackId = feedbackMessages.attributes('id')

      expect(input.attributes('aria-describedby')).toBe(feedbackId)
    })
  })

  describe('slots', () => {
    it('renders required text inside label', () => {
      const label = wrapper.find('label')
      const labelText = label.text()

      expect(labelText.includes('required')).toBeTruthy()
    })

    it('hides the input messages if valid', () => {
      const feedbackMessages = wrapper.find('.v-a11y-input__feedback')

      wrapper.setProps({ validation: { $error: false, $dirty: true } })

      expect(feedbackMessages.isVisible()).toBeFalsy()
    })

    it('renders feedback messages if value is invalid', () => {
      const feedbackMessages = wrapper.find('.v-a11y-input__feedback')

      wrapper.setProps({ validation: { $error: true, $dirty: true } })

      expect(feedbackMessages.contains('p')).toBeTruthy()
    })
  })

  it.skip('matches html structure', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
