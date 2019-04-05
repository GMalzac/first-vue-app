<template>
    <transition name="fade">
      <div>
        <img :src="picture.urls.regular" :alt="picture.alt_description">
        <div class="user-info-section">
          <h1>Photo by {{picture.user.username}}</h1>
          <a v-bind:href="twitterPath">Twitter</a>
<!--           <h2>Twitter {{twitterPath}}</h2> -->

        </div>
        <div class="picture-info-section">

        </div>
        <h4>Posted on {{picture.created_at}}</h4>
        <h2>{{picture.views}} views</h2>
        <h2>{{picture.downloads}} downloads</h2>
        <ul>
          <li v-for="tag in picture.tags">#{{tag.title}} </li>
        </ul>
      </div>
    </transition>
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
    computed: {
      twitterPath: function() {
        return `https://www.twitter.com/${this.picture.user.twitter_username}`
      }
    }
  };
</script>

<style lang="css" scoped>
li {
  display: inline;
}
img {
  height: 50vh;
  margin-top: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
