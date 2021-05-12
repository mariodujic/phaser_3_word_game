"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayMessageController = /** @class */ (function () {
    function DisplayMessageController(newRound) {
        this._displayMsgList = [];
        this._newRound = newRound;
    }
    DisplayMessageController.prototype.message = function (message) {
        this.messageToStack(message);
    };
    DisplayMessageController.prototype.messageToStack = function (message) {
        this._displayMsgList.push(message);
    };
    DisplayMessageController.prototype.eraseMessages = function () {
        this._displayMsgList = [];
    };
    Object.defineProperty(DisplayMessageController.prototype, "displayMsgList", {
        get: function () {
            return this._displayMsgList;
        },
        enumerable: true,
        configurable: true
    });
    return DisplayMessageController;
}());
exports.DisplayMessageController = DisplayMessageController;
//# sourceMappingURL=DisplayMessageController.js.map