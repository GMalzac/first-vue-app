<template>
  <div>
    <header>
      <router-link to="/">
        <h1>{{title}}</h1>
      </router-link>
      <transition name = "fade">
        <h1 v-if="show">Animated</h1>
      </transition>
      <button @click="show = !show">Show/hide</button>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    reverseText: function() {
      return this.title.split('').reverse().join('')
    }
  }
}
</script>

<style lang="css" scoped>
  header {
    background-color: #111;
    color: white;
    padding: 20px;
  }
  h1 {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: scale(0);
  }

</style>
