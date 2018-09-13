<template>
  <ul id="vCbResultList">
    <li
      v-for="(item, index) in items"
      :key="index"
      :id="`vCbItem-${index}`"
      role="option"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
