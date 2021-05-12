"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardController = /** @class */ (function () {
    function KeyboardController(newRound) {
        this.newRound = newRound;
    }
    KeyboardController.prototype.pressed = function (character) {
        this.newRound.inputCharacter = character.toLowerCase();
        for (var i = 0; i < this.newRound.items.keyButtons.length; i++) {
            if (this.newRound.items.keyButtons[i].text.toLowerCase() === this.newRound.inputCharacter) {
                this.newRound.items.keyButtons[i].setColor("#81A312");
                this.newRound.items.keyButtons[i].setScale(1.5, 1.5);
            }
            else {
                this.newRound.items.keyButtons[i].setColor("#ffffff");
                this.newRound.items.keyButtons[i].setScale(1, 1);
            }
        }
    };
    return KeyboardController;
}());
exports.KeyboardController = KeyboardController;
//# sourceMappingURL=KeyboardController.js.map