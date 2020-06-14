<template>
  <div class="hero-powerstats-body">


<h2>Powerstats</h2>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#powerstats">
  Learn More
</button>

<!-- Modal -->
<div class="modal fade" id="powerstats" tabindex="-1" role="dialog" aria-labelledby="powerstatsTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Powerstats</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p><span>Combat:</span> {{ combat }}</p>
        <p><span>Durability:</span> {{ durability }}</p>
        <p><span>Intelligence:</span> {{ intelligence }}</p>
        <p><span>Power:</span> {{ power }}</p>
        <p><span>Speed:</span> {{ speed }}</p>
        <p><span>Strength:</span> {{ strength }}</p>
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

/* MODAL POPUP STYLING */
.modal-content .modal-body span {
  font-weight: bold;
}

.modal-content {
  color: #293C4E;
}
</style>
