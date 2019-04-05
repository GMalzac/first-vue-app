<template>
    <transition name="fade">
      <div>
        <img :src="picture.urls.regular" :alt="picture.alt_description">
        <div class="info-grid">
          <div class="user-info-section">
            <div class="avatar-section">
              <img :src="picture.user.profile_image.large" :alt="picture.user.username" class="avatar-pic">
            </div>
            <div class="user-detail">
              <h2>{{picture.user.username}}</h2>
              <h3 v-if="picture.user.location"> from {{picture.user.location}}</h3>
              <ul>
                <li><a v-bind:href="twitterPath">Twitter</a></li>
                <li><a v-bind:href="instagramPath">Instagram</a></li>
              </ul>
            </div>
            <h2>Bio: {{picture.user.bio}}</h2>
            <h3>Portfolio: {{picture.user.portfolio_url}}</h3>
            <h4>{{picture.user.total_photos}} photos posted</h4>
          </div>
          <div class="picture-info-section">
            <h4>Posted on {{picture.created_at}}</h4>
            <h2>{{picture.views}} views</h2>
            <h2>{{picture.downloads}} downloads</h2>
            <ul>
              <li v-for="tag in picture.tags">#{{tag.title}} </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
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
      twitterPath: function() {
        return `https://www.twitter.com/${this.picture.user.twitter_username}`
      },
      instagramPath: function() {
        return `https://www.instagram.com/${this.picture.user.instagram_username}`
      }
    }
  };
</script>

<style lang="css" scoped>

.container {
  margin: 150px 0px;
}

a {
  display: block;
}
li {
  display: inline;
}
img {
  height: 50vh;
  margin: 20px 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.avatar-pic {
  height: 80px;
  border-radius: 50%;
  border: solid 1.5px white;
  box-shadow: 0 0 1px black;
}

.info-grid {
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

.user-info-section {
  margin: 20px;
  text-align: left;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr 4fr;
}
</style>
