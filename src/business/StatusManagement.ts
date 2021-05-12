import {Globals} from "../utils/Globals";

export class StatusManagement {

  static decreaseHealth(amount: number) {
    Globals.healthSize = Globals.healthSize - amount;
  }

  static decreaseWeaponAmount(weaponType: string, amount: number) {
    weaponType === 'sword' ? Globals.swordAmount = Globals.swordAmount - amount :
      Globals.shieldAmount = Globals.shieldAmount - amount;
  }
}
