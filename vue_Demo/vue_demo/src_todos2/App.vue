<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--    <TodoHeader @addTodo="addTodo"/>给TodoHeader绑定addTodo事件监听-->
    <TodoHeader ref="Header"/>
    <TodoList :todos="todos" />
    <todo-footer>
      <input type="checkbox" slot="AllCheck" v-model="isAllCheck"/>
      <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
      <button class="btn btn-danger" slot="delects" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
    </todo-footer>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'

  import TodoHeader from './commponents/TodoHeader'
  import TodoList from './commponents/TodoList'
  import TodoFooter from './commponents/TodoFooter'
  import storageUtil from './util/StorageUtil'

export default {
  name: 'App',
  data () {
   return {
     // 从LocalStorage 读取 todos
     todos: storageUtil.readTodos() // 若为空改为空数组
   }
  },
  computed: {
    // 在这里实现计算属性，对需要的数据进行处理
    completeSize () {
      // reduce方法计算数组数值，指定响应函数方法，这里初始值为0，istrue为true为1，否则为0.相加得到所有true的个数
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.isTrue ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (value) { // value是当前checkbox的最新值
        this.selectAllTodos(value)
      }
    }
  },
  mounted () {
    // 执行异步代码
    // 给<TodoHeader/>绑定addTodo事件监听
    this.$refs.Header.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('delTodo', (msg, data) => {
      this.delTodo(index)
    })
  },
  methods: {
    // 增加todo
    addTodo (title) {
      const todo = {
        title: title,
        isTrue: false
      }
      this.todos.unshift(todo)
    },
    // 删除选中单个todo
    delTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除选中todo
    deleteCompleteTodos () {
      // 过滤函数，保留为false的对象
      this.todos = this.todos.filter(todo => !todo.isTrue)
    },
    // 全选或全部选todo
    selectAllTodos (isT) {
      this.todos.forEach(todo => (todo.isTrue = isT))
    }
  },
  watch: { // 监视
    todos: {
      deep: true, // 深度监视
   /*   handler: function (newValue) {
        // 将todos最新的值保存到localstorage
        storageUtil.saveTodos(newValue)
      }*/
      handler: storageUtil.saveTodos
    }
  },
  components: {TodoHeader, TodoList, TodoFooter}
}
</script>

<style scoped>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  /*header*/

</style>
