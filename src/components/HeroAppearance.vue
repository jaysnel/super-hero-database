<template>
  <div class="hero-appearance-body">
    <p>{{ eyeColor }}</p>
    <p>{{ gender }}</p>
    <p>{{ hairColor }}</p>
    <p>{{ height }}</p>
    <p>{{ race }}</p>
    <p>{{ weight }}</p>
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
  background: #0fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
