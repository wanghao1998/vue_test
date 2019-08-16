<template>
  <div class="container">
    <Search/>
    <Mains/>
  </div>
</template>

<script>
  import Search from './commponents/Search'
  import Mains from './commponents/Mains'
  export default {
    name: 'App',
    components: {
      Search,
      Mains
    }
  }
</script>

<style scoped>

</style>
