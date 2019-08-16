<template>
  <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.isTrue"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delitem">删除</button>
  </li>

</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name: 'TodoHeader',
    props: {
      todo: Object,
      index: Number,
    },
    data () {
      return {
        bgColor: 'white', // 默认背景颜色
        isShow: false // 标识按钮是否显示
      }
    },
    methods: {
      handleShow (isEnter) {
        if (isEnter) {
          this.bgColor = 'gray'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      delitem () {
        const { index, todo} = this
        if (window.confirm(`确定删除选项${todo.title}么`)) {
          // delTodo(index)
          // 发布消息
          PubSub.publish('delTodo', index)
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
