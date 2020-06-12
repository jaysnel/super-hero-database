<template>
  <div class="hero-appearance-body">
    <p>Eye Color: {{ eyeColor }}</p>
    <p>Gender: {{ gender }}</p>
    <p>Hair Color: {{ hairColor }}</p>
    <p>Height: {{ height }}</p>
    <p>Race: {{ race }}</p>
    <p>Weight: {{ weight }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroAppearance',
  props: {
      eyeColor: String,
      gender: String,
      hairColor: String,
      height: String,
      race: String,
      weight: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-appearance-body {
  background: rgba(255,255,255,.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
