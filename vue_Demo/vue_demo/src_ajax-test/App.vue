<template>
  <div v-if="!repoUrl">Loading</div>
  <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      //发送ajax请求获取数据
      const url = `https://api.github.com/search/repositories?q=vue&sort=stars`
/*      this.$http.get(url).then(
        response => {
          // 成功了
          const result = response.data
          // 得到最受欢迎的repo
          const mostRepo = result.items[0]
          this.repoName = mostRepo.name
          this.repoUrl = mostRepo.html_url
        },
        reponse => {
          alert('请求失败')
        }
      )*/
      // 使用axios发送ajax请求
      axios.get(url).then(
        response => {
          // 成功了
          const result = response.data
          // 得到最受欢迎的repo
          const mostRepo = result.items[0]
          this.repoName = mostRepo.name
          this.repoUrl = mostRepo.html_url
        }).catch(error => {
        alert('请求失败')
      })
    }
  }
</script>

<style scoped>

</style>
