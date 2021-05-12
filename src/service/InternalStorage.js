"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../utils/Constants");
var FirebaseDatabase_1 = require("../database/FirebaseDatabase");
var InternalStorage = /** @class */ (function () {
    function InternalStorage() {
    }
    InternalStorage.prototype.getBestScore = function () {
        return Number(localStorage.getItem(Constants_1.Constants.BEST_SCORE_REF));
    };
    InternalStorage.prototype.storeBestScore = function (currentScore) {
        var username = InternalStorage.loadData(Constants_1.Constants.REF_USERNAME);
        if (currentScore > this.getBestScore()) {
            localStorage.setItem(Constants_1.Constants.BEST_SCORE_REF, currentScore.toString());
            if (username != null) {
                var firebase_1 = new FirebaseDatabase_1.FirebaseDatabase();
                firebase_1.storeGameProgress(username, currentScore);
                firebase_1 = null;
            }
        }
    };
    InternalStorage.hasSound = function (type) {
        var fetch = localStorage.getItem(type);
        if (fetch === Constants_1.Constants.SOUND_SETTINGS_ON_REF) {
            return true;
        }
        else
            return fetch !== Constants_1.Constants.SOUND_SETTINGS_OFF_REF;
    };
    Object.defineProperty(InternalStorage, "musicSound", {
        set: function (value) {
            localStorage.setItem(Constants_1.Constants.MUSIC_SETTINGS_REF, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalStorage, "soundEffect", {
        set: function (value) {
            localStorage.setItem(Constants_1.Constants.EFFECTS_SETTINGS_REF, value);
        },
        enumerable: true,
        configurable: true
    });
    InternalStorage.storeData = function (key, value) {
        localStorage.setItem(key, value);
    };
    InternalStorage.loadData = function (key) {
        return localStorage.getItem(key);
    };
    return InternalStorage;
}());
exports.InternalStorage = InternalStorage;
//# sourceMappingURL=InternalStorage.js.map