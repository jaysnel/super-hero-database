<template>
  <div class="hero-connections-body">
    <p>{{ groupAffiliation }}</p>
    <p>{{ relatives }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroConnections',
  props: {
      groupAffiliation: String,
      relatives: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-connections-body {
    background: yellow;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
