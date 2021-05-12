"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions_1 = require("../business/Conditions");
var Globals_1 = require("../utils/Globals");
var Constants_1 = require("../utils/Constants");
var StatusManagement_1 = require("../business/StatusManagement");
var Popup_1 = require("../view/popup/Popup");
var WeaponController = /** @class */ (function () {
    function WeaponController(scene, newRound) {
        this._scene = scene;
        this._newRound = newRound;
    }
    WeaponController.prototype.weaponManagement = function (unclickedSword, unclickedShield) {
        if (Conditions_1.Conditions.isSwordClicked) {
            StatusManagement_1.StatusManagement.decreaseWeaponAmount("sword", 1);
            this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_SWORD_LOST);
            // Sword losing point animation
            this._newRound.animationFactory.createAnimation('sword').animateView(this._newRound.items.swordAnimationView);
            this._newRound.items.swordAnimationView.setText("-1");
            this._newRound.items.swordAnimationView.setColor(Constants_1.Constants.colors('red'));
        }
        if (Conditions_1.Conditions.isShieldClicked) {
            StatusManagement_1.StatusManagement.decreaseWeaponAmount("shield", 1);
            this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_SHIELD_LOST);
            // Sword losing point animation
            this._newRound.animationFactory.createAnimation('shield').animateView(this._newRound.items.shieldAnimationView);
            this._newRound.items.shieldAnimationView.setText("-1");
            this._newRound.items.shieldAnimationView.setColor(Constants_1.Constants.colors('red'));
        }
        Conditions_1.Conditions.isSwordClicked = false;
        Conditions_1.Conditions.isShieldClicked = false;
        this._newRound.items.swordImage.setTexture(unclickedSword);
        this._newRound.items.shieldImage.setTexture(unclickedShield);
        // Indication how much of a weapons has left.
        this._newRound.items.swordAmountView.setText(Globals_1.Globals.swordAmount);
        this._newRound.items.shieldAmountView.setText(Globals_1.Globals.shieldAmount);
    };
    WeaponController.prototype.weaponUsage = function (type, unfocusedImg, focusedImg) {
        if (type === 'sword') {
            this._newRound.items.swordImage.setInteractive();
            this.weaponLogic(this._newRound.items.swordImage, type, unfocusedImg, focusedImg);
        }
        else if (type === 'shield') {
            this._newRound.items.shieldImage.setInteractive();
            this.weaponLogic(this._newRound.items.shieldImage, type, unfocusedImg, focusedImg);
        }
    };
    WeaponController.prototype.weaponLogic = function (item, type, unfocusedImg, focusedImg) {
        var newRound = this._newRound;
        item.on('pointerdown', function () {
            var itemAmount = type === "sword" ? Globals_1.Globals.swordAmount : Globals_1.Globals.shieldAmount;
            function weaponClicked() {
                if (type === 'sword') {
                    if (Conditions_1.Conditions.isSwordClicked) {
                        item.setTexture(unfocusedImg);
                        Conditions_1.Conditions.isSwordClicked = false;
                    }
                    else {
                        item.setTexture(focusedImg);
                        Conditions_1.Conditions.isSwordClicked = true;
                        newRound.soundController.swordSelected();
                    }
                }
                else if (type === 'shield') {
                    if (Conditions_1.Conditions.isShieldClicked) {
                        item.setTexture(unfocusedImg);
                        Conditions_1.Conditions.isShieldClicked = false;
                    }
                    else {
                        item.setTexture(focusedImg);
                        Conditions_1.Conditions.isShieldClicked = true;
                        newRound.soundController.shieldSelected();
                    }
                }
            }
            if (itemAmount > 0) {
                weaponClicked();
            }
            else {
                Popup_1.Popup.show(this.scene, "No more " + type, Constants_1.Constants.colors("red"), "low");
            }
        });
    };
    return WeaponController;
}());
exports.WeaponController = WeaponController;
//# sourceMappingURL=WeaponController.js.map