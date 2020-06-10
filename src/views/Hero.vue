<template>
    <div class="text-center">
      Hero {{ HeroId }}
    </div>
</template>

<script>
import axios from 'axios'
import superHeroes from '../assets/superherolist.js'

export default {
  name: 'Hero',
  data: function() {
      return {
        Heroes: superHeroes,
        HeroId: this.$route.params.id,
      }
    },
    computed: {
      destination() {
        return superHeroes.find(hero => hero.id === this.HeroId)
      }
    },
  components: {
  },
  methods: {
     getHeroName: function() {
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
