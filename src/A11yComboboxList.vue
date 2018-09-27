<template>
  <transition-group
    id="vCbResultList"
    :class="listClasses.listClass"
    name="list"
    mode="out-in"
    tag="ul"
    tabindex="0"
  >
    <li
      v-if="!items.length"
      key="vCbNoResults"
    >
      <span>Sorry, but no results could be found …</span>
    </li>
    <li
      v-for="(item, index) in items"
      v-else
      :key="index"
      :id="getId(index)"
      :class="listClasses.itemClass"
      :aria-selected="(activeItem === index).toString()"
      role="option"
      @click="$emit('resultClick', index)"
    >
      <span>{{ item.title }}</span>
    </li>
  </transition-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    activeItem: {
      type: Number,
      default: -1
    }
  },
  computed: {
    listClasses () {
      return this.isStyled
        ? {
          listClass: 'v-a11y-combobox__list',
          itemClass: 'v-a11y-combobox__list-item'
        }
        : ''
    }
  },
  inject: [
    'isStyled',
    'getId'
  ]
}
</script>

<style lang="scss">
@import 'Styles/a11y-combobox-list.scss';

.list-enter-active, .list-leave-active, .list-move {
  transition: all .2s;
}

.list-enter {
  transform: translateY(30px);
}

.list-enter,
.list-leave-to  {
  opacity: 0;
}

.list-leave-to {
  position: absolute;
}

.v-a11y-combobox__list {
  @include v-a11y-combobox__list;
}

.v-a11y-combobox__list-item {
  @include v-a11y-combobox__list-item;
}

</style>
