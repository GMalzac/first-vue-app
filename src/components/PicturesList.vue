<template>
  <div>
    {{picture.urls.raw}}
  </div>
</template>

<script>
export default {
  name: 'PicturesList',
  data() {
    return {
      picture: {}
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
        const picture = await res.json();
        this.picture = picture
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
