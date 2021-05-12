import {screenHeight, screenWidth} from "../../main";
import {Style} from "../Style";
import {Config} from "../../config/Config";
import {Constants} from "../../utils/Constants";

export class LoadingScreen {

  public static show(scene: Phaser.Scene) {

    let loadingBackground;
    let progressBar;
    let progressBox;
    let progressContainer;
    let loadingText;

    scene.load.on('start', () => {
      // Loading screen while assets are being loaded
      // Asset is loaded in main menu preload
      loadingBackground = scene.add.sprite(screenWidth() / 2, screenHeight() / 2, 'loading_background');
      loadingBackground.scaleX = screenHeight() / loadingBackground.height;
      loadingBackground.scaleY = screenHeight() / loadingBackground.height;
      // Progress bar
      progressBar = scene.add.graphics();
      progressBox = scene.add.graphics();
      progressBox.fillStyle(0x000000, 0.2);
      progressBox.fillRect(screenWidth() / 2, screenHeight() / 2, 320, 50);
      progressContainer = scene.add.container(-160, 0);
      progressContainer.add(progressBar);
      progressContainer.add(progressBox);
      loadingText = scene.add.text(0, 0, "Loading",
        Style.general(true, screenWidth() / 20, Config.MAIN_FONTS, Constants.colors("dirty_white")));
      loadingText.setPosition(screenWidth() / 2 - loadingText.width / 2, screenHeight() / 2 * 1.143);
    }, this);

    scene.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xEEFFE3, 1);
      progressBar.fillRect(screenWidth() / 2 + 10, screenHeight() / 2 + 10, 300 * value, 30);
    });

    scene.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      progressContainer.destroy();
      loadingBackground.destroy();
      loadingText.destroy();
    });


  }
}
