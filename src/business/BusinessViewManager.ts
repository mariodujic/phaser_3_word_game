import {Conditions} from "./Conditions";
import {Globals} from "../utils/Globals";
import {Round} from "./Round";
import {Config} from "../config/Config";

export class BusinessViewManager {

  static playedCharacters: Array<string> = [];
  private static _wordCurrentState: string;
  private _newRound: Round;


  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  static get wordCurrentState(): string {
    return this._wordCurrentState;
  }

  static set wordCurrentState(value: string) {
    this._wordCurrentState = value;
  }

  public static wordBusinessState(wordBusiness: string): string {
    // Initializing variable that will be a state of our word in a view
    let businessWordState: string = "";
    // Adding selected character a a player character arrayList

    // Pushing " " if new word has empty character. Logic of separating 1 string
    // into multiple words while still keeping it 1 string large
    if (BusinessViewManager.playedCharacters.length === 0) {
      if (Conditions.hasMultipleWords(wordBusiness)) {
        BusinessViewManager.playedCharacters.push(" ");
      }
    }


    console.log(`Played characters: ${BusinessViewManager.playedCharacters}`);
    // Looping all player letters and business word while revealing existing letters
    for (let i = 0; i < wordBusiness.length; i++) {
      let x: string = ".";
      if (BusinessViewManager.playedCharacters.indexOf(wordBusiness.charAt(i)) > -1) {
        x = wordBusiness.charAt(i);
      } else {
        x = Config.HID_CHAR;
      }
      // Adding belonging character to a final business word string
      businessWordState += x;
    }
    this.wordCurrentState = businessWordState;
    return businessWordState;
  }

  newWordViewState(): string {

    if (Conditions.isSwordClicked && Conditions.letterExists && !Conditions.isLetterAlreadyPlayed) {
      BusinessViewManager.addBonusCharacter(this._newRound.inputCharacter, this._newRound.getWordBusiness());
    }

    this._newRound.wordBusinessState = BusinessViewManager.wordBusinessState(this._newRound.getWordBusiness());
    if (this._newRound.inputCharacter !== undefined && !Globals.isRoundOver) {
      // Adding played character to a round played characters array.
      // We are initializing hidden characters with "" character.
      if (this._newRound.inputCharacter !== "") {
        BusinessViewManager.playedCharacters.push(this._newRound.inputCharacter);
        this._newRound.timerController.startTimer();
      }
    }
    return BusinessViewManager.wordBusinessState(this._newRound.getWordBusiness());
  }

  // Adding another character to a playedCharacters array if sword is being used
  public static addBonusCharacter(character: string, wordBusiness: string): void {
    let bonusCharIndexArray: Array<number> = [];
    for (let i = 0; i < wordBusiness.length; i++) {
      if (this.wordCurrentState !== undefined) {
        if (this.wordCurrentState.charAt(i) === Config.HID_CHAR && wordBusiness.charAt(i) !== character) {
          bonusCharIndexArray.push(i);
        }
      }
    }
    const bonusCharacter = wordBusiness.charAt(bonusCharIndexArray[Math.floor(Math.random() * bonusCharIndexArray.length)]);
    this.playedCharacters.push(bonusCharacter)
  }
}
