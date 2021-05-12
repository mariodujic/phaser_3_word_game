"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
var ScreenDensity = /** @class */ (function () {
    function ScreenDensity() {
    }
    ScreenDensity.prototype.resizeScreen = function () {
        var canvas = main_1.default.canvas, width = window.innerWidth, height = window.innerHeight;
        var wratio = width / height, ratio = canvas.width / canvas.height;
        if (wratio < ratio) {
            canvas.style.width = width + "px";
            canvas.style.height = (width / ratio) + "px";
        }
        else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    };
    return ScreenDensity;
}());
exports.ScreenDensity = ScreenDensity;
//# sourceMappingURL=ScreenDensity.js.map