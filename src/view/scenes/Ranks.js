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
var Config_1 = require("../../config/Config");
var FirebaseDatabase_1 = require("../../database/FirebaseDatabase");
var SceneTransition_1 = require("../../service/SceneTransition");
var InternalStorage_1 = require("../../service/InternalStorage");
var Constants_1 = require("../../utils/Constants");
var ScrollView_1 = require("../../utils/ScrollView");
var RanksScene = /** @class */ (function (_super) {
    __extends(RanksScene, _super);
    function RanksScene() {
        var _this = _super.call(this, {
            key: 'RanksScene'
        }) || this;
        _this.firebaseDatabase = new FirebaseDatabase_1.FirebaseDatabase();
        return _this;
    }
    RanksScene.prototype.preload = function () {
        this.load.image('ranks_logo', 'assets/images/ranks_logo.png');
    };
    RanksScene.prototype.create = function () {
        // Background
        var background = this.add.sprite(main_1.screenWidth(), main_1.screenHeight() / 2, 'background');
        background.alpha = 0.2;
        background.scaleX = main_1.screenHeight() / background.height;
        background.scaleY = main_1.screenHeight() / background.height;
        // Logo
        this.logo = this.add.sprite(0, 0, 'ranks_logo');
        this.logo.setPosition(main_1.screenWidth() / 2, main_1.screenWidth() * 0.35);
        this.logo.setDisplaySize(main_1.screenWidth() * 0.75, main_1.screenWidth() * 0.25);
        this.logo.depth = 200;
        // Rank list text
        this.rankList = this.add.text(0, 0, '', Style_1.Style.general(false, main_1.screenWidth() / 17, Config_1.Config.DISPLAY_FONTS, "#ffffff"));
        // Loading ranked data.
        this.firebaseDatabase.retrieveLadderRankings().then(this.loadData.bind(this));
        // Return to main menu btn
        var returnBtn = this.add.sprite(0, 0, 'return_btn');
        returnBtn.setDisplaySize(main_1.screenWidth() * 0.14, main_1.screenWidth() * 0.14);
        returnBtn.setPosition(main_1.screenWidth() * 0.12, main_1.screenWidth() * 0.12);
        returnBtn.setInteractive();
        // OnClick to MainMenu scene again. Destroying all the views from OptionScene
        SceneTransition_1.SceneTransition.startTransition(returnBtn, this, 'MainMenuScene', [this.logo, this.rankList, returnBtn]);
    };
    RanksScene.prototype.loadData = function (values) {
        var rankings = "";
        var yourRanking = "";
        var username = InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USERNAME);
        for (var i in values) {
            rankings += Number(i) + 1 + ". " + values[i]["username"] + "  " + values[i]["score"] + " points\n";
            if (values[i]["username"] === username) {
                yourRanking = "You are ranked " + (Number(i) + 1) + ".\n****************\n";
            }
        }
        if (rankings === "") {
            rankings = "Can not retrieve data.";
        }
        this.rankList.setText(yourRanking + rankings);
        this.rankList.setPosition(main_1.screenWidth() / 2 - this.rankList.width / 2, this.logo.y * 1.4);
        // Giving text a scroll attribute.
        var scrollView = new ScrollView_1.ScrollView();
        scrollView.enableScrolling(this, this.rankList);
    };
    RanksScene.prototype.update = function () {
    };
    return RanksScene;
}(Phaser.Scene));
exports.default = RanksScene;
//# sourceMappingURL=Ranks.js.map