<template>
  <div class="page-number">
    <ul>
      <li class="bt-pre bt" @click="prePage"><span></span></li>
      <li class="cur-page">{{curPage}}</li>
      <li>/</li>      
      <li class="total-pages">{{totalPage}}</li>
      <li class="bt-next bt" @click="nextPage"><span></span></li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'pageNumber',
  props: {
    curPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },
  methods: {
    prePage () {
      if (this.curPage > 1) {
        // console.log('previous page')
        this.$emit('pre-page')
      }
    },
    nextPage () {
      if (this.curPage < this.totalPage) {
        // console.log('next page')
        this.$emit('next-page')
      }
    }
  }
}
</script>

<style scoped>
.page-number ul {
  display: flex;
}
.page-number {
  position: absolute;
  margin-top: 0.5rem;
  right: 0;
}
.page-number ul li {
  margin-left: 5px;
}
.page-number .bt {
}
.page-number .bt-pre span {
  border-right: 6px solid gray;
}
.page-number .bt-next span{
  border-left: 6px solid gray;  
}
.page-number .bt span {
  display: inline-block;
  width: 0;
  height: 0;
  margin: 0 3px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  cursor: pointer;    
}
.page-number .bt-pre span:active {
  border-right-color: lightgray;
}
.page-number .bt-next span:active {
  border-left-color: lightgray;
}
</style>

