"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var words_en_json_1 = __importDefault(require("../../assets/data/words_en.json"));
/*
Fetching data from a JSON and sending it to a GameScene and into a secret word view
 */
var GameDataManager = /** @class */ (function () {
    function GameDataManager() {
    }
    GameDataManager.prototype.generateRandomObject = function () {
        var number = this.randomNumber();
        this._randomWordArray = [words_en_json_1.default[number].word, words_en_json_1.default[number].description];
    };
    GameDataManager.prototype.randomNumber = function () {
        return Math.floor(Math.random() * words_en_json_1.default.length) + 0;
    };
    GameDataManager.prototype.getRandomObject = function () {
        return this._randomWordArray;
    };
    return GameDataManager;
}());
exports.GameDataManager = GameDataManager;
//# sourceMappingURL=GameDataManager.js.map