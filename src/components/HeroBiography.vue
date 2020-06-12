<template>
  <div class="hero-biography-body">
    <p>Aliases: {{ aliases }}</p>
    <p>Alignment: {{ alignment }}</p>
    <p>Alter-Egos:{{ alterEgos }}</p>
    <p>First Appearance: {{ firstAppearance }}</p>
    <p>Full Name: {{ fullName }}</p>
    <p>Gender: {{ gender }}</p>
    <p>Place Of Birth: {{ placeOfBirth }}</p>
    <p>Publisher: {{ publisher }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroBiography',
  props: {
      aliases: Array,
      alignment: String,
      alterEgos: String,
      firstAppearance: String,
      fullName: String,
      gender: String,
      placeOfBirth: String,
      publisher: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-biography-body {
    background: rgba(255,255,255,.5);
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
