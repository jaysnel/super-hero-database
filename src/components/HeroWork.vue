<template>
  <div class="hero-work-body">
    <!-- <p>Base: {{ base }}</p>
    <p>Occupation: {{ occupation }}</p> -->


    <h1>Civillian Work</h1>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#HeroWork">
  Learn More
</button>

<!-- Modal -->
<div class="modal fade" id="HeroWork" tabindex="-1" role="dialog" aria-labelledby="HeroWorkTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Civillian Work</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p><span>Base:</span> {{ base }}</p>
        <p><span>Occupation:</span> {{ occupation }}</p>
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
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
}

/* MODAL POPUP STYLING */
.modal-content .modal-body span {
  font-weight: bold;
}
</style>
