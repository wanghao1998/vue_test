<template>
  <div>
    <h1>home</h1>
    <router-link to="/home/News" >News</router-link>
    <router-link to="/home/Mesg" >Message</router-link>
    <div>
      <router-view>

      </router-view>
    </div>
  </div>



</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
