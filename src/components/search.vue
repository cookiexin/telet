<template>
  <form class="search">
    <input type="text" placeholder="please input search key" 
      v-model="sKey">
    <!-- <button @click.prevent="search">搜索</button> -->
  </form>
</template>

<script>
export default {
  name: 'search',
  props: ['ifResetInput'],
  data () {
    return {
      // searchKey: ''
      sKey: ''
    }
  },
  watch: {
    sKey () {
      // console.log('searchKey:', this.sKey)
      this.$emit('search', this.sKey)
    },
    ifResetInput () {
      // console.log('changeIFRESET')
      // console.log('ifResetInput:', this.ifResetInput)
      if (this.ifResetInput === true) {
        this.sKey = ''
        this.$emit('change-if-reset-input')
      }
    }
  }
}
</script>

<style scoped>
.search input {
    padding: 3px;
}
</style>

