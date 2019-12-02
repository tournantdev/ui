import { shallowMount } from '@vue/test-utils'

import TournantAlert from '../../src/index.vue'

describe('alert', () => {
	let wrapper
	let $root

	beforeEach(() => {
		wrapper = shallowMount(TournantAlert, {})

		$root = wrapper.vm.$el
	})

	describe('ARIA states and properties', () => {
		it('has a role of `alert`', () => {
			expect($root.getAttribute('role')).toBe('alert')
		})

		it('changes role to status if `type` is `polite`', () => {
			wrapper.setProps({ type: 'polite' })

			expect(wrapper.attributes('role')).toBe('status')
		})

		it('has `aria-hidden` set to true by default', () => {
			expect($root.getAttribute('aria-hidden')).toBe('true')
		})

		it('sets `aria-hidden` to true if messages are present', () => {
			expect($root.getAttribute('aria-hidden')).toBe('false')
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
