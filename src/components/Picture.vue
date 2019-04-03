<template>
    <router-link :to="picturePath"><img :src="picture.urls.small" :alt="picture.alt_description">
    </router-link>
</template>

<script>
  export default {
    props: ['picture'],
    computed: {
      picturePath: function() {
        return `/picture/${this.picture.id}`
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
