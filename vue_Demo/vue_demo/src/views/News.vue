<template>
    <div>
      <ul>
        <li v-for="(news, index) in newss" :key="index">{{news}}</li>
      </ul>
    </div>

</template>

<script>
  export default {
    name: "News",
    data () {
      return {
        newss: ['newss01', 'newss02', 'newss06']
      }
    }
  }
</script>

<style scoped>

</style>
