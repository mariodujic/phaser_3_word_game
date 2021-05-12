export class Constants {

  public static colors(type: string): string {

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
  }

  // English Keyboard
  public static KEYBOARD = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K",
    "L", "Y", "X", "C", "V", "B", "N", "M"];

  private static LOCAL_STORAGE_GAME_ID = "1_medieval ";
  // In game references for consistency
  public static EXTRA_ITEM_TIME_REF: string = "time";
  public static EXTRA_ITEM_HEALTH_REF: string = "health";
  // In game display messages
  // These messages are messages for display view, round history of sorts
  public static MESSAGE_HP_LOST = "-1 LIFE";
  public static MESSAGE_SWORD_LOST = "-1 SWORD";
  public static MESSAGE_SHIELD_LOST = "-1 SHIELD";
  public static MESSAGE_ITEM_RECEIVED_TIME = "+TIME ITEM";
  public static MESSAGE_ITEM_USED_TIME = "+30 SEC";
  public static MESSAGE_ITEM_RECEIVED_HP = "+HEAL ITEM";
  public static MESSAGE_ITEM_USED_HP = "HP RESTORED";
  public static MESSAGE_SELECT_LETTER = "SELECT LETTER";

  // Local storage
  public static REF_USERNAME = Constants.LOCAL_STORAGE_GAME_ID + "username";
  public static REF_USER_UNIQUE_ID: string = Constants.LOCAL_STORAGE_GAME_ID + "unique_id";
  public static MUSIC_SETTINGS_REF: string = Constants.LOCAL_STORAGE_GAME_ID + "music_settings";
  public static EFFECTS_SETTINGS_REF: string = Constants.LOCAL_STORAGE_GAME_ID + "effects_settings";
  public static BEST_SCORE_REF: string = Constants.LOCAL_STORAGE_GAME_ID + "best_score";
  public static SOUND_SETTINGS_ON_REF: string = "music_on";
  public static SOUND_SETTINGS_OFF_REF: string = "music_off";
  // External storage
  static REF_COLLECTION_FB: string = "game_1_medieval";
}
