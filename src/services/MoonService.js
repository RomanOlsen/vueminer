/* eslint-disable no-console */
import { AppState } from "@/AppState.js";

class MoonService{
  mine(){
    // let cheese = AppState.cheese
    // cheese = (cheese * AppState.miningPower) + 1
    AppState.cheese = AppState.cheese + AppState.miningPower + 1

    // console.log('mining');
    
  }

  purchaseUpgrade(upgrade){
    console.log('purchasing', upgrade.name);
    if (AppState.cheese < upgrade.price) {
      console.log('not enough cheese');
      return
    }
    AppState.cheese -= upgrade.price

  }
}

export const moonService = new MoonService()