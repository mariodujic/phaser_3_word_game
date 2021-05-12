export class Conditions {

  private static _letterExists: boolean;
  private static _isLetterAlreadyPlayed: boolean;
  private static _isSwordClicked: boolean;
  private static _isShieldClicked: boolean;

  static hasMultipleWords(businessWord: string): boolean {
    return !!businessWord.match(" ");
  }

  static get isLetterAlreadyPlayed(): boolean {
    return this._isLetterAlreadyPlayed;
  }

  static set isLetterAlreadyPlayed(value: boolean) {
    this._isLetterAlreadyPlayed = value;
  }

  static get isSwordClicked(): boolean {
    return this._isSwordClicked;
  }

  static set isSwordClicked(value: boolean) {
    this._isSwordClicked = value;
  }

  static get isShieldClicked(): boolean {
    return this._isShieldClicked;
  }

  static set isShieldClicked(value: boolean) {
    this._isShieldClicked = value;
  }

  static get letterExists(): boolean {
    return this._letterExists;
  }


  static set letterExists(value: boolean) {
    this._letterExists = value;
  }

  static wordBusinessContainsLetter(character: string, wordBusiness: string) {
    this.letterExists = wordBusiness.search(character) > -1;
  }

  static isLetterPlayed(character: string, wordBusinessState: string) {
    this.isLetterAlreadyPlayed = wordBusinessState.search(character) > -1;
  }
}
