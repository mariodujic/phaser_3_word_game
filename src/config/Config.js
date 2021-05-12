"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    // Font names are file names without .ttf extension
    Config.DISPLAY_FONTS = "Courgette-Regular";
    Config.MAIN_FONTS = "EUR42";
    Config.MENU_FONTS = "Rubik-Black";
    Config.SIDE_MENU_FONTS = "Rubik-Bold";
    Config.CHANCE_OF_ITEM_DROP = 15;
    // Speed of animations that appear when user loses sword, shield or score changes
    Config.ANIM_SPEED = 0.8;
    Config.ALPHA_SPEED = 0.01;
    // Time added after user has used extra time item
    Config.EXTRA_TIME = 30;
    // Hidden word character while it's not revealed
    Config.HID_CHAR = "•";
    // Firebase credentials
    Config.FIREBASE_CONFIG = {
        apiKey: "AIzaSyBrUzBkCGrbaERysl7HtzSHnHdViH_tuPQ",
        authDomain: "fir-practice-3e7e2.firebaseapp.com",
        databaseURL: "https://fir-practice-3e7e2.firebaseio.com",
        projectId: "fir-practice-3e7e2",
        storageBucket: "fir-practice-3e7e2.appspot.com",
        messagingSenderId: "931165853904"
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=Config.js.map