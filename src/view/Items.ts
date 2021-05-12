import {Globals} from "../utils/Globals";

export class Items {
  // Sprites
  private _swordImage: Phaser.GameObjects.Sprite;
  private _shieldImage: Phaser.GameObjects.Sprite;
  private _playBtn: Phaser.GameObjects.Sprite;
  private _healthBarView: Array<Phaser.GameObjects.Sprite>;
  private _extraItemAddTime: Phaser.GameObjects.Sprite;
  private _extraItemRecoverFullHealth: Phaser.GameObjects.Sprite;
  private _exitButton: Phaser.GameObjects.Sprite;
  // Text
  private _wordBusinessView: Phaser.GameObjects.Text;
  private _warningTextDisplay: Phaser.GameObjects.Text;
  private _wordDescriptionView: Phaser.GameObjects.Text;
  private _timerView: Phaser.GameObjects.Text;
  private _scoreView: Phaser.GameObjects.Text;
  private _scoreAnimationView: Phaser.GameObjects.Text;
  private _swordAnimationView: Phaser.GameObjects.Text;
  private _shieldAnimationView: Phaser.GameObjects.Text;
  private _keyButtons: Phaser.GameObjects.Text[] = [];
  private _swordAmountView: Phaser.GameObjects.Text;
  private _shieldAmountView: Phaser.GameObjects.Text;
  // Sound
  private _swordEnabledSound: Phaser.Sound.BaseSound;
  private _correctAnswerSound: Phaser.Sound.BaseSound;
  private _wrongAnswerSound: Phaser.Sound.BaseSound;
  private _roundWinSound: Phaser.Sound.BaseSound;
  private _roundLoseSound: Phaser.Sound.BaseSound;
  private _extraItemReceivedSound: Phaser.Sound.BaseSound;
  private _extraItemClickedSound: Phaser.Sound.BaseSound;
  private _swordHitSound: Phaser.Sound.BaseSound;
  private _shieldHitSound: Phaser.Sound.BaseSound;
  private _shieldEnabledSound: Phaser.Sound.BaseSound;
  private _keyboardPressSound: Phaser.Sound.BaseSound;
  private _music: Phaser.Sound.BaseSound;
  // Containers
  private _secretWordContainer: Phaser.GameObjects.Container;
  private _wordDescriptionContainer: Phaser.GameObjects.Container;
  private _swordAnimationViewContainer: Phaser.GameObjects.Container;
  private _shieldAnimationViewContainer: Phaser.GameObjects.Container;
  private _timerViewContainer: Phaser.GameObjects.Container;
  private _infoDisplayBoardContainer: Phaser.GameObjects.Container;
  private _keyContainers: Phaser.GameObjects.Container[] = [];

  get exitButton(): Phaser.GameObjects.Sprite {
    return this._exitButton;
  }

  set exitButton(value: Phaser.GameObjects.Sprite) {
    this._exitButton = value;
  }

  get shieldAmountView(): Phaser.GameObjects.Text {
    return this._shieldAmountView;
  }

  set shieldAmountView(value: Phaser.GameObjects.Text) {
    this._shieldAmountView = value;
  }

  set swordAmountView(value: Phaser.GameObjects.Text) {
    this._swordAmountView = value;
  }

  get swordAmountView(): Phaser.GameObjects.Text {
    return this._swordAmountView;
  }

  get music(): Phaser.Sound.BaseSound {
    return this._music;
  }

  set music(value: Phaser.Sound.BaseSound) {
    this._music = value;
  }

  get keyboardPressSound(): Phaser.Sound.BaseSound {
    return this._keyboardPressSound;
  }

  set keyboardPressSound(value: Phaser.Sound.BaseSound) {
    this._keyboardPressSound = value;
  }

  get shieldEnabledSound(): Phaser.Sound.BaseSound {
    return this._shieldEnabledSound;
  }

  set shieldEnabledSound(value: Phaser.Sound.BaseSound) {
    this._shieldEnabledSound = value;
  }

  get swordHitSound(): Phaser.Sound.BaseSound {
    return this._swordHitSound;
  }

  set swordHitSound(value: Phaser.Sound.BaseSound) {
    this._swordHitSound = value;
  }

  get shieldHitSound(): Phaser.Sound.BaseSound {
    return this._shieldHitSound;
  }

  set shieldHitSound(value: Phaser.Sound.BaseSound) {
    this._shieldHitSound = value;
  }

  get extraItemClickedSound(): Phaser.Sound.BaseSound {
    return this._extraItemClickedSound;
  }

  set extraItemClickedSound(value: Phaser.Sound.BaseSound) {
    this._extraItemClickedSound = value;
  }

  get extraItemReceivedSound(): Phaser.Sound.BaseSound {
    return this._extraItemReceivedSound;
  }

  set extraItemReceivedSound(value: Phaser.Sound.BaseSound) {
    this._extraItemReceivedSound = value;
  }

  get keyButtons(): Phaser.GameObjects.Text[] {
    return this._keyButtons;
  }

  set keyButtons(value: Phaser.GameObjects.Text[]) {
    this._keyButtons = value;
  }

  get keyContainers(): Phaser.GameObjects.Container[] {
    return this._keyContainers;
  }

  set keyContainers(value: Phaser.GameObjects.Container[]) {
    this._keyContainers = value;
  }

  get roundWinSound(): Phaser.Sound.BaseSound {
    return this._roundWinSound;
  }

  set roundWinSound(value: Phaser.Sound.BaseSound) {
    this._roundWinSound = value;
  }

  get roundLoseSound(): Phaser.Sound.BaseSound {
    return this._roundLoseSound;
  }

  set roundLoseSound(value: Phaser.Sound.BaseSound) {
    this._roundLoseSound = value;
  }

