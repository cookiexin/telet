<template>
  <div class="list-container">
    <table>
      <thead>
        <tr>
          <td v-for="item in columns">{{item}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in values">
          <td v-for="value in item">{{value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'lists',
  props: ['displayNum', 'columns', 'values'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
table {
  margin-top: 1rem;
  width: 100%;
  border: 1px solid lightgray;
}
thead tr{
  background: lightgreen;
}
tbody td {
  /* outline: 1px solid lightgray; */
  background: #f9f9f9;
}
</style>
