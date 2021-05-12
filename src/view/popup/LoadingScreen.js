"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../main");
var Style_1 = require("../Style");
var Config_1 = require("../../config/Config");
var Constants_1 = require("../../utils/Constants");
var LoadingScreen = /** @class */ (function () {
    function LoadingScreen() {
    }
    LoadingScreen.show = function (scene) {
        var loadingBackground;
        var progressBar;
        var progressBox;
        var progressContainer;
        var loadingText;
        scene.load.on('start', function () {
            // Loading screen while assets are being loaded
            // Asset is loaded in main menu preload
            loadingBackground = scene.add.sprite(main_1.screenWidth() / 2, main_1.screenHeight() / 2, 'loading_background');
            loadingBackground.scaleX = main_1.screenHeight() / loadingBackground.height;
            loadingBackground.scaleY = main_1.screenHeight() / loadingBackground.height;
            // Progress bar
            progressBar = scene.add.graphics();
            progressBox = scene.add.graphics();
            progressBox.fillStyle(0x000000, 0.2);
            progressBox.fillRect(main_1.screenWidth() / 2, main_1.screenHeight() / 2, 320, 50);
            progressContainer = scene.add.container(-160, 0);
            progressContainer.add(progressBar);
            progressContainer.add(progressBox);
            loadingText = scene.add.text(0, 0, "Loading", Style_1.Style.general(true, main_1.screenWidth() / 20, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("dirty_white")));
            loadingText.setPosition(main_1.screenWidth() / 2 - loadingText.width / 2, main_1.screenHeight() / 2 * 1.143);
        }, this);
        scene.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xEEFFE3, 1);
            progressBar.fillRect(main_1.screenWidth() / 2 + 10, main_1.screenHeight() / 2 + 10, 300 * value, 30);
        });
        scene.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            progressContainer.destroy();
            loadingBackground.destroy();
            loadingText.destroy();
        });
    };
    return LoadingScreen;
}());
exports.LoadingScreen = LoadingScreen;
//# sourceMappingURL=LoadingScreen.js.map