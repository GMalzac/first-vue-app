<template>
  <ul>
    <li v-for="picture in pictures">
      {{picture.urls.raw}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PicturesList',
  data() {
    return {
      pictures: []
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
        const pictures = await res.json();
        this.pictures = pictures
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
