"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("phaser");
var Game_1 = __importDefault(require("./view/scenes/Game"));
var MainMenu_1 = __importDefault(require("./view/scenes/MainMenu"));
var HowToPlay_1 = __importDefault(require("./view/scenes/HowToPlay"));
var Options_1 = require("./view/scenes/Options");
var Ranks_1 = __importDefault(require("./view/scenes/Ranks"));
// todo exiting game over menu button is creating a bug. Last player letter is being player first.
function screenWidth() {
    return window.innerWidth > window.innerHeight / 3 * 2 ? (window.innerHeight / 3 * 2) * window.devicePixelRatio : window.innerWidth * window.devicePixelRatio;
}
exports.screenWidth = screenWidth;
function screenHeight() {
    return window.innerHeight * window.devicePixelRatio;
}
exports.screenHeight = screenHeight;
var config = {
    parent: 'app',
    width: screenWidth(),
    height: screenHeight(),
    backgroundColor: '#221F22',
    "render.autoResize": true,
    images: {
        default: 'assets/images/loading_background.jpg'
    },
    scene: [
        MainMenu_1.default,
        Game_1.default,
        HowToPlay_1.default,
        Options_1.OptionsScene,
        Ranks_1.default,
    ],
};
var game = new Phaser.Game(config);
exports.default = game;
//# sourceMappingURL=main.js.map