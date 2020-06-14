<template>
  <div class="hero-work-body">
    <h2>Civillian Work</h2>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#HeroWork">
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
        <p><span>Home Base:</span> {{ base }}</p>
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

/* MODAL POPUP STYLING */
.modal-content .modal-body span {
  font-weight: bold;
}

.modal-content {
  color: #293C4E;
}
</style>
