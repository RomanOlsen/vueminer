import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 0,
  miningPower: 1,
  autoMiningPower: 1,// 1x multiplier. Auto stuff multiplies. Manual click adds
  won: false, 
  clickUpgrades: [
    new Upgrade({id: '1a', isAuto: false ,name: 'Bread', price: 10, quantity: 0, adder: 1, multiplier: 1}),
    new Upgrade({id: '2a', isAuto: false ,name: 'Butter', price: 20, quantity: 0, adder: 3, multiplier: 1}),
    new Upgrade({id: '3a', isAuto: false ,name: 'Tallow', price: 30, quantity: 0, adder: 5, multiplier: 1}),

  ],
  automaticUpgrades: [
    new Upgrade({id: '1b', isAuto: true ,name: 'Rover', price: 50, quantity: 0, multiplier: 0.001}), // ADDS to the total multiplier (autoMiningPower)
    new Upgrade({id: '2b', isAuto: true ,name: 'Rocket', price: 80, quantity: 0, multiplier: 0.01}),
    new Upgrade({id: '3b', isAuto: true ,name: 'Space station', price: 100, quantity: 0, multiplier: 0.02}),
  ]
})


