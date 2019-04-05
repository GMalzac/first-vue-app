<template>
  <h1>Entering UserPictures!!!</h1>
</template>

<script>
export default {

  name: 'UserPictures',

  data () {
    return {

    }
  }
}

////////////////

export default {
  name: 'PictureDetail',
  data() {
    return {
      picture: {urls:{regular:""}}
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
  computed: {
    styles() {
      return {
        background: `url(${this.picture.urls.raw}&fit=crop&w=1080&h=720&dpi=1) no-repeat`
      }
    },
  },
  components: {
    UserDetail
  }
};


</script>

<style lang="css" scoped>
</style>
