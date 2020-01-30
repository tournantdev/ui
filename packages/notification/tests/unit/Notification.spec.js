import { shallowMount } from '@vue/test-utils'

import TournantNotification from '../../src/index.vue'

jest.useFakeTimers()

describe('notification', () => {
	let wrapper
	let $root

	beforeEach(() => {
		wrapper = shallowMount(TournantNotification, {
			propsData: {
				message: 'Test message'
			}
		})

		$root = wrapper.vm.$el
	})

	describe('Props', () => {
		it('allows to set a message', () => {
			expect(wrapper.text()).toBe('Test message')
		})

		it('allow to set a state', () => {
			wrapper.setProps({ state: 'this-is-a-test' })

			expect(wrapper.vm.$props.state).toBe('this-is-a-test')
		})

		it('allows to set a custom timeout', () => {
			wrapper.setProps({ hideAfterSeconds: 14 })

			expect(wrapper.vm.$props.hideAfterSeconds).toBe(14)
		})
	})

	describe('ARIA states and properties', () => {
		it('has a role of `status`', () => {
			expect($root.getAttribute('role')).toBe('status')
		})

		it('changes role to `alert` if `type` is `assertive`', () => {
			wrapper.setProps({ type: 'assertive' })

			expect(wrapper.attributes('role')).toBe('alert')
		})

		it('sets `aria-hidden` to `false` if a message is present and the timeout has not passed', () => {
			wrapper.setProps({ message: 'Message no timeout' })

			expect($root.getAttribute('aria-hidden')).toBe('false')
		})

		it('sets `aria-hidden` to `true` if a message is present and the timeout has passed', () => {
			jest.advanceTimersByTime(5100)

			expect($root.getAttribute('aria-hidden')).toBe('true')
		})
	})

	describe('Timing', () => {
		it('clears the timeout if destroyed from the outside', () => {
			wrapper.destroy()

			expect(clearTimeout).toHaveBeenCalled()
		})

		// skipping this currently as the timer forwarding does not seem to work
		it.skip('keeps the message visible if longer timeframe has been specified', () => {
			wrapper.setProps({ hideAfterSeconds: 10 })

			jest.advanceTimersByTime(5000)

			expect($root.getAttribute('aria-hidden')).toBe('false')

			jest.advanceTimersByTime(5100)

			expect($root.getAttribute('aria-hidden')).toBe('true')
		})

		it('emits an event once the timeout has passed', () => {
			jest.runOnlyPendingTimers()

			expect(wrapper.emitted('messageTimeout')).toBeTruthy()
		})
	})

	describe('CSS', () => {
		it('has a default class', () => {
			expect(wrapper.classes('t-ui-alert')).toBe(true)
		})

		const states = [
			{ state: 'error', cssClass: 'is-error' },
			{ state: 'warning', cssClass: 'is-warning' },
			{ state: 'success', cssClass: 'is-success' }
		]

		states.forEach(({ state, cssClass }) => {
			it(`sets state class for ${state}`, () => {
				wrapper.setProps({ state })

				expect(wrapper.classes(cssClass)).toBe(true)
			})
		})
	})
})
