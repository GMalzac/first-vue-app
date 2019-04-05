<template>
    <transition name="fade">
      <div class="wrapper">
        <img :src="mainPicturePath" :alt="picture.alt_description" class="main-pic">
        <div class="info-grid">
          <div class="user-info-section">
            <div class="avatar-section">
              <img :src="picture.user.profile_image.large" :alt="picture.user.username" class="avatar-pic">
              <h5>{{picture.user.total_photos}} photos posted</h5>
            </div>
            <div class="user-detail">
              <h2>{{picture.user.username}}</h2>
              <h3 v-if="picture.user.location"> from {{picture.user.location}}</h3>
              <ul>
                <li><a v-if="twitterPath" v-bind:href="twitterPath"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"></font-awesome-icon></a></li>
                <li><a v-if="instagramPath" v-bind:href="instagramPath"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></font-awesome-icon></a></li>
                <li><a v-if="picture.user.portfolio_url" v-bind:href="picture.user.portfolio_url"><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'globe' }"/></font-awesome-icon></a></li>
              </ul>
            </div>
            <div class="user-bio">
              <h4>{{picture.user.bio}}</h4>
            </div>
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
      },
      mainPicturePath: function() {
        return `${this.picture.urls.raw}&fit=crop&w=1080&h=720&dpi=1`
      }

    }
  };
</script>

<style lang="css" scoped>
.container {
  margin: 150px 0px;
}

.wrapper {
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 70% 30%;
}

.user-info-section {
  margin-bottom: 40px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  padding: 40px;
/*  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr 2fr 3fr;*/
}

.picture-info-section {
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  padding: 40px;
}


h2 {
  margin-bottom: 0px;
}

h3 {
  margin-top: 0px;
}

h4 {
  margin-block-start: 0.83em;
  margin-bottom: 0px;
}

h5 {
  margin-top: 0px;
}

ul {
  margin: 0px auto;
  display: inline-block;
  padding: 0px;
}

a {
  margin-right: 20px;
  font-size: 30px;
  color: #35495E;
}

a:hover {
  color: lightgray;
}

li {
  display: inline;
}
img .main-pic {
/*  height: auto;*/
  width: 100%;
  margin: 20px 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.avatar-section {
  text-align: center;
}

.avatar-pic {
  height: 80px;
  border-radius: 50%;
  border: solid 1.5px white;
  box-shadow: 0 0 1px black;
}

</style>
