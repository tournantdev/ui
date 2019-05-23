import { shallowMount } from '@vue/test-utils'

import VueA11yInput from '@/VueA11yInput.vue'

const defaultProps = {
  label: 'Test label',
  value: 'Say hello',
  type: 'password',
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

  it('links the label to the input', () => {
    const label = wrapper.find('label')
    const input = wrapper.find('input')
    const id = input.attributes('id')
    const labelFor = label.attributes('for')

    expect(labelFor).toBe(id)
  })

  it('sets the inputType on the input element', () => {
    const input = wrapper.find('input')
    const type = input.attributes('type')

    expect(type).toBe('password')
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

  describe('input description', () => {
    it('has the ability to set a description', () => {
      expect(wrapper.vm.$options.props.description).toBeDefined()
    })

    it('links the description in `aria-describedby` if set', () => {
      wrapper.setProps({
        description: 'This is a description',
        validation: { $error: false }
      })

      const input = wrapper.find('input')
      const descriptionMessage = wrapper.find('.v-a11y-input__description')
      const id = descriptionMessage.attributes('id')

      expect(input.attributes('aria-describedby')).toBe(id)
    })

    it('links to description and feedback message if an error is present', () => {
      wrapper.setProps({
        description: 'This is a description',
        validation: { $error: true }
      })

      const input = wrapper.find('input')
      const descriptionMessage = wrapper.find('.v-a11y-input__description')
      const feedbackMessages = wrapper.find('.v-a11y-input__feedback')
      const feedbackId = feedbackMessages.attributes('id')
      const descId = descriptionMessage.attributes('id')

      expect(input.attributes('aria-describedby')).toBe(
        `${feedbackId} ${descId}`
      )
    })
  })

  describe('slots', () => {
    it('renders required text inside label', () => {
      wrapper.setProps({ required: true })

      const label = wrapper.find('label')
      const labelText = label.text()

      expect(labelText.includes('required')).toBeTruthy()
    })

    it('does not render required text if input isn’t required', () => {
      const label = wrapper.find('label')
      const labelText = label.text()

      expect(labelText.includes('required')).toBeFalsy()
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
