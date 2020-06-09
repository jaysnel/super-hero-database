<template>
    <div class="text-center">

    </div>
</template>

<script>
import axios from 'axios'
import superHeroes from '../assets/superherolist.js'

export default {
  name: 'Heroe',
  data: function() {
      return {
        Heroes: superHeroes,
        HeroId: null,
      }
    },
  components: {
  },
  methods: {
     getHeroName: function() {
         let heroId = this.HeroId;
      axios.get('https://www.superheroapi.com/api.php/10222460762972255/' + 644).then(res => {
          return res
      })
    }
  },
  mounted() {
    this.getHeroName();
    console.log(this.Heroes)
  }
}
</script>

<style scoped>
</style>
