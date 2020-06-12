<template>
  <div class="hero-work-body">
    <p>Base: {{ base }}</p>
    <p>Occupation: {{ occupation }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroWork',
  props: {
        base: String,
        occupation: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-work-body {
    background: rgba(255,255,255,.5);
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
