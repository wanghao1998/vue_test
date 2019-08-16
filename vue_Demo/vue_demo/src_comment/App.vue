<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <Add :addcomment="addcomment"/>
    <List :comments="comments" :delcomment="delcomment"/>
    </div>
  </div>
</template>

<script>
import Add from './commponents/Add'
import List from './commponents/List'
export default {
  name: 'App',
  data () {
   return {
     comments: [// 数据在那个组件，更新数据的方法就应该定义在那个组件
       {
         name: 'bob',
         content: 'vue真好用'
       },
       {
         name: 'kobe',
         content: 'vue真简单'
       },
       {
         name: '刘强东',
         content: 'vue真快'
       }
     ]
   }
  },
  methods: {
    addcomment (comment) {
      this.comments.unshift(comment)
    },
    delcomment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {List, Add}
}
</script>

<style scoped>

</style>
