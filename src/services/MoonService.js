/* eslint-disable no-console */
import { AppState } from "@/AppState.js";

class MoonService{
  
  autoMine(){
    if (AppState.cheese > 1000 || AppState.cheese == 'You win') {
      AppState.cheese = 'You win'
      // AppState.cheese = 0
      AppState.miningPower = 0 
      AppState.autoMiningPower = 0
      AppState.won = true
      return
    }
  
    AppState.cheese *= AppState.autoMiningPower
    AppState.cheese.toFixed(3)
  }
  
  mine(){

    if (AppState.cheese > 1000 || AppState.cheese == 'You win') {
      AppState.cheese = 'You win'
      // AppState.cheese = 0
      AppState.miningPower = 0 
      AppState.autoMiningPower = 0
      AppState.won = true
      return
    }
  
    // let cheese = AppState.cheese
    // cheese = (cheese * AppState.miningPower) + 1
    AppState.cheese += AppState.miningPower
    AppState.cheese.toFixed(3)

    
    // console.log('mining');
    
  }
  
  checkIfWon(){
    if (AppState.cheese > 1000000 || AppState.cheese == 'You win') {
      AppState.cheese = 'You win'
      AppState.cheese = 0
      AppState.miningPower = 0 
      AppState.autoMiningPower = 0
      AppState.won = true
      return
    }
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