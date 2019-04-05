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
        const res = await fetch(`https://api.unsplash.com/photos/?per_page=40&order_by=latest&client_id=${process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY}`);
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

@media(max-width: 1024px) {
  ul  {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media(max-width: 1499px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width: 1899px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(min-width: 1900px) {
  ul {;
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>
