<template>
  <div id="app">
    <Header :title = "h_title"/>
      <div class="container">
        <h1>Latest Pictures</h1>
        <router-view/>
      </div>
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
      f_title: ":)",
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

.container {
  min-height: calc(100vh - 220px);
  margin: 0px 0px;
}

@media (min-width: 1200px) {
  .container {
    margin: 0px 100px;
  }
};
</style>
