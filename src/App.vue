// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { moonService } from './services/MoonService.js';

function mine() {
  moonService.mine()
}

function purchaseUpgrade(upgradeType) {
  moonService.purchaseUpgrade(upgradeType)
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
      <div class="col-12">
        <div class="d-flex justify-content-center mb-5">
          <span>{{ AppState.cheese }} Cheese</span>
        </div>
      </div>
      <div class="col-6">
        <div v-for="upgrade in AppState.clickUpgrades" class="d-flex justify-content-end">
          <button @click="purchaseUpgrade(upgrade)" class="btn btn-primary text-light my-1">{{ upgrade.name }} | {{
            upgrade.price }} Cheese</button>
        </div>
      </div>
      <div class="col-6">
        <div v-for="upgrade in AppState.automaticUpgrades" class="d-flex justify-content-start">
          <button @click="purchaseUpgrade(upgrade)" class="btn btn-warning text-light my-1">{{ upgrade.name }} | {{
            upgrade.price }} Cheese</button>
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