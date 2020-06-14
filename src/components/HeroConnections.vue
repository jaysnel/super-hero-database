<template>
  <div class="hero-connections-body">

<h2>Personal Connections</h2>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#HeroConnections">
  Learn More
</button>

<!-- Modal -->
<div class="modal fade" id="HeroConnections" tabindex="-1" role="dialog" aria-labelledby="HeroConnectionsTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="HeroConnections">Personal Connections</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p><span>Group Affiliation:</span> {{ groupAffiliation }}</p>
        <p><span>Relatives:</span> {{ relatives }}</p>
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
  name: 'HeroConnections',
  props: {
      groupAffiliation: String,
      relatives: String
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
