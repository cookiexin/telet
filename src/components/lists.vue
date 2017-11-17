<template>
  <div class="list-container">
    <ul>
      <li class="list-item" v-for="(item,index) in showListData">
        <h3 class="list-item-title">{{item.title}}</h3>
        <img class="list-item-img" :src="item.imgSrc" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'lists',
  data () {
    return {
      pagePerNum: 3,
      lists: []
    }
  },
  computed: {
    listData () {
      return this.$store.getters.getList
    },
    showListData () {
      return this.$store.getters.getShowList
    }
  },
  mounted () {
    this.$store.commit('initList')    
    this.$store.commit('updateShowList')
    console.log(this.$store)
  }
}
</script>

<style scope>
.list-container {
  margin-top: 1rem;
  /* min-height: 280px; */
  background: #d8ebf1;
  border: 1px solid #9fb0b7;
}
.list-container ul {
  display: flex;
  padding: 2rem 1rem;
}
.list-item {
  margin: 0 0.6rem;
  width: 30%;
}
.list-item-title {
  font-weight: normal;
  margin-bottom: 0.5rem;
  padding: 3px; 
  border-radius: 15px;   
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 1);
}
.list-item-img {
  width: 100%;
  border: 1px solid #d0cdb5;
}
</style>
