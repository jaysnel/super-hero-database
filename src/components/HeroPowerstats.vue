<template>
  <div class="hero-powerstats-body">
    <p>{{ combat }}</p>
    <p>{{ durability }}</p>
    <p>{{ intelligence }}</p>
    <p>{{ power }}</p>
    <p>{{ speed }}</p>
    <p>{{ strength }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroPowerstats',
  props: {
        combat: String,
        durability: String,
        intelligence: String,
        power: String,
        speed: String,
        strength: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-powerstats-body {
    background: lightgreen;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
