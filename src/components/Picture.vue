<template>
    <router-link :to="picturePath">
      <div
        class="card"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <h2 v-if="hover">by {{picture.user.username}}</h2>
        <img :src="userProfilePicPath">
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
      },
      userProfilePicPath: function() {
        return this.picture.user.profile_image.large
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
  position: relative;
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

img {
  height: 20%;
  border-radius: 50%;
  border: solid 1.5px white;
  box-shadow: 0 0 1px black;
  position: absolute;
  right: 8px;
  bottom: 8px;
}
</style>
