<template>
    <div class="text-center">
      <h1>Hero {{ HeroId }}</h1>
      <img :src="HeroInfo.image.url">
      <p>{{ HeroInfo.name }}</p>
      <p>Gender: {{ HeroInfo.appearance.gender }}</p>
      <p>{{ HeroInfo }}</p>
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
        HeroInfo: null
      }
    },
  components: {
  },
  methods: {
     getHeroName: function() {
      axios.get('https://www.superheroapi.com/api.php/10222460762972255/' + this.HeroId).then(res => {
          this.HeroInfo = res.data;
          console.log(this.HeroInfo)
      })
    }
  },
  mounted() {
    this.getHeroName();
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  width: 225px;
}
</style>
