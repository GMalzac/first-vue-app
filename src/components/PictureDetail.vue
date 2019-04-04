<template>
  <div>
    <img :src="picture.urls.regular" :alt="picture.alt_description">
    <h1>By {{picture.user.username}}</h1>
    <h4>Posted on {{picture.created_at}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'PictureDetail',
    data() {
      return {
        picture: {}
      };
    },
    created: function() {
      this.fetchData();
    },

    methods: {
      fetchData: async function() {
        try {
          const res = await fetch(`https://api.unsplash.com/photos/${this.$route.params.id}?client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
          const picture = await res.json();
          this.picture = picture
        } catch(e) {
          console.log(e)
        }
      }
    },
  };
</script>

<style lang="css" scoped>
img {
  height: 50vh;
  margin-top: 20px;
}
</style>
