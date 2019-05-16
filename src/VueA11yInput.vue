<template>
  <div class="v-a11y-input">
    <label :for="inputId" class="v-a11y-input__label">
      {{ label }}
      <slot name="required-text" />
    </label>
    <input
      :id="inputId"
      :value="value"
      :type="inputType"
      :required="required"
      :aria-invalid="validation.$error.toString()"
      :aria-describedby="validation.$error ? feedbackId : null"
      v-bind="$attrs"
      class="v-a11y-input__input"
      @input="updateValue"
    />
    <div
      v-show="validation.$error"
      :id="feedbackId"
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
    inputType: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    validation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      feedbackId: uuid(this.label, 'VueA11yFeedback'),
      inputId: uuid(this.label, 'VA11yInput')
    }
  },
  computed: {
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
