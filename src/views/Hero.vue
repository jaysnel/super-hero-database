<template>
    <div class="text-center">
      <h1>{{ HeroInfo.name }}</h1>
      <img :src="HeroInfo.image.url">
      
        <div class="hero-body">
          <HeroAppearance class="hero-appearance"
          :eyeColor="HeroInfo.appearance['eye-color']" 
          :gender="HeroInfo.appearance.gender" 
          :hairColor="HeroInfo.appearance['hair-color']"
          :height="HeroInfo.appearance.height[0]"
          :race="HeroInfo.appearance.race"
          :weight="HeroInfo.appearance.weight[0]"
          />

          <HeroBiography class="hero-biography" 
          :aliases="HeroInfo.biography.aliases" 
          :alignment="HeroInfo.biography.algnment" 
          :alterEgos="HeroInfo.biography['alter-egos']"
          :firstAppearance="HeroInfo.biography['first-appearance']"
          :fullName="HeroInfo.biography['ful-name']"
          :gender="HeroInfo.appearance.gender"
          :placeOfBirth="HeroInfo.biography['place-of-birth']"
          :publisher="HeroInfo.biography.publisher"
          />

          <HeroConnections class="hero-connections" 
          :groupAffiliation="HeroInfo.connections['group-affiliation']" 
          :relatives="HeroInfo.connections.relatives"
          />

          <HeroPowerstats class="hero-powerstats" 
          :combat="HeroInfo.powerstats.combo"
          :durability="HeroInfo.powerstats.durability"
          :intelligence="HeroInfo.powerstats.intelligence"
          :power="HeroInfo.powerstats.power"
          :speed="HeroInfo.powerstats.speed"
          :strength="HeroInfo.powerstats.strength"
          />

          <HeroWork class="hero-work" 
          :base="HeroInfo.work.base"
          :occupation="HeroInfo.work.occupation"
          />
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import superHeroes from '../assets/superherolist.js'
import HeroAppearance from '../components/HeroAppearance.vue'
import HeroBiography from '../components/HeroBiography.vue'
import HeroConnections from '../components/HeroConnections.vue'
import HeroPowerstats from '../components/HeroPowerstats.vue'
import HeroWork from '../components/HeroWork.vue'

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
    HeroAppearance,
    HeroBiography,
    HeroConnections,
    HeroPowerstats,
    HeroWork
  },
  methods: {
     getHeroName: function() {
      axios.get('https://www.superheroapi.com/api.php/10222460762972255/' + this.HeroId).then(res => {
        if(res.data.appearance.race == "null") res.data.appearance.race = "Unknown"
          this.HeroInfo = res.data;
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
.hero-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

img {
  max-width: 100%;
  width: 225px;
}
</style>
