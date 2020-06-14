<template>
  <div class="home">

    <div class="dl">
    <h1>Superhero Database</h1>
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
  color: #fff;
}
</style>
