<template>
    <div>
      <ul>
        <li v-for="(message, index) in messages" :key="message.id">
          <a href="">{{message.title}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "Message",
    data () {
      return {
        messages: []
      }
    },
    mounted() {
      // 模拟ajax获取数据
       setTimeout(() => {
         const mess = [
           {title: '我爱你', id: 1},
           {title: '我不爱你', id: 2},
           {title: '我好爱你', id: 3}
         ]
         this.messages = mess
       },2000)
    }
  }
</script>

<style scoped>

</style>
