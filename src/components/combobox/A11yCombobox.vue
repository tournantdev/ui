<template>
  <div
    :class="cbClasses.base"
    :aria-expanded="showsList.toString()"
    role="combobox"
    aria-owns="vCbResultList"
    aria-haspopup="listbox"
  >
    <input
      ref="input"
      v-model.trim="inputValue"
      :class="cbClasses.input"
      :aria-label="inputLabel"
      :aria-activedescendant="getId(arrowPosition)"
      type="text"
      name="cbInput"
      role="searchbox"
      aria-autocomplete="list"
      aria-controls="vCbResultList"
      aria-multiline="false"
      @input="onChange"
      @focus="hasFocus = true"
      @keyup.down="onKeyDown"
      @keyup.up="onKeyUp"
      @keyup.enter="onEnter"
      @keyup.esc="onEscape"
    >
    <transition name="fade-up">
      <a11y-combobox-list
        v-show="showsList"
        :items="items"
        :active-item="arrowPosition"
        :aria-label="inputLabel"
        role="listbox"
        @resultClick="onResultClick"
      />
    </transition>
  </div>
</template>

<script>
import A11yComboboxList from './A11yComboboxList.vue'

export default {
  components: {
    A11yComboboxList
  },
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
  mounted () {
    document.addEventListener('click', this.handleClick)
  },
  destroyed () {
    document.removeEventListener('click', this.handleClick)
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
  provide () {
    return {
      isStyled: this.isStyled,
      getId: this.getId
    }
  }
}
</script>

<style lang="scss" scoped>
@import "Styles/a11y-combobox.scss";

.fade-up-enter-active,
.fade-up-move {
    transition: all .3s ease-out;
}
.fade-up-move {
    transition: all .3s ease-out;
}
.fade-up-enter {
    opacity: 0;
    transform: translateY(1.5rem);
}
.fade-up-leave-to {
    opacity: 0;
    position: absolute;
    transform: translateY(.5rem);
}
.fade-up-leave-active {
    transition: all .1333s ease-in;
}

.v-a11y-combobox {
  @include v-a11y-combobox;
}

.v-a11y-combobox__input {
  @include v-a11y-combobox__input;
}

</style>
