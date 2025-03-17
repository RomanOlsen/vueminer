// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { moonService } from './services/MoonService.js';

function mine() {
  moonService.mine()
}

</script>

// TODO find a way to have it fix spacing when saved. Now fixed!


// HTML
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center align-items-center">
          <img @click="mine()" class="picture" src="https://gallery.yopriceville.com/downloadfullsize/send/21405"
            alt="">
        </div>
      </div>
    </div>
  </div>
</template>


// styles
<style lang="scss">
// @import "./assets/scss/main.scss";

.picture {
  max-height: 40dvh;
  aspect-ratio: 1/1;
}
</style>