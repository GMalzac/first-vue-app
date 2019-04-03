<template>
  <div>
    <footer>
      <h2>{{title}}</h2>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: String
  }
}
</script>

<style lang="css" scoped>
  footer {
    background-color: #35495E;
    margin: 0;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  h2 {
    color: white;
  }
</style>

