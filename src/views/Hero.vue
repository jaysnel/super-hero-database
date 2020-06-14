<template>
    <div class="text-center hero-outside-container">
      <div class="top-name-image">
        <h1>{{ HeroInfo.name }}</h1>
        <img :src="HeroInfo.image.url"><br/>
      </div>
      
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
          :alignment="HeroInfo.biography.alignment" 
          :alterEgos="HeroInfo.biography['alter-egos']"
          :firstAppearance="HeroInfo.biography['first-appearance']"
          :fullName="HeroInfo.biography['full-name']"
          :gender="HeroInfo.appearance.gender"
          :placeOfBirth="HeroInfo.biography['place-of-birth']"
          :publisher="HeroInfo.biography.publisher"
          />

          <HeroConnections class="hero-connections" 
          :groupAffiliation="HeroInfo.connections['group-affiliation']" 
          :relatives="HeroInfo.connections.relatives"
          />

          <HeroPowerstats class="hero-powerstats" 
          :combat="HeroInfo.powerstats.combat"
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

    <div class="text-center back-to-heroes">
      <div>
      <button type="button" class="btn btn-warning" v-on:click="backToHeroesPage()">Back To Heroes</button>
      </div>
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
       let vueApp = this;
       let token = process.env.VUE_APP_FB_TOKEN;
       let heroId = this.HeroId;
       let url = 'https://www.superheroapi.com/api.php/' + token + '/' + heroId;

      axios.get(url).then(res => {
        if(res.data.appearance.race == "null") res.data.appearance.race = "-"
          vueApp.HeroInfo = res.data;
          console.log(vueApp.HeroInfo)
      })
    },
    backToHeroesPage: function() {
      this.$router.push({path: '/heroes'});
    }
  },
  mounted() {
    this.getHeroName();
  }
}
</script>

<style scoped>

.top-name-image {
  color: #fff;
}

.hero-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  color: #fff;
}

img {
  max-width: 100%;
  width: 225px;
}

.back-to-heroes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.back-to-heroes div {
  margin-top: 20px;
}
</style>
