"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../config/Config");
var main_1 = require("../main");
var Constants_1 = require("../utils/Constants");
var Style = /** @class */ (function () {
    function Style() {
    }
    Style.general = function (isBold, fontSize, fontType, fontColor, padding) {
        var fontStyle = isBold ? "bold " : "";
        var padd = padding != undefined ? padding : 0;
        return {
            font: fontStyle + "" + fontSize + "px " + fontType,
            fill: fontColor,
            align: "center",
            padding: padd,
            wordWrap: { width: main_1.screenWidth() * 0.97 }
        };
    };
    Style.timer = function () {
        return {
            font: "bold " + main_1.screenWidth() / 8 + "px " + Config_1.Config.MAIN_FONTS,
            fill: Constants_1.Constants.colors("dirty_white"),
            wordWrap: true,
            wordWrapWidth: main_1.screenWidth(),
            align: "right"
        };
    };
    Style.businessWordDescription = function () {
        return {
            font: "bold " + main_1.screenWidth() / 22 + "px " + Config_1.Config.SIDE_MENU_FONTS,
            fill: Constants_1.Constants.colors("dirty_white"),
            wordWrap: { width: main_1.screenWidth() * 0.8 },
            align: "center"
        };
    };
    Style.howToPlay = function () {
        return {
            wordWrap: { width: main_1.screenWidth() * 0.60 }
        };
    };
    Style.scoreMessage = function () {
        return {
            font: "bold " + main_1.screenWidth() / 19 + "px " + Config_1.Config.SIDE_MENU_FONTS,
            fill: Constants_1.Constants.colors("dirty_white"),
            wordWrap: { width: main_1.screenWidth() * 0.50 },
            align: "center"
        };
    };
    Style.displayBoard = function () {
        return {
            font: "bold " + main_1.screenWidth() / 40 + "px " + Config_1.Config.MAIN_FONTS,
            fill: Constants_1.Constants.colors("dirty_white"),
            wordWrap: true,
            wordWrapWidth: 10,
            align: "left"
        };
    };
    Style.setAttribute = function (shadowViews, interactiveViews) {
        // Adding shadow to a views from an array
        for (var i in shadowViews) {
            shadowViews[i].setShadow(-3, -3, Constants_1.Constants.colors("black"), 2, true, true);
        }
        // Adding interaction to a views from an array
        for (var i in interactiveViews) {
            interactiveViews[i].setInteractive();
        }
    };
    return Style;
}());
exports.Style = Style;
//# sourceMappingURL=Style.js.map