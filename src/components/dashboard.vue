<template>
  <div class="dashboard-container">
    <div class="inner-container">
      <div class="search-and-create">
        <!-- search component -->        
        <search :if-reset-input="ifResetInput" @change-if-reset-input="changeIfResetInput"
          @search="setSearch"></search>
        <!-- create new element component -->
        <create-new :elem-keys-type="elemKeysType" @add-item="setAddItem"></create-new>
      </div>  

      <span class="bt-switch-com" @click="changeCom">switch component</span>

      <!-- lists component -->
      <keep-alive>
        <div :is="comToRender" :display-num="displayNum" :columns="rawData.columns" :values="showData"></div>        
      </keep-alive>

      <!-- page number component -->
      <page-number :cur-page="curPage" :total-page="totalPage" 
        @pre-page="setPrePage" @next-page="setNextPage"></page-number>
    </div>    
  </div>
</template>

<script>
import search from './search'
import createNew from './createNew'
import pageNumber from './pageNumber'
import lists from './lists'
import lists1 from './lists1'

export default {
  name: 'dashboard',
  data () {
    return {
      comToRender: 'lists',
      curPage: 1,
      displayNum: 3,
      ifResetInput: false,
      searchKey: '',
      rawData: {},
      rawData1: {
        type: {
          title: 'text',
          imgSrc: 'file'
        },
        values: [
          {
            title: 'apple',
            imgSrc: require('../assets/apple.jpg')
          },
          {
            title: 'orange',
            imgSrc: require('../assets/orange.jpg')
          },
          {
            title: 'lemon',
            imgSrc: require('../assets/lemon.jpg')
          },
          {
            title: 'pear',
            imgSrc: require('../assets/pear.jpg')
          },
          {
            title: 'orange2',
            imgSrc: require('../assets/orange2.jpg')
          },
          {
            title: 'kiwi-fruit',
            imgSrc: require('../assets/kiwi-fruit.jpg')
          },
          {
            title: 'peach',
            imgSrc: require('../assets/peach.jpg')
          },
          {
            title: 'pear2',
            imgSrc: require('../assets/pear2.jpg')
          }
        ]
      },
      rawData2: {
        columns: ['name', 'sex', 'age'],
        type: {
          name: 'text',
          sex: 'text',
          age: 'text'
        },
        values: [
          {
            name: 'ballon',
            sex: 'male',
            age: 10
          },
          {
            name: 'flower',
            sex: 'female',
            age: 18
          },
          {
            name: 'grass',
            sex: 'male',
            age: 5
          },
          {
            name: 'pet',
            sex: 'male',
            age: 3
          }
        ]
      },
      searchData: []
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.searchData.length / this.displayNum)
    },
    showData () {
      let start = (this.curPage - 1) * this.displayNum
      let end = start + this.displayNum
      return this.searchData.slice(start, end)
    },
    elemKeysType () {
      return this.rawData.type
    }
  },
  created () {
    this.initData(this.rawData1)
  },
  methods: {
    changeCom () {
      this.comToRender = this.comToRender === 'lists' ? 'lists1' : 'lists'
      let changeRawData = this.comToRender === 'lists' ? this.rawData1 : this.rawData2
      this.initData(changeRawData)
      this.ifResetInput = true
    },
    setPrePage () {
      this.curPage--
    },
    setNextPage () {
      this.curPage++
    },
    setSearch (sKey) {
      console.log('searchKey:', sKey)
      this.searchKey = sKey
      this.curPage = 1
      if (!sKey) {
        // reset search
        this.resetData()
        console.log('reset search', this.searchData)
      } else {
        this.searchData = this.rawData.values.filter(function (element) {
          for (let key in element) {
            if (element[key].toString().toLowerCase().indexOf(sKey.toLowerCase()) !== -1) {
              return true
            }
          }
          return false
        })
      }
    },
    setAddItem (newElem) {
      this.rawData.values.push(newElem)
      this.resetData()
      this.setSearch(this.searchKey)
    },
    initData (chooseData) {
      this.rawData = JSON.parse(JSON.stringify(chooseData))
      this.resetData()
    },
    resetData () {
      this.curPage = 1
      let values = this.rawData.values
      this.searchData = values
    },
    changeIfResetInput () {
      this.ifResetInput = false
    }
  },
  watch: {
    // if current data is null set curPage to 0
    searchData () {
      let len = this.searchData.length
      if (!len) {
        this.curPage = 0
      }
    }
  },
  components: {
    lists,
    lists1,
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
.bt-switch-com {
  position: absolute;
  margin-top: -1.7rem;
  background: #fbf265;
  color: white;
  padding: 0 10px;
  border-radius: 10px;
  margin-left: -13%;
  cursor: pointer;
}
.bt-switch-com:hover {
  background:#fdb664;
}
</style>

