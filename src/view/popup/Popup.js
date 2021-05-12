"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../main");
var Style_1 = require("../Style");
var Config_1 = require("../../config/Config");
var Constants_1 = require("../../utils/Constants");
var Popup = /** @class */ (function () {
    function Popup() {
    }
    /**
     * @param scene : parent view holder
     * @param message : message to a user
     * @param color : background color of message
     * @param height : position of view
     */
    Popup.show = function (scene, message, color, height) {
        if (this.view !== undefined) {
            this.view.destroy();
            this.rectBack.destroy();
        }
        // Objects
        this.view = scene.add.text(0, 0, message, Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white"), 10));
        this.rectBack = scene.add.graphics();
        //Config
        // Color of a background
        var rectColor = Number("0x" + color.substring(1, color.length));
        // Vertical position of an object
        var viewHeight;
        switch (height) {
            case "high":
                viewHeight = main_1.screenHeight() / 4 - this.view.height / 2;
                break;
            case "middle":
                viewHeight = main_1.screenHeight() / 2 - this.view.height / 2;
                break;
            case "low":
                viewHeight = main_1.screenHeight() / 1.2 - this.view.height / 2;
                break;
            default:
                viewHeight = main_1.screenHeight() / 1.2 - this.view.height / 2;
        }
        // Text
        this.view.setPosition(main_1.screenWidth() / 2 - this.view.width / 2, viewHeight);
        this.view.setShadow(2, 2, 'rgba(0,0,0,0.7)', 2, true, true);
        // Set front view
        this.view.setDepth(100);
        // Color
        this.rectBack.fillStyle(rectColor);
        this.rectBack.alpha = 0.88;
        // @ts-ignore
        this.rectBack.fillRoundedRect(main_1.screenWidth() / 2 - this.view.width / 2 * 1.03, viewHeight, this.view.width * 1.03, this.view.height, { tl: 25, tr: 25, bl: 25, br: 25 });
        // Clearing memory
        var removeViewTimeout = setTimeout(destroyView.bind(this, this.view, this.rectBack), 2000);
        function destroyView(view, rectBack) {
            view.destroy();
            rectBack.destroy();
            if (!view.visible) {
                // Timeout cleared
                clearTimeout(removeViewTimeout);
            }
            view = null;
        }
    };
    return Popup;
}());
exports.Popup = Popup;
//# sourceMappingURL=Popup.js.map