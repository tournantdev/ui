<template>
  <div
    role="combobox"
    aria-owns="vCbResultList"
    aria-haspopup="listbox"
    :aria-expanded="showsList"
  >
    <input
      v-model="inputValue"
      type="text"
      name="cbInput"
      role="searchbox"
      aria-autocomplete="list"
      aria-label="Input search term"
      aria-controls="vCbResultList"
      aria-activedescendant="@TODO"
      aria-multiline="false"
    >
    <a11y-combobox-list
      v-show="showsList"
      role="listbox"
    />
  </div>
</template>

<script>
import A11yComboboxList from './A11yComboxList.vue'

export default {
  components: {
    A11yComboboxList
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    showsList () {
      return this.inputValue
    }
  }
}
</script>
