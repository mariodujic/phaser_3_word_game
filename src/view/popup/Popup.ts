import {screenHeight, screenWidth} from "../../main";
import {Style} from "../Style";
import {Config} from "../../config/Config";
import {Constants} from "../../utils/Constants";

export class Popup {

  private static view: Phaser.GameObjects.Text;
  private static rectBack: Phaser.GameObjects.Graphics;

  /**
   * @param scene : parent view holder
   * @param message : message to a user
   * @param color : background color of message
   * @param height : position of view
   */

  public static show(scene: Phaser.Scene, message: string, color: string, height: string): void {

    if (this.view !== undefined) {
      this.view.destroy();
      this.rectBack.destroy();
    }

    // Objects
    this.view = scene.add.text(0, 0, message,
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white"), 10));

    this.rectBack = scene.add.graphics();


    //Config
    // Color of a background
    const rectColor = Number(`0x${color.substring(1, color.length)}`);

    // Vertical position of an object
    let viewHeight;
    switch (height) {
      case "high":
        viewHeight = screenHeight() / 4 - this.view.height / 2;
        break;
      case "middle":
        viewHeight = screenHeight() / 2 - this.view.height / 2;
        break;
      case "low":
        viewHeight = screenHeight() / 1.2 - this.view.height / 2;
        break;
      default:
        viewHeight = screenHeight() / 1.2 - this.view.height / 2;
    }

    // Text
    this.view.setPosition(screenWidth() / 2 - this.view.width / 2, viewHeight);
    this.view.setShadow(2, 2, 'rgba(0,0,0,0.7)', 2, true, true);
    // Set front view
    this.view.setDepth(100);

    // Color
    this.rectBack.fillStyle(rectColor);
    this.rectBack.alpha = 0.88;
    // @ts-ignore
    this.rectBack.fillRoundedRect(screenWidth() / 2 - this.view.width / 2 * 1.03, viewHeight,
      this.view.width * 1.03, this.view.height,
      {tl: 25, tr: 25, bl: 25, br: 25});

    // Clearing memory
    let removeViewTimeout = setTimeout(destroyView.bind(this, this.view, this.rectBack),
      2000);

    function destroyView(view, rectBack) {
      view.destroy();
      rectBack.destroy();
      if (!view.visible) {
        // Timeout cleared
        clearTimeout(removeViewTimeout)
      }
      view = null;
    }
  }
}
