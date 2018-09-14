<template>
  <div
    :class="cbClasses.base"
    role="combobox"
    aria-owns="vCbResultList"
    aria-haspopup="listbox"
    :aria-expanded="showsList.toString()"
  >
    <input
      v-model.trim="inputValue"
      @input="onChange"
      @focus="hasFocus = true"
      @keyup.down="onKeyDown"
      @keyup.up="onKeyUp"
      @keyup.enter="onEnter"
      @keyup.esc="onEscape"
      ref="input"
      :class="cbClasses.input"
      type="text"
      name="cbInput"
      role="searchbox"
      aria-autocomplete="list"
      :aria-label="inputLabel"
      aria-controls="vCbResultList"
      :aria-activedescendant="getId(arrowPosition)"
      aria-multiline="false"
    >
    <transition name="fade-up">
      <a11y-combobox-list
        v-show="showsList"
        role="listbox"
        :items="items"
        :activeItem="arrowPosition"
        @resultClick="onResultClick"
        :aria-label="inputLabel"
      />
    </transition>
  </div>
</template>

<script>
import A11yComboboxList from './A11yComboboxList.vue'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    inputLabel: {
      type: String,
      required: true
    },
    isStyled: {
      type: Boolean,
      default: true
    }
  },
  components: {
    A11yComboboxList
  },
  data () {
    return {
      inputValue: '',
      hasFocus: false,
      arrowPosition: -1
    }
  },
  computed: {
    showsList () {
      return Boolean(this.inputValue && this.hasFocus)
    },
    cbClasses () {
      return this.isStyled
        ? {
          base: 'v-a11y-combobox',
          input: 'v-a11y-combobox__input'
        }
        : ''
    }
  },
  methods: {
    onChange () {
      this.$emit('input', this.inputValue)
      this.hasFocus = true
      this.arrowPosition = -1
    },
    onKeyDown () {
      if (this.items.length) {
        this.items.length - 1 > this.arrowPosition
          ? this.arrowPosition++
          : this.arrowPosition = 0
      }
    },
    onKeyUp () {
      if (this.items.length) {
        this.arrowPosition % this.items.length === 0
          ? this.arrowPosition = this.items.length - 1
          : this.arrowPosition = this.arrowPosition - 1
      }
    },
    onEnter () {
      if (this.arrowPosition > -1) {
        this.$emit('foundResult', this.items[this.arrowPosition].id)
        this.hasFocus = false
        this.arrowPosition = -1
      }
    },
    onEscape () {
      this.inputValue = ''
    },
    onResultClick (id) {
      this.$emit('foundResult', this.items[id].id)
      this.hasFocus = false
      this.arrowPosition = -1
    },
    handleClick (evt) {
      if (!this.$el.contains(evt.target)) {
        this.hasFocus = false
      }
    },
    getId (id) {
      return id < 0 ? '' : `vCbItem_${id}`
    }
  },
  mounted () {
    document.addEventListener('click', this.handleClick, false)
  },
  destroyed () {
    document.removeEventListener('click', this.handleClick, false)
  },
  provide () {
    return {
      isStyled: this.isStyled,
      getId: this.getId
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Styles/a11y-combobox.scss';

.fade-up-enter-active,
.fade-up-move {
  transition: all 0.3s ease-out;
}
.fade-up-move {
  transition: all 0.3s ease-out;
}
.fade-up-enter {
  opacity: 0;
  transform: translateY(1.5rem);
}
.fade-up-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateY(0.5rem);
}
.fade-up-leave-active {
  transition: all 0.1333s ease-in;
}

.v-a11y-combobox {
  @include v-a11y-combobox;
}

.v-a11y-combobox__input {
  @include v-a11y-combobox__input;
}
</style>
