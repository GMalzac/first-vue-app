<template>
  <div id="app" v-if="status === 'ready'">
    <Header :title = "h_title"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <PicturesList/>
    <Footer :title = "f_title"/>
  </div>
  <div v-else-if="status === 'loading'">
    Loading
  </div>
  <div v-else>
    Error
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PicturesList from './components/PicturesList.vue'
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
    PicturesList,
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
