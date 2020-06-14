<template>
  <div class="home">
    <div>
        <h1>Superhero Database</h1>
        <h2>Learn more about your favorite heroes and villians from all of the universes.</h2>
      <a  target="_blank" v-on:click="heroesPage()"><button type="button" class="btn btn-success">Get Started</button></a>
      <br/><br/>
      <a class="btn-github" href="https://github.com/jaysnel/super-hero-database" target="_blank">Source Code <i class="fab fa-github"></i></a>
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
    heroesPage: function() {
      this.$router.push({ path: '/heroes/'})
    }
  },
  mounted() {
    console.log(this.listOfAllHeroes);
  }
}
</script>

<style scoped>
.home > div {
  color: #fff;
  margin-top: 15%;
}

.btn-github:hover {
  color: #007bff;
}
</style>
