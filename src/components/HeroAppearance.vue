<template>
  <div class="hero-appearance-body">


<h2>Appearance</h2>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#HeroAppearance">
  Learn More
</button>

<div class="modal fade" id="HeroAppearance" tabindex="-1" role="dialog" aria-labelledby="HeroAppearanceTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Appearance</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p><span>Eye Color:</span> {{ eyeColor }}</p>
        <p><span>Gender:</span> {{ gender }}</p>
        <p><span>Hair Color:</span> {{ hairColor }}</p>
        <p><span>Height:</span> {{ height }}</p>
        <p><span>Race:</span> {{ race }}</p>
        <p><span>Weight:</span> {{ weight }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
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

/* MODAL POPUP STYLING */
.modal-content .modal-body span {
  font-weight: bold;
}

.modal-content {
  color: #293C4E;
}
</style>
