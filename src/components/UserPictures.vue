<template>
  <div>
    <h1>{{userPictures.length}} pictures by {{userPictures[0].user.username}}</h1>
    <PicturesList :pictures="userPictures"></PicturesList>
  </div>
</template>

<script>
import PicturesList from './PicturesList.vue'

export default {
  name: 'UserPictures',
  data () {
    return {
      userPictures: []
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(`https://api.unsplash.com/users/${this.$route.params.username}/photos?per_page=100&order_by=latest&client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
        const userPictures = await res.json();
        this.userPictures = userPictures
      } catch(e) {
        console.log(e)
      }
    }
  },
  components: {
    PicturesList
  }
}
</script>

<style lang="css" scoped>
</style>
