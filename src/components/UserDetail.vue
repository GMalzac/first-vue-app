<template>
  <div class="user-info-section">
    <div class="avatar-section">
      <img :src="picture.user.profile_image.large" :alt="picture.user.username" class="avatar-pic">
      <router-link :to="userPath">
        <h5>{{picture.user.total_photos}} photos posted</h5>
      </router-link>
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
</template>

<script>

export default {
  name: 'UserDetail',
  props: ['picture'],
  data () {
    return {
      UserDetail: {}
    }
  },
  computed: {
    userPath: function() {
      return `/user/${this.picture.user.id}`
    },
    twitterPath: function() {
      return `https://www.twitter.com/${this.picture.user.twitter_username}`
    },
    instagramPath: function() {
      return `https://www.instagram.com/${this.picture.user.instagram_username}`
    },
  }
}
</script>

<style lang="css" scoped>

.user-info-section {
  margin-bottom: 40px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  padding: 40px;
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
  margin-op: 30px;
  display: inline-block;
  padding: 0px;
  justify-content: space-between;
}

a {
  margin: 0px 10px 0px 10px;
  font-size: 30px;
  color: #35495E;
}

a:hover {
  color: lightgray;
}

li {
  display: inline;
}

</style>
