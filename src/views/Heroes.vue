<template>
    <div class="text-center">
        <input type="text" v-model="userSearch">
        <h1>Heroes</h1>
        <div class="hero-container container text-center">
            <div v-for="item in filteredList" v-bind:key="item.name">
                <h3>{{ item.name }}</h3><br/>
                <p>{{ parseInt(item.id) }}</p><br/>
                <a  target="_blank" v-on:click="heroPage(item.id)"><button type="button" class="btn btn-dark">Visit</button></a>
            </div>
        </div>
        {{ token }}
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
        userSearch: '',
        heroID: this.$router.params
      }
    },
  components: {
  },
  methods: {
      heroPage: function(id) {
          console.log(this.heroId)
          this.$router.push({ path: `/hero/${Number(id)}`})
      },
     getHeroName: function() {
         console.log(this.token)
      axios.get('https://www.superheroapi.com/api.php/10222460762972255/644').then(res => {
          return res
      })
    }
  },
  computed: {
        filteredList: function() {
                let heroList = [];
                let searchOption = this.userSearch;
                
                for(var i = 0; i <= 10; i++) {heroList.push(this.Heroes[i])}

                return heroList.filter(hero => {

                    if(searchOption === '') { return hero}

                    let dataArray = heroList;
                    let finalList = [];

                    for(var i = 0; i < dataArray.length - 1; i++) {
                        if(dataArray[i].name.toLowerCase().includes(searchOption.toLowerCase())) {
                            
                            finalList.push(dataArray[i])
                            
                        }
                    }
                    console.log(finalList)
                    return finalList;

                })

            }
  }
}
</script>

<style scoped>
.hero-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.hero-container div {
    max-width: 100%;
    width: 300px;
}
.hero-container img {
    max-width: 100%;
    width: 100px;
}
</style>
