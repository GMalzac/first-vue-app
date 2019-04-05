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
    height: 200px;
    margin-top: 150px;
  }
  h2 {
    line-height: 150px;
    color: white;
  }
</style>

