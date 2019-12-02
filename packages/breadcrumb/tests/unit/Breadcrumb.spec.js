import { shallowMount } from '@vue/test-utils'

import TournantBreadcrumb from '../../src/index.vue'

import { itemData, noLastLinkData } from '../breadcrumb.stories'

describe('@tournant/breadcrumb', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData
			}
		})
	})

	it('renders a `nav element`', () => {
		expect(wrapper.find('nav')).toBeDefined()
	})

	it('sets an `aria-label` to the nav element', () => {
		expect(wrapper.attributes('aria-label')).toBe('Breadcrumb')
	})

	it('allows to change the label text', () => {
		wrapper.setProps({ labelText: 'Brotkrume' })

		expect(wrapper.attributes('aria-label')).toBe('Brotkrume')
	})

	it('emits an event if an item is clicked', () => {
		wrapper.find('a').trigger('click')

		expect(wrapper.emitted('itemClick')).toBeTruthy()
	})

	it('renders `aria-current`', () => {
		const $links = wrapper.findAll('a')
		const $last = $links.at($links.length - 1)

		expect($last.attributes('aria-current')).toBe('page')
	})

	it('does not render `aria-current` if the last item has no link', () => {
		wrapper.setProps({ links: noLastLinkData })

		const $links = wrapper.findAll('a')
		const $last = $links.at($links.length - 1)

		expect($last.attributes('aria-current')).toBeUndefined()
	})
})

describe('@tournant/breadcrumb – with @vue/router', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData
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
})

describe('@tournant/breadcrumb – with Nuxt', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantBreadcrumb, {
			propsData: {
				links: itemData
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

	it('sets `to` attribute', () => {
		expect(
			wrapper
				.findAll('nuxt-link-stub')
				.at(0)
				.attributes('to')
		).toBe('/test-route')
	})
})
