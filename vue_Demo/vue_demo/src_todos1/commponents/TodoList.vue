<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :todo="todo" :key="index" :index="index" :delTodo="delTodo"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
    export default {
      name: 'TodoHeader',
      props: {
        todos: Array,
        delTodo: Function
      },
      components: {TodoItem}
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
