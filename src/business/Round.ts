import {GameDataManager} from "../service/GameDataManager";
import {BusinessViewManager} from "./BusinessViewManager";
import {Globals} from "../utils/Globals";
import {DisplayMessageController} from "../controller/message/DisplayMessageController";
import {Items} from "../view/Items";
import {ViewBehaviour} from "../controller/ViewBehaviour";
import {WeaponController} from "../controller/WeaponController";
import {PlayBtnController} from "../controller/PlayBtnController";
import {HealthbarController} from "../controller/HealthbarController";
import {TimerController} from "../controller/timer/TimerController";
import {SoundController} from "../controller/sounds/SoundController";
import {ScoreController} from "../controller/ScoreController";
import {AnimateFactory} from "../view/animations/AnimateFactory";
import {ExtraItemsFactory} from "../controller/bag/ExtraItemsFactory";
import {Constants} from "../utils/Constants";
import {InternalStorage} from "../service/InternalStorage";
import {KeyboardController} from "../controller/keyboard/KeyboardController";
import {LosingDialog} from "../view/popup/LosingDialog";
import {ItemAttributes} from "../view/ItemAttributes";

export class Round {

  private _scene: Phaser.Scene;
  private _inputCharacter: string;
  private wordObjectBusiness: Array<string>;
  private _wordBusinessState: string;
  private _wordBusiness: string;
  private _descriptionBusiness: string;
  private readonly _items: Items;
  private _viewBehaviour: ViewBehaviour;
  private readonly _weaponController: WeaponController;
  private readonly _healthBarController: HealthbarController;
  private readonly _playBtnController: PlayBtnController;
  private readonly _displayMessageController: DisplayMessageController;
  private readonly _timerController: TimerController;
  private readonly _soundController: SoundController;
  private _scoreController: ScoreController;
  private readonly _animationFactory: AnimateFactory;
  private readonly _extraItems: ExtraItemsFactory;
  private _gameDataManager: GameDataManager;
  private readonly _businessViewManager: BusinessViewManager;
  private _keyboardController: KeyboardController;
  private _internalStorage: InternalStorage;
  private _losingDialog: LosingDialog;
  private _itemAttributes: ItemAttributes;

  constructor(scene: Phaser.Scene) {
    // Views
    this._scene = scene;
    this._items = new Items();
    this._animationFactory = new AnimateFactory();
    this._viewBehaviour = new ViewBehaviour(this);
    this._itemAttributes = new ItemAttributes();
    // Business
    this._gameDataManager = new GameDataManager();
    this._gameDataManager.generateRandomObject();
    this.wordObjectBusiness = this._gameDataManager.getRandomObject();
    this._wordBusiness = this.wordObjectBusiness[0];
    this._descriptionBusiness = this.wordObjectBusiness[1];
    this._businessViewManager = new BusinessViewManager(this);
    // Controllers
    this._weaponController = new WeaponController(this._scene, this);
    this._healthBarController = new HealthbarController(this);
    this._timerController = new TimerController(this);
    this._playBtnController = new PlayBtnController(scene, this);
    this._displayMessageController = new DisplayMessageController(this);
    this._soundController = new SoundController(this);
    this._scoreController = new ScoreController(this);
    this._extraItems = new ExtraItemsFactory(this);
    this._keyboardController = new KeyboardController(this);
    // Service
    this._internalStorage = new InternalStorage();
    this._losingDialog = new LosingDialog(this);
  }


  get viewBehaviour(): ViewBehaviour {
    return this._viewBehaviour;
  }

  get itemAttributes(): ItemAttributes {
    return this._itemAttributes;
  }

  get scene(): Phaser.Scene {
    return this._scene;
  }

  get keyboardController(): KeyboardController {
    return this._keyboardController;
  }

  get wordBusiness(): string {
    return this._wordBusiness;
  }

  get businessViewManager(): BusinessViewManager {
    return this._businessViewManager;
  }

  get extraItems(): ExtraItemsFactory {
    return this._extraItems;
  }

  get animationFactory(): AnimateFactory {
    return this._animationFactory;
  }

  setNewWordBusiness() {
    this._gameDataManager.generateRandomObject();
    this.wordObjectBusiness = this._gameDataManager.getRandomObject();
    this._wordBusiness = this.wordObjectBusiness[0];
    this._descriptionBusiness = this.wordObjectBusiness[1];
  }

  get scoreController(): ScoreController {
    return this._scoreController;
  }

  get soundController(): SoundController {
    return this._soundController;
  }

  get healthBarController(): HealthbarController {
    return this._healthBarController;
  }

  get timerController(): TimerController {
    return this._timerController;
  }

  get items(): Items {
    return this._items;
  }

  get playBtnController(): PlayBtnController {
    return this._playBtnController;
  }

  get weaponController(): WeaponController {
    return this._weaponController;
  }

  get wordBusinessState(): string {
    return this._wordBusinessState;
  }

  set wordBusinessState(value: string) {
    this._wordBusinessState = value;
  }

  get displayMessageController(): DisplayMessageController {
    return this._displayMessageController;
  }

  get inputCharacter(): string {
    return this._inputCharacter;
  }

  set inputCharacter(value: string) {
    this._inputCharacter = value;
  }

  getWordBusiness(): string {
    return this._wordBusiness;
  }

  get descriptionBusiness(): string {
    return this._descriptionBusiness;
  }

  listenToRoundEnd() {
    const thisObject = this;
    if (Globals.healthSize === 0) {
      this._losingDialog.show();
      this._viewBehaviour.roundEndView();
      // Clearing extra item from the game if game is finished
      this.extraItems.getItem(Constants.EXTRA_ITEM_TIME_REF).removeItem();
      this.extraItems.getItem(Constants.EXTRA_ITEM_HEALTH_REF).removeItem();
      // Checking if user score is best so far
      // Storing best score if above conditions are met
      this._internalStorage.storeBestScore(this.scoreController.fetchScore());
      // Setting score back to 0
      this.scoreController.resetScore();
      // To stop the loop of this method
      // It does not affect game
      Globals.healthSize = 5;
    } else if (this.items.wordBusinessView.text === this._wordBusiness) {
      thisObject._viewBehaviour.roundEndView();
      thisObject.restartRound();
    }
  }

  restartRound() {
    this.setNewWordBusiness();
    this._viewBehaviour.restartRoundView();
  }

  roundStart() {
    this._viewBehaviour.roundStartView();
  }
}
