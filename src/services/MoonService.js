/* eslint-disable no-console */
import { AppState } from "@/AppState.js";

class MoonService{
  
  autoMine(){
    AppState.cheese *= AppState.autoMiningPower
    AppState.cheese.toFixed(3)
  }
  
  mine(){
    // let cheese = AppState.cheese
    // cheese = (cheese * AppState.miningPower) + 1
    AppState.cheese += AppState.miningPower
    AppState.cheese.toFixed(3)

    
    // console.log('mining');
    
  }
  
  
  
  
  purchaseUpgrade(upgrade){
    console.log('purchasing', upgrade.name);
    if (AppState.cheese < upgrade.price) {
      console.log('not enough cheese');
      return
    }


    AppState.cheese -= upgrade.price
    upgrade.price++
    upgrade.quantity++
    if (upgrade.isAuto == true) {
      AppState.autoMiningPower += upgrade.multiplier
      return
    }
    AppState.miningPower += upgrade.adder
    
  }
}

export const moonService = new MoonService()