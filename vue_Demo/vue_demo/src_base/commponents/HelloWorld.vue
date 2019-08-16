<template>
  <div>
    <p class="msgs">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello vue.jss'
    }
  }
}
</script>

<style scoped>
.msgs{
  color: red;
  font-size: 40px;
}
</style>
