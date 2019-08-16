<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
      name: 'TodoHeader',
      props: {
        todos: Array,
        deleteCompleteTodos: Function,
        selectAllTodos: Function
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
      }
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
