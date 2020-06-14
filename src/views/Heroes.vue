<template>
    <div class="text-center hero-outer-container">
        <div class="user-search">
            <h3>Search:</h3>
            <input type="text" v-model="userSearch">
        </div>
        <div class="hero-container-inner container text-center">
            <div v-for="item in filteredList" v-bind:key="item.id">
                <h4>{{ item.name }}</h4>
                <!-- <p>{{ parseInt(item.id) }}</p> -->
                <a  target="_blank" v-on:click="heroPage(item.id)"><button type="button" class="btn btn-info">View Info</button></a>
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
         let token = process.env.VUE_APP_FB_TOKEN;
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

                if(searchOption === '') { return heroList } // Returning full list if user has not typed anything in
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
body {
    max-width: 100%;
    widows: 100%;
}

.hero-outer-container {
    color: #fff;
}

.user-search {
    margin: 15px 0;
}

.hero-container-inner img {
    max-width: 100%;
    width: 100px;
}

@media(min-width: 769px) {
    .hero-container-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    }
}
@media(max-width: 769px) {
    .hero-container-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    }
}
</style>
