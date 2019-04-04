<template>
    <router-link :to="picturePath"><img :src="thumbnailPath" :alt="picture.alt_description">
    </router-link>
</template>

<script>
  export default {
    props: ['picture'],
    computed: {
      picturePath: function() {
        return `/picture/${this.picture.id}`
      },
      thumbnailPath: function() {
        return `${this.picture.urls.raw}&fit=crop&w=400&h=200&dpi=1`
      }
    }
  }
</script>

<style lang="css" scoped>
img {
  margin: 5px;
  box-shadow: 0 0 5px black;
}

img:hover {
  transition:linear 0.2s;
  transform: scale(1.01);
  -webkit-filter: blur(5px) grayscale(60%); /* Safari 6.0 - 9.0 */
  filter: blur(1px) grayscale(60%);
}
</style>
