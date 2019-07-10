<template>
	<div v-clickaway="close" class="t-ui-dropdown-menu">
		<button
			ref="toggle"
			:aria-label="'Dropdown Menu'"
			:aria-expanded="isVisible.toString()"
			aria-haspopup="true"
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
				class="t-ui-dropdown-menu__dropdown"
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
export default {
	name: 'TournantDropdown',
	components: {},
	props: {
		yPosition: {
			type: String,
			default: 'bottom'
		},
		xPosition: {
			type: String,
			default: 'left'
		}
	},
	data() {
		return {
			isVisible: false,
			buttons: [],
			index: 0
		}
	},
	beforeDestroy() {
		if (this.buttons && this.buttons.length) {
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
		onMenuButtonClick() {
			this.close()
		},
		async open() {
			this.isVisible = true

			await this.$nextTick()

			if (this.$refs.menu) {
				this.buttons = Array.from(
					this.$refs.menu.querySelectorAll(':not([disabled])')
				)

				this.buttons.forEach(button => {
					button.addEventListener('click', this.onMenuButtonClick)
				})

				this.buttons[0].focus()
			}
		},
		close() {
			// Method will be called from the `clickaway` directive on every component instance
			// Limit work and ensure correct handling of focus by having an additional check for visibility
			if (this.isVisible) {
				this.isVisible = false
				this.buttons = undefined
				this.index = 0
				this.$refs.toggle.focus()
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
			console.log(e)
			if (this.index === 0) {
				this.index = this.buttons.length - 1
			} else {
				this.index--
			}
			this.buttons[this.index].focus()
		}
	}
}
</script>

<style lang="scss">
.t-ui-dropdown-menu {
	display: block;
	z-index: 50;

	--t-ui-space-half: 0.5rem;
	--t-ui-space-full: 1rem;
}

.t-ui-dropdown-menu__dropdown {
	background-color: white;
	border-radius: 0.25rem;
	box-shadow: 2px 4px 6px rgba(142, 142, 142, 0.4);
	padding: var(--t-ui-space-half) var(--t-ui-space-full);
	position: absolute;
	right: 0;
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
