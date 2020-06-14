<template>
  <div class="home">

    <div class="dl1">
    <h1>Hero Home Title</h1>
    </div>

    <div class="dl2">
    <h1>About Hero Database</h1>
    </div>

    <div class="dl3">
    <h1>Super Human Database</h1>
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import superHeroes from '../assets/superherolist.js'

export default {
  name: 'Home',
  data: function() {
      return {
        Heroes: null,
        listOfAllHeroes: superHeroes
      }
    },
  components: {
  },
  methods: {
  },
  mounted() {
    console.log(this.listOfAllHeroes);
  }
}
</script>

<style scoped>
.home div {
  background: #ff0000;
}
</style>
