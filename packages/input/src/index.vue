<template>
	<div class="t-ui-input">
		<label :for="id" class="t-ui-input__label" data-test="label">
			{{ label }}
			<slot name="label-text" />
		</label>
		<p
			v-if="description && descriptionPosition === 'top'"
			:id="`${id}__desc`"
			class="t-ui-input__description"
			data-test="description-top"
		>
			{{ description }}
		</p>
		<component
			:is="isTextarea ? 'textarea' : 'input'"
			:id="id"
			:value="value"
			:aria-invalid="validation.$error.toString()"
			:aria-describedby="ariaDescribedby"
			v-bind="$attrs"
			class="t-ui-input__input"
			data-test="input"
			v-on="listeners"
			@input="updateValue"
		>
			{{ value }}
		</component>
		<p
			v-if="description && descriptionPosition === 'bottom'"
			:id="`${id}__desc`"
			class="t-ui-input__description"
			data-test="description-bottom"
		>
			{{ description }}
		</p>
		<div
			v-show="validation.$error"
			:id="`${id}__feedback`"
			class="t-ui-input__feedback"
		>
			<slot name="feedback" />
		</div>
	</div>
</template>

<script>
import uuid from 'uuid-browser/v4'

export default {
	name: 'TournantInput',
	inheritAttrs: false,
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		description: {
			type: String,
			default: ''
		},
		descriptionPosition: {
			type: String,
			default: 'bottom',
			validator: position => position === 'top' || position === 'bottom'
		},
		label: {
			type: String,
			required: true
		},
		validation: {
			type: Object,
			required: true
		},
		isTextarea: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			id: uuid()
		}
	},
	computed: {
		ariaDescribedby() {
			if (this.validation.$error && this.description) {
				return `${this.id}__feedback ${this.id}__desc`
			} else if (this.description) {
				return `${this.id}__desc`
			} else if (this.validation.$error) {
				return `${this.id}__feedback`
			}

			return null
		},
		listeners() {
			return {
				...this.$listeners,
				input: this.updateValue
			}
		}
	},
	methods: {
		updateValue(evt) {
			this.$emit('input', evt.target.value)
		}
	}
}
</script>

<style></style>
