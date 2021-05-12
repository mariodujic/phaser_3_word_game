import 'phaser';

import GameScene from './view/scenes/Game';
import MainMenuScene from './view/scenes/MainMenu';
import HowToPlayScene from "./view/scenes/HowToPlay";
import {OptionsScene} from "./view/scenes/Options";
import RanksScene from "./view/scenes/Ranks";

// todo exiting game over menu button is creating a bug. Last player letter is being player first.

export function screenWidth():number {
  return window.innerWidth > window.innerHeight/3*2? (window.innerHeight/3*2)*window.devicePixelRatio : window.innerWidth*window.devicePixelRatio ;
}
export function screenHeight():number {
  return window.innerHeight*window.devicePixelRatio ;
}
  const config: GameConfig = {
  parent: 'app',
  width: screenWidth(),
  height: screenHeight(),
  backgroundColor: '#221F22',
  "render.autoResize": true,
    images: {
      default: 'assets/images/loading_background.jpg'
    },

  scene: [
    MainMenuScene,
    GameScene,
    HowToPlayScene,
    OptionsScene,
    RanksScene,
  ],

};

var game = new Phaser.Game(config);

export default game;
