<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING.....</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    name: 'Mains',
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted () {
      // 是否发送ajax请求：不是，点击search之后
      // 订阅搜搜消息
      PubSub.subscribe('search', (msg, searchName) => {
        // 需要发ajax请求搜索
        // 更新状态 （请求中）
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then(
          response => {
            // 成功了
            const result = response.data
            // 得到最受欢迎的repo
            const users = result.items.map(item => ({
              url: item.html_url,
              avatar_url: item.avatar_url,
              name: item.login
            }))
            // 成功，更新状态（成功）
            this.loading = false
            this.users = users
          }).catch(error => {
            this.errorMsg = error
        })
      })
    }
  }
</script>

<style scoped>

</style>
