import { shallowMount } from '@vue/test-utils'

import TournantDynamicAnchor from '../../src/index.vue'

const defaultLink = { to: '/test', text: 'Test' }

describe('@tournant/dynamic-anchor', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			propsData: {
				to: defaultLink.to
			},
			slots: {
				default: defaultLink.text
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

	it('sets `href` if href attribute is given', () => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			propsData: {
				href: defaultLink.to
			},
			slots: {
				default: defaultLink.text
			}
		})

		expect(
			wrapper
				.findAll('a')
				.at(0)
				.attributes('href')
		).toBe('/test')
	})
})

describe('@tournant/dynamic-anchor – with @vue/router', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			propsData: {
				to: defaultLink.to
			},
			mocks: {
				parent: {
					$root: {
						router: () => ''
					}
				}
			},
			stubs: ['router-link']
		})
	})

	it('renders `router-link`', () => {
		expect(wrapper.find('router-link-stub')).toBeDefined()
	})

	it('renders `a` if desired', () => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			propsData: {
				to: defaultLink.to,
				useNativeLinkElement: true
			},
			mocks: {
				parent: {
					$root: {
						router: () => ''
					}
				}
			},
			stubs: ['router-link']
		})

		expect(wrapper.is('a')).toBe(true)
	})

	it('sets `to` attribute', () => {
		console.log(wrapper.attributes())

		expect(wrapper.attributes('to')).toBe('/test')
	})
})

describe.only('@tournant/dynamic-anchor – with Nuxt', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			context: {
				props: {
					to: defaultLink.to
				},
				parent: {
					$root: {
						$options: {
							nuxt: () => '',
							router: () => ''
						}
					}
				}
			},
			stubs: ['nuxt-link']
		})
	})

	it('renders `nuxt-link`', () => {
		expect(wrapper.find('nuxt-link-stub')).toBeDefined()
	})

	it('renders `a` if desired', () => {
		wrapper = shallowMount(TournantDynamicAnchor, {
			propsData: {
				to: defaultLink.to,
				useNativeLinkElement: true
			},
			mocks: {
				parent: {
					$root: {
						$options: {
							nuxt: () => '',
							router: () => ''
						}
					}
				}
			},
			stubs: ['nuxt-link']
		})

		expect(wrapper.is('a')).toBe(true)
	})
})
