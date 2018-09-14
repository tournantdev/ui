<template>
  <div id="app">
    <header class="example-header">
      <img alt="Vue logo" src="./assets/logo.png" class="example-header__logo">
      <h1 class="main-headline">Vue a11y Combobox</h1>
    </header>
    <main>
      <a11y-combobox
        :items="filteredPosts"
        @input="filterItems"
        @foundResult="showResult"
        inputLabel="Search for posts"
      />
      <transition name="fade-up">
        <article
          v-if="activePost"
          :key="activePost.id"
          class="active-post"
        >
          <h2>{{ activePost.title.toUpperCase() }}</h2>
          <p>{{ activePost.body }}</p>
        </article>
      </transition>
    </main>
  </div>
</template>

<script>
import A11yCombobox from './components/combobox/A11yCombobox'

export default {
  name: 'app',
  components: {
    A11yCombobox
  },
  data () {
    return {
      posts: [],
      filteredPosts: [],
      activePost: null
    }
  },
  methods: {
    filterItems (value) {
      this.filteredPosts = this.posts.reduce((acc, item) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
          ? acc.concat(Object.assign({}, { id: item.id, title: item.title }))
          : acc
      }, [])
    },
    showResult (id) {
      this.activePost = this.posts.find((post) => post.id === id)
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((json) => {
        this.posts = json
      })
  }
}
</script>

<style lang="scss">

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  min-height: 100vh;
  padding: 4vmin 2vmin 2vmin;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.example-header {
  align-items: center;
  display: flex;
  margin-bottom: 6vmin;
}

.example-header__logo {
  margin-right: .5rem;
  max-width: 3rem;
}

.active-post {
  margin: 2vmin auto;
  max-width: 60ch;
}

</style>
