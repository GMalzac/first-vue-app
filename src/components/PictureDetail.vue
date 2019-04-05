<template>
    <transition name="fade">
      <div class="wrapper">
        <div
          class="image-wrapper"
          :style="styles">
        </div>

        <div class="info-grid">
          <UserDetail :picture="picture"></UserDetail>
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
  import UserDetail from './UserDetail.vue'

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
.container {
  margin: 150px 0px;
}

.wrapper {
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
}

@media(max-width: 1800px) {
  .wrapper {
    display: grid;
    grid-row-gap: 10%;
    grid-template-columns: 60% 30%;
  }
}

.image-wrapper {
  position:relative;
  background-size: cover;
  background-position: center;
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
</style>
