"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../main");
var Style_1 = require("../Style");
var SceneTransition_1 = require("../../service/SceneTransition");
var LoadingScreen_1 = require("../popup/LoadingScreen");
var Config_1 = require("../../config/Config");
var Constants_1 = require("../../utils/Constants");
var ScrollView_1 = require("../../utils/ScrollView");
var HowToPlayScene = /** @class */ (function (_super) {
    __extends(HowToPlayScene, _super);
    function HowToPlayScene() {
        var _this = _super.call(this, {
            key: 'HowToPlayScene'
        }) || this;
        _this.w = main_1.screenWidth();
        _this.h = main_1.screenHeight();
        _this.tutorialText = "Oh, hi there stranger, thank you for stopping by! " +
            "I am going to show you in few lines how to play this game, alright? " +
            "First and foremost, remember this, you are guessing a hidden word in a limited amount of time." +
            "You have 5 lives, however, you can heal yourself if you receive healing item during game which " +
            "drops randomly. There is also another item you can use during game, it is time item that gives " +
            "you 30 more seconds in the current round. You also have 2 weapons to help you in your conquest, " +
            "it is sword and shield. By using sword you have chance to reveal two hidden letters in one try, " +
            "only thing you have to do is actually guess first letter and your bonus letter will open too. " +
            "On the other hand, if you use shield and miss a letter, you will not lose health. Oh yea, you are " +
            "losing health, by guessing wrong letter or if your round timer reaches 0. " +
            "Good luck nubile knight! ";
        return _this;
    }
    HowToPlayScene.prototype.preload = function () {
        // While assets are being loaded
        LoadingScreen_1.LoadingScreen.show(this);
        // Full background image. In MainMenuScene soldier is visible, however in Game Scene
        // different position on a picture is visible, scenery and feel is different
        this.load.image('background', 'assets/images/background_full.jpg');
        this.load.image('tutorial_logo', 'assets/images/tutorial_logo.png');
    };
    HowToPlayScene.prototype.create = function () {
        // Background
        var background = this.add.sprite(this.w, this.h / 2, 'background');
        background.alpha = 0.2;
        background.scaleX = this.h / background.height;
        background.scaleY = this.h / background.height;
        // Tutorial logo
        this.tutorialLogo = this.add.sprite(0, 0, 'tutorial_logo');
        this.tutorialLogo.setPosition(this.w / 2, this.w * 0.19);
        this.tutorialLogo.setDepth(100);
        this.tutorialLogo.setDisplaySize(this.w * 0.75, this.w * 0.25);
        //todo if I am using custom fonts and text view is going out of screen, text view is bugged. Fix it.
        // Tutorial text
        this.text = this.add.text(0, 0, "Oh, hi there stranger, thank you for stopping by! " +
            "I am going to show you in few lines how to play this game, alright? " +
            "First and foremost, remember this, you are guessing a hidden word in a limited amount of time." +
            "You have 5 lives, however, you can heal yourself if you receive healing item during game which " +
            "drops randomly. There is also another item you can use during game, it is time item that gives " +
            "you 30 more seconds in the current round. You also have 2 weapons to help you in your conquest, " +
            "it is sword and shield. By using sword you have chance to reveal two hidden letters in one try, " +
            "only thing you have to do is actually guess first letter and your bonus letter will open too. " +
            "On the other hand, if you use shield and miss a letter, you will not lose health. Oh yea, you are " +
            "losing health, by guessing wrong letter or if your round timer reaches 0. " +
            "Good luck nubile knight! ", Style_1.Style.howToPlay());
        this.text.setShadow(2, 2, 'rgba(0,0,0,0.7)', 2, true, true);
        this.text.setPadding(this.w * 0.2, 0, 0, 0);
        this.text.setFontFamily(Config_1.Config.DISPLAY_FONTS);
        this.text.setFontSize(60);
        this.text.setAlign("center");
        this.text.setFill(Constants_1.Constants.colors("dirty_white"));
        this.text.setPosition(0, this.tutorialLogo.y * 1.65);
        // Giving text a scroll attribute.
        var scrollView = new ScrollView_1.ScrollView();
        scrollView.enableScrolling(this, this.text);
        // Return to main menu btn
        this.returnBtn = this.add.sprite(0, 0, 'return_btn');
        this.returnBtn.setDisplaySize(this.w * 0.14, this.w * 0.14);
        this.returnBtn.setPosition(this.w * 0.12, this.h - this.w * 0.12);
        this.returnBtn.setInteractive();
        SceneTransition_1.SceneTransition.startTransition(this.returnBtn, this, 'MainMenuScene', [this.text, this.returnBtn, this.tutorialLogo]);
    };
    HowToPlayScene.prototype.update = function () {
    };
    return HowToPlayScene;
}(Phaser.Scene));
exports.default = HowToPlayScene;
//# sourceMappingURL=HowToPlay.js.map