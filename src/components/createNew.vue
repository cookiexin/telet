<template>
  <div class="create-new">
    <div class="bt-createnew" @click="createNew">
      <img src="../assets/bt-create.png" alt="">
    </div>
    <!-- popup form -->
    <div class="pop-up-bg" v-show="ifPopUp" >
      <form class="pop-up">
      <div class="pop-up-item" v-for="(value,key,index) in elemKeysType">
        <label>{{key}}:</label>
        <input :id="key" :type="value" class="input-title" :value="newEle[key]" v-on:input="onInput(key, $event.target.value)">
      </div>
      <div class="bt-container">
        <button class="bt-submit" @click.prevent="submit">确定</button> 
        <button class="bt-cancel" @click.prevent="cancel">取消</button>                         
      </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'createNew',
  props: ['elemKeysType'],
  data () {
    return {
      ifPopUp: false
    }
  },
  computed: {
    newEle () {
      let obj = {}
      let arr = Object.keys(this.elemKeysType)
      console.log('obj', this.elemKeysType)
      console.log('arr', arr)
      arr.forEach(function (ele) {
        obj[ele] = ''
      })
      return obj
    }
  },
  methods: {
    onInput (key, val) {
      this.$set(this.newEle, key, val)
    },
    createNew () {
      this.ifPopUp = true           // pop up show
      // reset input
      for (let key in this.newEle) {
        this.newEle[key] = ''
      }
      // console.log('create')
    },
    submit () {
      for (let key in this.newEle) {
        // console.log('inputVal',this.newEle[key])
        if (!this.newEle[key] && key !== 'imgSrc') {
          document.getElementById(key).focus()
          return
        }
      }
      this.ifPopUp = false
      let newEle = JSON.parse(JSON.stringify(this.newEle))
      this.$emit('add-item', newEle)
    },
    cancel () {
      this.ifPopUp = false
    }
  }
}
</script>

<style scoped>
.bt-createnew {
  cursor: pointer;
}
.pop-up-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.pop-up {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 3rem 4rem 1rem 3rem; 
  transform: translate(-50%,-50%);
  background: white;
  /* border: 1px solid #b0ced8; */
  text-align: left;
  box-sizing: border-box;
}
.pop-up-item {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.pop-up label {
  margin-right: 5px;
}
.input-title {
  border: 1px solid gray;
}
.bt-container {
  text-align: right;
  overflow: hidden;
}
.bt-container button {
  padding: 8px 10px;
  color: white;
  border: none;
  /* border-style: none; */
}
.bt-cancel {
  background: #2196F3;  
}
.bt-submit {
  background: #4caf50;
}
</style>
