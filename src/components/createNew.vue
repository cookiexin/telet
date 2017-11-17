<template>
  <div class="create-new">
    <div class="bt-createnew" @click="createNew">
      <img src="../assets/bt-create.png" alt="">
    </div>
    <!-- popup form -->
    <div class="pop-up-bg" v-show="ifPopUp" >
      <form class="pop-up">
      <div class="pop-up-item">
        <label for="title">Title:</label>
        <input type="text" id="title" class="input-title" v-model="newListEle.title">
      </div>
      <div class="pop-up-item">
        <label for="picture">Picutre:</label>
        <input type="file" id="picture">
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
  data () {
    return {
      ifPopUp: false,
      newListEle: {
        title: '',
        imgSrc: require('../assets/lemon.jpg')
      }
    }
  },
  methods: {
    createNew () {
      this.ifPopUp = true           // pop up show
      this.newListEle.title = ''              
      console.log('create')
    },
    submit () {
      // if input title is null then focus the input
      if (!this.newListEle.title) {
        document.getElementById('title').focus()
      }
      else{
        this.ifPopUp = false
        this.$store.commit('addListItem', this.newListEle)
        this.$store.commit('updateShowList');                          
        console.log('submit')
      } 
    },
    cancel () {
        this.ifPopUp = false      
    }
  }
}
</script>

<style scope>
.bt-createnew {
  /* margin-right: 10%; */
  /* margin-left: 10%; */
  cursor: pointer;
}
.pop-up-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.pop-up {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 3rem 2rem 1rem;  
  transform: translate(-50%,-50%);
  background: white;
  /* border: 1px solid #b0ced8; */
  text-align: left;
  box-sizing: border-box;
}
.pop-up-item {
  margin-bottom: 2rem;
}
.pop-up label {
  margin-right: 5px;
}
.input-title {
  border: 1px solid gray;
  /* border-style: none; */
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
