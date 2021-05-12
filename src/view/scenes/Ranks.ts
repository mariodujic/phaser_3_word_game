import {screenHeight, screenWidth} from "../../main";
import {Style} from "../Style";
import {Config} from "../../config/Config";
import {FirebaseDatabase} from "../../database/FirebaseDatabase";
import {SceneTransition} from "../../service/SceneTransition";
import {InternalStorage} from "../../service/InternalStorage";
import {Constants} from "../../utils/Constants";
import {ScrollView} from "../../utils/ScrollView";


class RanksScene extends Phaser.Scene {

  private logo: Phaser.GameObjects.Sprite;
  private rankList: Phaser.GameObjects.Text;

  private firebaseDatabase: FirebaseDatabase;


  constructor() {
    super({
      key: 'RanksScene'
    });

    this.firebaseDatabase = new FirebaseDatabase();
  }

  preload() {
    this.load.image('ranks_logo', 'assets/images/ranks_logo.png');
  }

  create() {
    // Background
    const background = this.add.sprite(screenWidth(), screenHeight() / 2, 'background');
    background.alpha = 0.2;
    background.scaleX = screenHeight() / background.height;
    background.scaleY = screenHeight() / background.height;
    // Logo
    this.logo = this.add.sprite(0, 0, 'ranks_logo');
    this.logo.setPosition(screenWidth() / 2, screenWidth() * 0.35);
    this.logo.setDisplaySize(screenWidth() * 0.75, screenWidth() * 0.25);
    this.logo.depth = 200;
    // Rank list text
    this.rankList = this.add.text(0, 0, '',
      Style.general(false, screenWidth() / 17, Config.DISPLAY_FONTS, "#ffffff"));
    // Loading ranked data.
    this.firebaseDatabase.retrieveLadderRankings().then(this.loadData.bind(this));
    // Return to main menu btn
    const returnBtn = this.add.sprite(0, 0, 'return_btn');
    returnBtn.setDisplaySize(screenWidth() * 0.14, screenWidth() * 0.14);
    returnBtn.setPosition(screenWidth() * 0.12, screenWidth() * 0.12);
    returnBtn.setInteractive();
    // OnClick to MainMenu scene again. Destroying all the views from OptionScene
    SceneTransition.startTransition(returnBtn, this, 'MainMenuScene',
      [this.logo, this.rankList, returnBtn]);

  }

  private loadData(values) {
    let rankings: string = "";
    let yourRanking: string = "";
    let username = InternalStorage.loadData(Constants.REF_USERNAME);
    for (let i in values) {
      rankings += `${Number(i) + 1}. ${values[i]["username"]}  ${values[i]["score"]} points\n`;
      if (values[i]["username"] === username) {
        yourRanking = `You are ranked ${Number(i) + 1}.\n****************\n`;
      }
    }
    if (rankings === "") {
      rankings = "Can not retrieve data.";
    }
    this.rankList.setText(yourRanking + rankings);
    this.rankList.setPosition(screenWidth() / 2 - this.rankList.width / 2, this.logo.y * 1.4);
    // Giving text a scroll attribute.
    let scrollView = new ScrollView();
    scrollView.enableScrolling(this, this.rankList);
  }

  update() {
  }

}

export default RanksScene;
