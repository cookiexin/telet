<template>
  <form class="search">
    <input type="text" placeholder="please input search key" v-model="searchKey">
    <!-- <button @click.prevent="search">搜索</button> -->
  </form>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchKey: ''
    }
  },
  watch: {
    searchKey () {
      if(!this.searchKey) {
        this.$store.commit('initList')                   
        this.$store.commit('updateShowList')           
      }else{
        this.$store.commit('searchList', this.searchKey)
        this.$store.commit('updateShowList')   
      }
    }
  }
}
</script>

<style scope>
.search input {
    padding: 3px;
}
</style>

