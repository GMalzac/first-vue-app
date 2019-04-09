<template>
  <ul>
    <li v-for="picture in pictures">
      <Picture :picture="picture"/>
    </li>
  </ul>
</template>

<script>
import Picture from './Picture.vue'

export default {
  name: 'PicturesList',

  data() {
    return {
      pictures: []
    };
  },
  created: function() {
    if (this.$route.params.username) {
      this.fetchUserData()
    } else {
      this.fetchData();
    }
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(`https://api.unsplash.com/photos/?per_page=40&order_by=latest&client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
        const pictures = await res.json();
        this.pictures = pictures
      } catch(e) {
        console.log(e)
      }
    },
    fetchUserData: async function() {
      try {
        const res = await fetch(`https://api.unsplash.com/users/${this.$route.params.username}/photos?per_page=100&order_by=latest&client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
        const pictures = await res.json();
        this.pictures = pictures
      } catch(e) {
        console.log(e)
      }
    }
  },
  components: {
    Picture
  }
};
</script>

<style lang="css" scoped>
li {
  text-align: center;
  margin: auto;
}

ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap:  0.5rem;
}

@media(min-width: 0px) {
  ul {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media(min-width: 1024px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(min-width: 1499px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media(min-width: 1800px) {
  ul {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>
