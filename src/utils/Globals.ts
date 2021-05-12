export class Globals {

  // General game static variables used for view control
  private static _healthSize;
  private static _swordAmount;
  private static _shieldAmount;
  private static _roundTime;
  private static _score;
  private static _isRoundOver;
  // View initial positions for Animation purposes
  private static _scoreAnimationViewX;
  private static _swordAnimationViewY;
  private static _shieldAnimationViewY;
  private static _extraItemTimeViewX;
  private static _extraItemHealthViewX;
  // Bag items existence
  private static _hasExtraItemAddTime: boolean;
  private static _hasExtraItemRecoverHealth: boolean;


  static get extraItemTimeViewX() {
    return this._extraItemTimeViewX;
  }

  static set extraItemTimeViewX(value) {
    this._extraItemTimeViewX = value;
  }

  static get extraItemHealthViewX() {
    return this._extraItemHealthViewX;
  }

  static set extraItemHealthViewX(value) {
    this._extraItemHealthViewX = value;
  }

  static get hasExtraItemRecoverHealth() {
    return this._hasExtraItemRecoverHealth;
  }

  static set hasExtraItemRecoverHealth(value) {
    this._hasExtraItemRecoverHealth = value;
  }

  static get hasExtraItemAddTime() {
    return this._hasExtraItemAddTime;
  }

  static set hasExtraItemAddTime(value) {
    this._hasExtraItemAddTime = value;
  }

  static get shieldAnimationViewY() {
    return this._shieldAnimationViewY;
  }

  static set shieldAnimationViewY(value) {
    this._shieldAnimationViewY = value;
  }

  static get swordAnimationViewY() {
    return this._swordAnimationViewY;
  }

  static set swordAnimationViewY(value) {
    this._swordAnimationViewY = value;
  }

  static get scoreAnimationViewX() {
    return this._scoreAnimationViewX;
  }

  static set scoreAnimationViewX(value) {
    this._scoreAnimationViewX = value;
  }

  static get isRoundOver() {
    return this._isRoundOver;
  }

  static set isRoundOver(value) {
    this._isRoundOver = value;
  }

  static get score() {
    return this._score;
  }

  static set score(value) {
    this._score = value;
  }

  static get roundTime() {
    return this._roundTime;
  }

  static set roundTime(value) {
    this._roundTime = value;
  }

  static get swordAmount() {
    return this._swordAmount;
  }

  static set swordAmount(value) {
    this._swordAmount = value;
  }

  static get shieldAmount() {
    return this._shieldAmount;
  }

  static set shieldAmount(value) {
    this._shieldAmount = value;
  }

  static get healthSize() {
    return this._healthSize;
  }

  static set healthSize(value) {
    this._healthSize = value;
  }
}
