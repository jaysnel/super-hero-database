<template>
    <div class="text-center hero-outer-container">
        <input type="text" v-model="userSearch">
        <h1>Heroes</h1>
        <div class="hero-container-inner container text-center">
            <div v-for="item in filteredList" v-bind:key="item.id">
                <h3>{{ item.name }}</h3>
                <p>{{ parseInt(item.id) }}</p>
                <a  target="_blank" v-on:click="heroPage(item.id)"><button type="button" class="btn btn-dark">Visit</button></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import superHeroes from '../assets/superherolist.js'

export default {
  name: 'Heroes',
  data: function() {
      return {
        token: process.env.VUE_APP_FB_TOKEN,
        Heroes: superHeroes,
        heroName: null,
        heroId: null,
        userSearch: ''
      }
    },
  components: {
  },
  methods: {
      heroPage: function(id) {
          this.$router.push({ path: `/hero/${Number(id)}`})
      },
     getHeroInfo: function() {
         let token = this.token;
         let url = 'https://www.superheroapi.com/api.php/' + token + '/' + getRandomNumber() + '/image';
         function getRandomNumber() {
             return Math.floor((Math.random() * 100) + 1);
         }
        axios.get(url).then(res => {
          console.log(res.data)
      })
    }
  },
  computed: {
      filteredList: function() {
                let heroList = this.Heroes;
                let newList = [];
                let searchOption = this.userSearch;

                // for(let i = 0; i <= 40; i++) {heroList.push(this.Heroes[i])}
                
                if(searchOption === '') { return heroList } // Returnin full list if user has not typed anything in

                heroList.filter(j => {
                    if(j.name.toLowerCase().includes(searchOption.toLowerCase())) newList.push(j);
                })
                
                
                return newList;
            }
  },
  mounted() {
      this.getHeroInfo();
  }
}
</script>

<style scoped>
.hero-container-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
}
.hero-container-inner img {
    max-width: 100%;
    width: 100px;
}
</style>
