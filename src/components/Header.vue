<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style lang="css" scoped>
  header {
    background-color: #111;
    color: white;
    padding: 20px;
  }
  h1 {
    margin: 0;
  }
</style>
