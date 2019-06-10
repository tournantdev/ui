<template>
  <div class="v-a11y-input">
    <label :for="id" class="v-a11y-input__label">
      {{ label }}
      <slot name="required-text" />
    </label>
    <input
      :id="id"
      :value="value"
      :aria-invalid="validation.$error.toString()"
      :aria-describedby="ariaDescribedby"
      v-bind="$attrs"
      class="v-a11y-input__input"
      @input="updateValue"
    />
    <p v-if="description" :id="`${id}__desc`" class="v-a11y-input__description">
      {{ description }}
    </p>
    <div
      v-show="validation.$error"
      :id="`${id}__feedback`"
      class="v-a11y-input__feedback"
    >
      <slot name="feedback" />
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v4'

export default {
  name: 'VueA11yInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    validation: {
      type: Object,
      required: true
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
