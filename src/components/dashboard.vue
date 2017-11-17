<template>
  <div class="dashboard-container">
    <div class="inner-container">
      <div class="search-and-create">
        <!-- search component -->        
        <search></search>
        <!-- create new element component -->
        <create-new></create-new>
      </div>  

      <!-- lists component -->
      <div :is="comToRender"></div>

      <!-- page number component -->
      <page-number></page-number>
    </div>
    
  </div>
</template>

<script>
import search from './search'
import createNew from './createNew'
import pageNumber from './pageNumber'
import lists from './lists'

export default {
  name: 'dashboard',
  data () {
    return {
      comToRender: 'lists'
    }
  },
  methods: {
    search () {
      console.log('sousuo')
    },
    createNew () {
      console.log('createnw')
    }
  },
  components: {
      lists,
      search,
      createNew,
      pageNumber
  }
}
</script>

<style scoped>
.dashboard-container {
  padding: 1rem 5rem;    
}
.inner-container {
  position: relative;
}
.search-and-create {
  display: flex;
  justify-content: space-between;
}
</style>

