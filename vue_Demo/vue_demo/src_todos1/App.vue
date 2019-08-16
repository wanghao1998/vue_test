<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todos="todos" :delTodo="delTodo"/>
    <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './commponents/TodoHeader'
import TodoList from './commponents/TodoList'
import TodoFooter from './commponents/TodoFooter'

export default {
  name: 'App',
  data () {
   return {
     // 从LocalStorage 读取 todos
     todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]') // 若为空改为空数组
   }
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
      handler: function (newValue) {
        // 将todos最新的值保存到localstorage
        window.localStorage.setItem('todos_key', JSON.stringify(newValue))
      }
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
