<template>
	<div class="t-ui-dropdown">
		<button
			ref="toggle"
			:aria-label="ariaLabel ? ariaLabel : null"
			:aria-expanded="isVisible.toString()"
			aria-haspopup="true"
			class="t-ui-dropdown__toggle"
			@click="onClick"
			@keydown.prevent.down="open"
			@keydown.prevent.up="close"
		>
			<slot name="button-text" />
		</button>
		<transition name="fade-up">
			<div
				v-if="isVisible"
				ref="menu"
				:class="positioningClasses()"
				role="menu"
				class="t-ui-dropdown__menu"
				@keydown.down="onMenuDownArrow"
				@keydown.up="onMenuUpArrow"
				@keydown.esc="close"
			>
				<slot name="items" />
			</div>
		</transition>
	</div>
</template>

<script>
import isOutsidePath from '@h/isOutsidePath.js'

export default {
	name: 'TournantDropdown',
	props: {
		yPosition: {
			type: String,
			default: 'bottom',
			validator: val => val === 'top' || val === 'bottom'
		},
		xPosition: {
			type: String,
			default: 'left',
			validator: val => val === 'left' || val === 'right'
		},
		ariaLabel: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			isVisible: false,
			items: [],
			index: 0
		}
	},
	mounted() {
		const firstDiv = document.querySelector('div')

		if (firstDiv && !firstDiv.onclick) {
			this.setUpCatchEvent()
		}

		this.checkForAccessibleName()

		document.addEventListener('keydown', this.handleGlobalKeyDown)
		document.documentElement.addEventListener('click', this.handleGlobalClick)
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.handleGlobalKeyDown)
		document.documentElement.removeEventListener(
			'click',
			this.handleGlobalClick
		)

		if (this.items.length) {
			this.items.forEach(button => {
				button.removeEventListener('click', this.onMenuButtonClick)
			})
		}
	},
	methods: {
		positioningClasses() {
			const x = this.xPosition === 'left' ? '-is-left' : '-is-right'
			const y = this.yPosition === 'bottom' ? '-is-bottom' : '-is-top'

			return {
				[x]: true,
				[y]: true
			}
		},
		onClick() {
			if (this.isVisible) {
				this.close()
			} else {
				this.open()
			}
		},
		handleGlobalKeyDown(evt) {
			if (evt.keyCode === 9 && isOutsidePath(evt, this.$el)) {
				this.close(false)
			}
		},
		handleGlobalClick(evt) {
			if (isOutsidePath(evt, this.$el)) {
				this.close()
			}
		},
		onMenuButtonClick() {
			this.close()
		},
		open() {
			this.isVisible = true

			this.$nextTick().then(() => {
				this.items = Array.from(
					this.$refs.menu.querySelectorAll('[role=menuitem]:not([disabled])')
				)

				this.items.forEach(button => {
					button.addEventListener('click', this.onMenuButtonClick)
				})

				if (this.items) this.items[this.index].focus()
			})
		},
		close(setFocus = true) {
			// Method will be called from the `clickaway` directive on every component instance
			// Limit work and ensure correct handling of focus by having an additional check for visibility
			if (this.isVisible) {
				this.isVisible = false
				// this.index = 0
				if (setFocus) {
					this.$refs.toggle.focus()
				}
			}
		},
		onMenuDownArrow(e) {
			e.preventDefault()

			if (this.index < this.items.length - 1) {
				this.index++
			} else {
				this.index = 0
			}

			this.items[this.index].focus()
		},
		onMenuUpArrow(e) {
			e.preventDefault()

			if (this.index === 0) {
				this.index = this.items.length - 1
			} else {
				this.index--
			}

			this.items[this.index].focus()
		},
		/**
		 * Clicking outside of an element is buggy on iOS. To fix that, we need an (empty) click handler
		 * somewhere between the target element and the document root. The first div should do
		 * See: https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
		 */
		setUpCatchEvent() {
			const f = () => {
				void 0
			}

			document.querySelector('div').onclick = f
		},
		checkForAccessibleName() {
			const { toggle } = this.$refs
			const img = toggle.querySelector('img')
			const svg = toggle.querySelector('svg')
			const svgTitle = svg ? svg.querySelector('title') : null

			const hasAccessibleText =
				toggle.innerText.trim() !== '' ||
				toggle.name.trim() ||
				toggle.attributes['aria-label'] ||
				(img && img.alt) ||
				(svgTitle && svgTitle.innerHTML)

			if (!hasAccessibleText) {
				console.warn(
					'TournantDropdown: It appears like the dropdown menu has no accessible text. Please make sure to add textual content to the button.'
				)
			}
		}
	}
}
</script>

<style lang="scss">
.t-ui-dropdown {
	display: inline-block;
	position: relative;
	z-index: 50;

	--t-ui-space-half: 0.5rem;
	--t-ui-space-full: 1rem;
}

.t-ui-dropdown__menu {
	background-color: white;
	border-radius: 0.25rem;
	box-shadow: 2px 4px 6px rgba(142, 142, 142, 0.4);
	padding: var(--t-ui-space-half) var(--t-ui-space-full);
	position: absolute;
	text-align: left;
	z-index: 10;

	& > button {
		display: block;
		text-align: left;
		white-space: nowrap;
		width: 100%;

		&:not(:last-child) {
			margin-bottom: var(--t-ui-space-half);
		}
	}

	&.-is-left {
		left: 0;
	}

	&.-is-right {
		right: 0;
	}

	&.-is-top {
		// `top: 0` aligns it at top edge of the root element, which would basically hide it
		// as `transform` is relative to the element height, we can move it over the top. magic.
		top: 0;
		transform: translateY(-100%);
	}

	&.-is-bottom {
		bottom: 0;
		transform: translateY(100%);
	}
}
</style>
