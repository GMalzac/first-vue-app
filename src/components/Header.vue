<template>
  <div>
    <header>
      <router-link to="/">
        <h1>{{title}}</h1>
      </router-link>
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
    height: 70px;
    background-color: #111;
    color: white;
    padding: 20px;
    width: 100%;
    margin-bottom: 50px;
  }
  h1 {
    margin: 0;
    line-height: 70px;
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>
