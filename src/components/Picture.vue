<template>
    <img :src="picture.urls.small" :alt="picture.alt_description">
</template>

<script>
  export default {
    props: ['picture']
  }
</script>

<style lang="css" scoped>
img {
  box-shadow: 0 0 5px black;
  margin: 5px;
}
</style>
