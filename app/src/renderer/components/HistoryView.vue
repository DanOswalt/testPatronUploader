<template>
  <div>
    <header>
      <h1>Patron Uploader - History</h1>
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
    name: 'history'
  }
</script>

<style scoped>
  header {
    margin-top: 20px;
  }
</style>
