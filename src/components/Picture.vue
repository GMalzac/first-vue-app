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
  box-shadow: 0 0 5px black;
  margin: 5px;
}
</style>
