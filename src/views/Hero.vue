<template>
    <div class="text-center">
      Hero {{ HeroId }}

      <div>{{ heroInfo }}</div>
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
        heroInfo: null
      }
    },
  components: {
  },
  methods: {
     getHeroName: function() {
      axios.get('https://www.superheroapi.com/api.php/10222460762972255/' + this.HeroId).then(res => {
          this.heroInfo = res.data;
          console.log(res.data)
      })
    }
  },
  mounted() {
    this.getHeroName();
  }
}
</script>

<style scoped>
</style>
