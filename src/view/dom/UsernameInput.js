"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InternalStorage_1 = require("../../service/InternalStorage");
var Constants_1 = require("../../utils/Constants");
var FirebaseDatabase_1 = require("../../database/FirebaseDatabase");
var UsernameInput = /** @class */ (function () {
    function UsernameInput() {
        this._inputField = document.getElementById("username");
    }
    Object.defineProperty(UsernameInput.prototype, "inputField", {
        // Input where user signs his username.
        get: function () {
            return this._inputField;
        },
        set: function (value) {
            this._inputField = value;
        },
        enumerable: true,
        configurable: true
    });
    UsernameInput.prototype.inputFieldVisibility = function (isVisible) {
        this.inputField.style.visibility = isVisible ? "visible" : "hidden";
    };
    UsernameInput.prototype.resetInputFieldValue = function () {
        this.inputField.value = "";
    };
    UsernameInput.prototype.storeInputFieldLocally = function () {
        InternalStorage_1.InternalStorage.storeData(Constants_1.Constants.REF_USERNAME, this.inputField.value.toString());
        var highestScore = Number(InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.BEST_SCORE_REF));
        this.updateFirebaseDatabase(this.inputField.value.toString(), highestScore);
    };
    UsernameInput.prototype.updateScore = function () {
        var username = InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USERNAME);
        var highestScore = Number(InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.BEST_SCORE_REF));
        if (username.length != 0) {
            this.updateFirebaseDatabase(username, highestScore);
        }
    };
    UsernameInput.prototype.updateFirebaseDatabase = function (newUsername, highestScore) {
        var firestore = new FirebaseDatabase_1.FirebaseDatabase();
        if (highestScore != null) {
            firestore.storeGameProgress(newUsername, highestScore);
        }
        firestore = null;
        highestScore = null;
        newUsername = null;
    };
    return UsernameInput;
}());
exports.UsernameInput = UsernameInput;
//# sourceMappingURL=UsernameInput.js.map