<template>
	<div class="t-ui-dropdown">
		<button
			ref="toggle"
			:aria-label="'Dropdown Menu'"
			:aria-expanded="isVisible.toString()"
			aria-haspopup="true"
			class="t-ui-dropdown__toggle"
			@click="onClick"
			@keyup.down="open"
			@keyup.up="close"
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
				@keyup.down="onDownArrowPress"
				@keyup.up="onUpArrowPress"
				@keyup.esc="close"
			>
				<slot name="buttons" />
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
		}
	},
	data() {
		return {
			isVisible: false,
			buttons: [],
			index: 0
		}
	},
	mounted() {
		const firstDiv = document.querySelector('div')

		if (!firstDiv.onclick) {
			this.setUpCatchEvent()
		}

		document.addEventListener('keyup', this.handleGlobalKeyup)
		document.documentElement.addEventListener('click', this.handleGlobalClick)
	},
	beforeDestroy() {
		document.removeEventListener('keyup', this.handleGlobalKeyup)
		document.documentElement.removeEventListener(
			'click',
			this.handleGlobalClick
		)

		if (this.buttons.length) {
			this.buttons.forEach(button => {
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
		handleGlobalKeyup(evt) {
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
		async open() {
			this.isVisible = true

			await this.$nextTick()

			this.buttons = Array.from(
				this.$refs.menu.querySelectorAll('[role=menuitem]:not([disabled])')
			)

			this.buttons.forEach(button => {
				button.addEventListener('click', this.onMenuButtonClick)
			})

			if (this.buttons) this.buttons[this.index].focus()
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
		onDownArrowPress(e) {
			e.preventDefault()

			if (this.index < this.buttons.length - 1) {
				this.index++
			} else {
				this.index = 0
			}

			this.buttons[this.index].focus()
		},
		onUpArrowPress(e) {
			e.preventDefault()

			if (this.index === 0) {
				this.index = this.buttons.length - 1
			} else {
				this.index--
			}

			this.buttons[this.index].focus()
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
		}
	}
}
</script>

<style lang="scss">
	display: inline;
.t-ui-dropdown {
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
	z-index: 100;

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
