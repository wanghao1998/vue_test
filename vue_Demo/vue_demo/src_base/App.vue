<template>
  <div id="tes">
    <img class="log" src="./assets/logo.png" alt="logo">
    <HelloWorld/>
  </div>
</template>

<script>
// 引入组件
import HelloWorld from './commponents/HelloWorld'
export default {
  name: 'App',
  // 映射组件标签
  components: {HelloWorld}
}
</script>

<style scoped>
.log{
  width: 200px;
  height: 200px;
  margin: 50px auto;
}
#tes{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>
