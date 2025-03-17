/* eslint-disable no-console */
import { AppState } from "@/AppState.js";

class MoonService{
  
  autoMine(){
    
  }
  
  mine(){
    // let cheese = AppState.cheese
    // cheese = (cheese * AppState.miningPower) + 1
    AppState.cheese += AppState.miningPower
    
    // console.log('mining');
    
  }
  
  
  
  setInterval(autoMine, 1000);
  
  purchaseUpgrade(upgrade){
    console.log('purchasing', upgrade.name);
    if (AppState.cheese < upgrade.price) {
      console.log('not enough cheese');
      return
    }
    AppState.cheese -= upgrade.price
    upgrade.price++
    upgrade.quantity++
    AppState.miningPower += upgrade.adder
    AppState.multiplier
    // if (upgrade.isAuto == true) {
      
    // }
    
  }
}

export const moonService = new MoonService()