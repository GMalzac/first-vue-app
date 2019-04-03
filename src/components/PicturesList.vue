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
  },
  components: {
    Picture
  }
};
</script>

<style lang="css" scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
