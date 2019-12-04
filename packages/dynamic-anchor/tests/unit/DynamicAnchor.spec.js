import { shallowMount } from '@vue/test-utils'

import TournantDynamicAnchor from '../../src/index.vue'

const defaultLink = { to: '/test', text: 'Test' }
const linkNoCustomComponent = {
	to: '/test-no-custom-component',
	text: 'Ignore Framework',
	useNativeLinkElement: true
}

describe('@tournant/dynamic-anchor', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			propsData: {
				link: defaultLink
			}
		})
	})

	it('renders a link', () => {
		expect(wrapper.is('a')).toBe(true)
	})

	it('renders link text', () => {
		expect(wrapper.text()).toBe(defaultLink.text)
	})

	it('sets `href`', () => {
		expect(
			wrapper
				.findAll('a')
				.at(0)
				.attributes('href')
		).toBe('/test')
	})

	describe('with @vue/router', () => {
		beforeEach(() => {
			wrapper = shallowMount(TournantDynamicAnchor, {
				propsData: {
					link: defaultLink
				},
				mocks: {
					$router: () => ''
				},
				stubs: ['router-link']
			})
		})

		it('renders `router-link`s', () => {
			expect(wrapper.find('router-link-stub')).toBeDefined()
		})

		it('renders `a` if desired', () => {
			wrapper.setProps({ link: linkNoCustomComponent })

			expect(wrapper.is('a')).toBe(true)
		})

		it('sets `to` attribute', () => {
			expect(
				wrapper
					.findAll('router-link-stub')
					.at(0)
					.attributes('to')
			).toBe('/test')
		})
	})

	describe('with Nuxt', () => {
		let wrapper

		beforeEach(() => {
			wrapper = shallowMount(TournantDynamicAnchor, {
				propsData: {
					link: defaultLink
				},
				mocks: {
					$nuxt: () => ''
				},
				stubs: ['nuxt-link']
			})
		})

		it('renders `nuxt-link`s', () => {
			expect(wrapper.find('nuxt-link-stub')).toBeDefined()
		})

		it('renders `a` if desired', () => {
			wrapper.setProps({ link: linkNoCustomComponent })

			expect(wrapper.is('a')).toBe(true)
		})

		it('sets `to` attribute', () => {
			expect(
				wrapper
					.findAll('nuxt-link-stub')
					.at(0)
					.attributes('to')
			).toBe('/test')
		})
	})
})
