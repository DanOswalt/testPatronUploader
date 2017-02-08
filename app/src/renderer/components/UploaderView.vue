<template>
  <div>
    <header>
      <h1>Patron Uploader</h1>
    </header>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    components: {
      Navigation
    },
    name: 'uploader'
  }
</script>

<style scoped>
  header {
    margin-top: 20px;
  }
</style>
