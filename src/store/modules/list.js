import Vue from 'vue'

const state = {
  rawList: [
    {
      title: 'apple',
      imgSrc: require('../../assets/apple.jpg')
    },
    {
      title: 'orange',
      imgSrc: require('../../assets/orange.jpg')
    },
    {
      title: 'lemon',
      imgSrc: require('../../assets/lemon.jpg')
    },
    {
      title: 'pear',
      imgSrc: require('../../assets/pear.jpg')
    },
    {
      title: 'orange2',
      imgSrc: require('../../assets/orange2.jpg')
    },
    {
      title: 'kiwi-fruit',
      imgSrc: require('../../assets/kiwi-fruit.jpg')
    },
    {
      title: 'peach',
      imgSrc: require('../../assets/peach.jpg')
    },
    {
      title: 'pear2',
      imgSrc: require('../../assets/pear2.jpg')
    }
  ],
  list: [],
  showList: [],     
  searchList: [],
  curPage: 1,
  showListNum: 3  
}

const getters = {
   getList: state => state.list,
   getShowList: state => state.showList,   
   getCurPage: state => state.curPage,
   getShowListNum: state => state.showListNum
}
const mutations = {
  initList (state) {
    state.curPage = 1
    state.list = state.rawList.slice(0, state.rawList.length)
    if (!state.list.length) { state.curPage = 0 }
  },
  updateShowList (state) { 
    let start = (state.curPage - 1) * state.showListNum
    let end = start + state.showListNum
    state.showList = state.list.slice(start, end)
  },
  addListItem (state, newEle) {
    state.list.push(newEle)
  },
  searchList (state, searchStr) {
    state.list = state.rawList.filter(function (element) {
      return !element.title.indexOf(searchStr)
    });
    if (!state.list.length) { state.curPage = 0 }    
  },
  addCurPage (state) {
    state.curPage++
  },
  minusCurPage (state) {
    state.curPage--
  }
}

export default {
  state,
  getters,
  mutations
}