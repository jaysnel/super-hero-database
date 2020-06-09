<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>{{ Heroes }}</p>
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
