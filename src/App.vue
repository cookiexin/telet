<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>
<script>
import dashboard from './components/dashboard'

export default {
  name: 'app',
  components: {
    dashboard
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  /* background: gray; */
}
li {
  list-style: none;
}
</style>
