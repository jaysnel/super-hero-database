<template>
  <div class="hero-powerstats-body">
    <p>Combat: {{ combat }}</p>
    <p>Durability: {{ durability }}</p>
    <p>Intelligence: {{ intelligence }}</p>
    <p>Power: {{ power }}</p>
    <p>Speed: {{ speed }}</p>
    <p>Strength: {{ strength }}</p>
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
    background: rgba(255,255,255,.5);
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