  get wrongAnswerSound(): Phaser.Sound.BaseSound {
    return this._wrongAnswerSound;
  }

  set wrongAnswerSound(value: Phaser.Sound.BaseSound) {
    this._wrongAnswerSound = value;
  }

  get correctAnswerSound(): Phaser.Sound.BaseSound {
    return this._correctAnswerSound;
  }

  set correctAnswerSound(value: Phaser.Sound.BaseSound) {
    this._correctAnswerSound = value;
  }

  get infoDisplayBoardContainer(): Phaser.GameObjects.Container {
    return this._infoDisplayBoardContainer;
  }

  set infoDisplayBoardContainer(value: Phaser.GameObjects.Container) {
    this._infoDisplayBoardContainer = value;
  }

  set wordDescriptionContainer(value: Phaser.GameObjects.Container) {
    this._wordDescriptionContainer = value;
  }

  get timerViewContainer(): Phaser.GameObjects.Container {
    return this._timerViewContainer;
  }

  set timerViewContainer(value: Phaser.GameObjects.Container) {
    this._timerViewContainer = value;
  }

  get shieldAnimationViewContainer(): Phaser.GameObjects.Container {
    return this._shieldAnimationViewContainer;
  }

  set shieldAnimationViewContainer(value: Phaser.GameObjects.Container) {
    this._shieldAnimationViewContainer = value;
  }

  get swordAnimationViewContainer(): Phaser.GameObjects.Container {
    return this._swordAnimationViewContainer;
  }

  set swordAnimationViewContainer(value: Phaser.GameObjects.Container) {
    this._swordAnimationViewContainer = value;
  }

  get wordDescriptionContainer(): Phaser.GameObjects.Container {
    return this._wordDescriptionContainer;
  }

  get secretWordContainer(): Phaser.GameObjects.Container {
    return this._secretWordContainer;
  }

  set secretWordContainer(value: Phaser.GameObjects.Container) {
    this._secretWordContainer = value;
  }

  get extraItemRecoverFullHealth(): Phaser.GameObjects.Sprite {
    return this._extraItemRecoverFullHealth;
  }

  set extraItemRecoverFullHealth(value: Phaser.GameObjects.Sprite) {
    this._extraItemRecoverFullHealth = value;
    Globals.extraItemHealthViewX = this._extraItemRecoverFullHealth.x;
  }

  get extraItemAddTime(): Phaser.GameObjects.Sprite {
    return this._extraItemAddTime;
  }

  set extraItemAddTime(value: Phaser.GameObjects.Sprite) {
    this._extraItemAddTime = value;
    Globals.extraItemTimeViewX = this.extraItemAddTime.x;
  }

  get shieldAnimationView(): Phaser.GameObjects.Text {
    return this._shieldAnimationView;
  }

  set shieldAnimationView(value: Phaser.GameObjects.Text) {
    this._shieldAnimationView = value;
    Globals.shieldAnimationViewY = this._shieldAnimationView.y;
  }

  get swordAnimationView(): Phaser.GameObjects.Text {
    return this._swordAnimationView;
  }

  set swordAnimationView(value: Phaser.GameObjects.Text) {
    this._swordAnimationView = value;
    Globals.swordAnimationViewY = this._swordAnimationView.y;
  }

  get scoreAnimationView(): Phaser.GameObjects.Text {
    return this._scoreAnimationView;
  }

  set scoreAnimationView(value: Phaser.GameObjects.Text) {
    this._scoreAnimationView = value;
    Globals.scoreAnimationViewX = this._scoreAnimationView.x;
  }

  get scoreView(): Phaser.GameObjects.Text {
    return this._scoreView;
  }

  set scoreView(value: Phaser.GameObjects.Text) {
    this._scoreView = value;
  }

  get swordEnabledSound(): Phaser.Sound.BaseSound {
    return this._swordEnabledSound;
  }

  set swordEnabledSound(value: Phaser.Sound.BaseSound) {
    this._swordEnabledSound = value;
  }

  get timerView(): Phaser.GameObjects.Text {
    return this._timerView;
  }

  set timerView(value: Phaser.GameObjects.Text) {
    this._timerView = value;
  }

  get wordDescriptionView(): Phaser.GameObjects.Text {
    return this._wordDescriptionView;
  }

  set wordDescriptionView(value: Phaser.GameObjects.Text) {
    this._wordDescriptionView = value;
  }

  get playBtn(): Phaser.GameObjects.Sprite {
    return this._playBtn;
  }

  set playBtn(value: Phaser.GameObjects.Sprite) {
    this._playBtn = value;
  }

  get healthBarView(): Array<Phaser.GameObjects.Sprite> {
    return this._healthBarView;
  }

  set healthBarView(value: Array<Phaser.GameObjects.Sprite>) {
    this._healthBarView = value;
  }

  get warningTextDisplay(): Phaser.GameObjects.Text {
    return this._warningTextDisplay;
  }

  set warningTextDisplay(value: Phaser.GameObjects.Text) {
    this._warningTextDisplay = value;
  }

  get wordBusinessView(): Phaser.GameObjects.Text {
    return this._wordBusinessView;
  }

  set wordBusinessView(value: Phaser.GameObjects.Text) {
    this._wordBusinessView = value;
  }

  get swordImage(): Phaser.GameObjects.Sprite {
    return this._swordImage;
  }

  set swordImage(value: Phaser.GameObjects.Sprite) {
    this._swordImage = value;
  }

  get shieldImage(): Phaser.GameObjects.Sprite {
    return this._shieldImage;
  }

  set shieldImage(value: Phaser.GameObjects.Sprite) {
    this._shieldImage = value;
  }
}
