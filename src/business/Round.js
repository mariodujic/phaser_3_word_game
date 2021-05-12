"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataManager_1 = require("../service/GameDataManager");
var BusinessViewManager_1 = require("./BusinessViewManager");
var Globals_1 = require("../utils/Globals");
var DisplayMessageController_1 = require("../controller/message/DisplayMessageController");
var Items_1 = require("../view/Items");
var ViewBehaviour_1 = require("../controller/ViewBehaviour");
var WeaponController_1 = require("../controller/WeaponController");
var PlayBtnController_1 = require("../controller/PlayBtnController");
var HealthbarController_1 = require("../controller/HealthbarController");
var TimerController_1 = require("../controller/timer/TimerController");
var SoundController_1 = require("../controller/sounds/SoundController");
var ScoreController_1 = require("../controller/ScoreController");
var AnimateFactory_1 = require("../view/animations/AnimateFactory");
var ExtraItemsFactory_1 = require("../controller/bag/ExtraItemsFactory");
var Constants_1 = require("../utils/Constants");
var InternalStorage_1 = require("../service/InternalStorage");
var KeyboardController_1 = require("../controller/keyboard/KeyboardController");
var LosingDialog_1 = require("../view/popup/LosingDialog");
var ItemAttributes_1 = require("../view/ItemAttributes");
var Round = /** @class */ (function () {
    function Round(scene) {
        // Views
        this._scene = scene;
        this._items = new Items_1.Items();
        this._animationFactory = new AnimateFactory_1.AnimateFactory();
        this._viewBehaviour = new ViewBehaviour_1.ViewBehaviour(this);
        this._itemAttributes = new ItemAttributes_1.ItemAttributes();
        // Business
        this._gameDataManager = new GameDataManager_1.GameDataManager();
        this._gameDataManager.generateRandomObject();
        this.wordObjectBusiness = this._gameDataManager.getRandomObject();
        this._wordBusiness = this.wordObjectBusiness[0];
        this._descriptionBusiness = this.wordObjectBusiness[1];
        this._businessViewManager = new BusinessViewManager_1.BusinessViewManager(this);
        // Controllers
        this._weaponController = new WeaponController_1.WeaponController(this._scene, this);
        this._healthBarController = new HealthbarController_1.HealthbarController(this);
        this._timerController = new TimerController_1.TimerController(this);
        this._playBtnController = new PlayBtnController_1.PlayBtnController(scene, this);
        this._displayMessageController = new DisplayMessageController_1.DisplayMessageController(this);
        this._soundController = new SoundController_1.SoundController(this);
        this._scoreController = new ScoreController_1.ScoreController(this);
        this._extraItems = new ExtraItemsFactory_1.ExtraItemsFactory(this);
        this._keyboardController = new KeyboardController_1.KeyboardController(this);
        // Service
        this._internalStorage = new InternalStorage_1.InternalStorage();
        this._losingDialog = new LosingDialog_1.LosingDialog(this);
    }
    Object.defineProperty(Round.prototype, "viewBehaviour", {
        get: function () {
            return this._viewBehaviour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "itemAttributes", {
        get: function () {
            return this._itemAttributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "keyboardController", {
        get: function () {
            return this._keyboardController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "wordBusiness", {
        get: function () {
            return this._wordBusiness;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "businessViewManager", {
        get: function () {
            return this._businessViewManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "extraItems", {
        get: function () {
            return this._extraItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "animationFactory", {
        get: function () {
            return this._animationFactory;
        },
        enumerable: true,
        configurable: true
    });
    Round.prototype.setNewWordBusiness = function () {
        this._gameDataManager.generateRandomObject();
        this.wordObjectBusiness = this._gameDataManager.getRandomObject();
        this._wordBusiness = this.wordObjectBusiness[0];
        this._descriptionBusiness = this.wordObjectBusiness[1];
    };
    Object.defineProperty(Round.prototype, "scoreController", {
        get: function () {
            return this._scoreController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "soundController", {
        get: function () {
            return this._soundController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "healthBarController", {
        get: function () {
            return this._healthBarController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "timerController", {
        get: function () {
            return this._timerController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "playBtnController", {
        get: function () {
            return this._playBtnController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "weaponController", {
        get: function () {
            return this._weaponController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "wordBusinessState", {
        get: function () {
            return this._wordBusinessState;
        },
        set: function (value) {
            this._wordBusinessState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "displayMessageController", {
        get: function () {
            return this._displayMessageController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Round.prototype, "inputCharacter", {
        get: function () {
            return this._inputCharacter;
        },
        set: function (value) {
            this._inputCharacter = value;
        },
        enumerable: true,
        configurable: true
    });
    Round.prototype.getWordBusiness = function () {
        return this._wordBusiness;
    };
    Object.defineProperty(Round.prototype, "descriptionBusiness", {
        get: function () {
            return this._descriptionBusiness;
        },
        enumerable: true,
        configurable: true
    });
    Round.prototype.listenToRoundEnd = function () {
        var thisObject = this;
        if (Globals_1.Globals.healthSize === 0) {
            this._losingDialog.show();
            this._viewBehaviour.roundEndView();
            // Clearing extra item from the game if game is finished
            this.extraItems.getItem(Constants_1.Constants.EXTRA_ITEM_TIME_REF).removeItem();
            this.extraItems.getItem(Constants_1.Constants.EXTRA_ITEM_HEALTH_REF).removeItem();
            // Checking if user score is best so far
            // Storing best score if above conditions are met
            this._internalStorage.storeBestScore(this.scoreController.fetchScore());
            // Setting score back to 0
            this.scoreController.resetScore();
            // To stop the loop of this method
            // It does not affect game
            Globals_1.Globals.healthSize = 5;
        }
        else if (this.items.wordBusinessView.text === this._wordBusiness) {
            thisObject._viewBehaviour.roundEndView();
            thisObject.restartRound();
        }
    };
    Round.prototype.restartRound = function () {
        this.setNewWordBusiness();
        this._viewBehaviour.restartRoundView();
    };
    Round.prototype.roundStart = function () {
        this._viewBehaviour.roundStartView();
    };
    return Round;
}());
exports.Round = Round;
//# sourceMappingURL=Round.js.map