import {Conditions} from "../business/Conditions";
import {Globals} from "../utils/Globals";
import {Round} from "../business/Round";
import {Constants} from "../utils/Constants";
import {StatusManagement} from "../business/StatusManagement";
import {Popup} from "../view/popup/Popup";

export class WeaponController {

  private readonly _scene: Phaser.Scene;
  private readonly _newRound: Round;


  constructor(scene: Phaser.Scene, newRound: Round) {
    this._scene = scene;
    this._newRound = newRound;

  }

  public weaponManagement(unclickedSword: string, unclickedShield: string) {
    if (Conditions.isSwordClicked) {
      StatusManagement.decreaseWeaponAmount("sword", 1);
      this._newRound.displayMessageController.message(Constants.MESSAGE_SWORD_LOST);
      // Sword losing point animation
      this._newRound.animationFactory.createAnimation('sword').animateView(this._newRound.items.swordAnimationView);
      this._newRound.items.swordAnimationView.setText("-1");
      this._newRound.items.swordAnimationView.setColor(Constants.colors('red'));
    }
    if (Conditions.isShieldClicked) {
      StatusManagement.decreaseWeaponAmount("shield", 1);
      this._newRound.displayMessageController.message(Constants.MESSAGE_SHIELD_LOST);
      // Sword losing point animation
      this._newRound.animationFactory.createAnimation('shield').animateView(this._newRound.items.shieldAnimationView);
      this._newRound.items.shieldAnimationView.setText("-1");
      this._newRound.items.shieldAnimationView.setColor(Constants.colors('red'));
    }
    Conditions.isSwordClicked = false;
    Conditions.isShieldClicked = false;

    this._newRound.items.swordImage.setTexture(unclickedSword);
    this._newRound.items.shieldImage.setTexture(unclickedShield);
    // Indication how much of a weapons has left.
    this._newRound.items.swordAmountView.setText(Globals.swordAmount);
    this._newRound.items.shieldAmountView.setText(Globals.shieldAmount);

  }

  weaponUsage(type: string, unfocusedImg: string, focusedImg: string) {
    if (type === 'sword') {
      this._newRound.items.swordImage.setInteractive();
      this.weaponLogic(this._newRound.items.swordImage, type, unfocusedImg, focusedImg);
    } else if (type === 'shield') {
      this._newRound.items.shieldImage.setInteractive();
      this.weaponLogic(this._newRound.items.shieldImage, type, unfocusedImg, focusedImg);
    }
  }

  weaponLogic(item: Phaser.GameObjects.Sprite, type: string, unfocusedImg: string, focusedImg: string) {
    var newRound = this._newRound;
    item.on('pointerdown', function () {
      let itemAmount = type === "sword" ? Globals.swordAmount : Globals.shieldAmount;

      function weaponClicked() {
        if (type === 'sword') {
          if (Conditions.isSwordClicked) {
            item.setTexture(unfocusedImg);
            Conditions.isSwordClicked = false;
          } else {
            item.setTexture(focusedImg);
            Conditions.isSwordClicked = true;
            newRound.soundController.swordSelected();
          }
        } else if (type === 'shield') {
          if (Conditions.isShieldClicked) {
            item.setTexture(unfocusedImg);
            Conditions.isShieldClicked = false;
          } else {
            item.setTexture(focusedImg);
            Conditions.isShieldClicked = true;
            newRound.soundController.shieldSelected();
          }
        }

      }

      if (itemAmount > 0) {
        weaponClicked();
      } else {

        Popup.show(this.scene, `No more ${type}`, Constants.colors("red"), "low");
      }
    });
  }

}
