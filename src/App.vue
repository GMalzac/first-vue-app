<template>
  <div id="app">
    <Header :title = "h_title"/>
    <ul>
      <li v-for="item in items">
        {{item}}
      </li>
      <li v-for="value in profile">
        {{value}}
      </li>
      <li v-for="(value, key, index) in profile">
        {{index}}.{{key}}: {{value}}
      </li>
    </ul>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld
      v-bind:key="person.id"
      v-for="person in people"
      msg="Welcome to Your Vue.js App"
    />
    <h1>{{ hello }}</h1>
    <Footer :title = "f_title"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data() {
    return {
      hello: "Hello world!!!",
      h_title: "My Unsplash App",
      f_title: "My footer",
      items:
        ["Table", "Chair", "Lamp"],
      profile:
        {
          id: 1,
          name: "Riri",
          age: 32
        },
      people: [
        {
          id: 1,
          name: "Riri",
          age: 32
        },
        {
          id: 2,
          name: "Fifi",
          age: 32
        },
        {
          id: 3,
          name: "Loulou",
          age: 32
        }
      ]
    }
  },
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
