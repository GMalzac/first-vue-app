<template>
    <router-link :to="picturePath">
      <div
        class="card"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
<!--         <img
          :src="thumbnailPath" :alt="picture.alt_description"> -->
        <h2 v-if="hover">by {{picture.user.username}}</h2>
      </div>
    </router-link>
</template>

<script>
  export default {
    props: ['picture'],
    data() {
      return {
        hover: false,
      }
    },
    computed: {
      picturePath: function() {
        return `/picture/${this.picture.id}`
      },
      styles() {
        return {
          background: `url(${this.picture.urls.raw}&fit=crop&w=400&h=200&dpi=1) no-repeat`
        }
      },
      thumbnailPath: function() {
        return `${this.picture.urls.raw}&fit=crop&w=400&h=200&dpi=1`
      }
    }
  }
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}

.card {
  vertical-align: center;
  width: 400px;
  height: 200px;
  margin: 5px;
  box-shadow: 0 0 5px black;
}

.card:hover {
  transition:linear 0.2s;
  transform: scale(1.01);
  -webkit-filter: blur(0.5px) grayscale(90%);
  filter: blur(0.5px) grayscale(90%);
}

h2 {
  line-height: 200px;
  margin: 0px;
  padding: 0px;
  color: white;
  text-decoration: none;
}

h2:hover {
  filter: none !important;
}
</style>
