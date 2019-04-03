<template>
  <div id="app">
    <Header :title = "h_title"/>
    <router-view/>
    <Footer :title = "f_title"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data() {
    return {
      hello: "Hello world!",
      h_title: "My Unsplash App",
      f_title: "My footer",
      status: "ready",
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
