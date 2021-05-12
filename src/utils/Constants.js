"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.colors = function (type) {
        switch (type) {
            case "red":
                return "#ff4644";
            case "green":
                return "#93c901";
            case "blue":
                return "#205090";
            case "yellow":
                return "#EEC942";
            case "dirty_white":
                return "#d7d3c3";
            case "clean_white":
                return "#ffffff";
            case "black":
                return "#000000";
            case "shadow_grey_alpha":
                return "rgba(97, 94, 83, 0.9)";
            case "shadow_black_alpha":
                return "rgba(0,0,0,0.7)";
            default:
                return "#263238";
        }
    };
    // English Keyboard
    Constants.KEYBOARD = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K",
        "L", "Y", "X", "C", "V", "B", "N", "M"];
    Constants.LOCAL_STORAGE_GAME_ID = "1_medieval ";
    // In game references for consistency
    Constants.EXTRA_ITEM_TIME_REF = "time";
    Constants.EXTRA_ITEM_HEALTH_REF = "health";
    // In game display messages
    // These messages are messages for display view, round history of sorts
    Constants.MESSAGE_HP_LOST = "-1 LIFE";
    Constants.MESSAGE_SWORD_LOST = "-1 SWORD";
    Constants.MESSAGE_SHIELD_LOST = "-1 SHIELD";
    Constants.MESSAGE_ITEM_RECEIVED_TIME = "+TIME ITEM";
    Constants.MESSAGE_ITEM_USED_TIME = "+30 SEC";
    Constants.MESSAGE_ITEM_RECEIVED_HP = "+HEAL ITEM";
    Constants.MESSAGE_ITEM_USED_HP = "HP RESTORED";
    Constants.MESSAGE_SELECT_LETTER = "SELECT LETTER";
    // Local storage
    Constants.REF_USERNAME = Constants.LOCAL_STORAGE_GAME_ID + "username";
    Constants.REF_USER_UNIQUE_ID = Constants.LOCAL_STORAGE_GAME_ID + "unique_id";
    Constants.MUSIC_SETTINGS_REF = Constants.LOCAL_STORAGE_GAME_ID + "music_settings";
    Constants.EFFECTS_SETTINGS_REF = Constants.LOCAL_STORAGE_GAME_ID + "effects_settings";
    Constants.BEST_SCORE_REF = Constants.LOCAL_STORAGE_GAME_ID + "best_score";
    Constants.SOUND_SETTINGS_ON_REF = "music_on";
    Constants.SOUND_SETTINGS_OFF_REF = "music_off";
    // External storage
    Constants.REF_COLLECTION_FB = "game_1_medieval";
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map