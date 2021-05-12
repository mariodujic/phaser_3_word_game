export class Config {

  // Font names are file names without .ttf extension
  static DISPLAY_FONTS: string = "Courgette-Regular";
  static MAIN_FONTS: string = "EUR42";
  static MENU_FONTS: string = "Rubik-Black";
  static SIDE_MENU_FONTS: string = "Rubik-Bold";
  static CHANCE_OF_ITEM_DROP: number = 15;

  // Speed of animations that appear when user loses sword, shield or score changes
  static ANIM_SPEED: number = 0.8;
  static ALPHA_SPEED: number = 0.01;

  // Time added after user has used extra time item
  public static EXTRA_TIME: number = 30;

  // Hidden word character while it's not revealed
  public static HID_CHAR: string = "•";
  // Firebase credentials
  public static readonly FIREBASE_CONFIG = {
    apiKey: "AIzaSyBrUzBkCGrbaERysl7HtzSHnHdViH_tuPQ",
    authDomain: "fir-practice-3e7e2.firebaseapp.com",
    databaseURL: "https://fir-practice-3e7e2.firebaseio.com",
    projectId: "fir-practice-3e7e2",
    storageBucket: "fir-practice-3e7e2.appspot.com",
    messagingSenderId: "931165853904"
  };
}
