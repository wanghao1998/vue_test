<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="delItem">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      // 指定属性名和属性值的类型
      comment: Object,
      delcomment: Function,
      index: Number
    },
    methods: {
      delItem () {
        const {comment, delcomment, index} = this
        if (window.confirm(`确定删除${comment.name}吗？`)) {
          delcomment(index)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
