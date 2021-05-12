import {Config} from "../config/Config";
import {screenWidth} from "../main";
import {Constants} from "../utils/Constants";

export class Style {

  public static general(isBold: boolean, fontSize: number, fontType: string, fontColor: string, padding?: number) {
    const fontStyle: string = isBold ? "bold " : "";
    const padd = padding != undefined ? padding : 0;
    return {
      font: fontStyle + "" + fontSize + "px " + fontType,
      fill: fontColor,
      align: "center",
      padding: padd,
      wordWrap: {width: screenWidth() * 0.97}
    }
  }

  public static timer(): any {
    return {
      font: "bold " + screenWidth() / 8 + "px " + Config.MAIN_FONTS,
      fill: Constants.colors("dirty_white"),
      wordWrap: true,
      wordWrapWidth: screenWidth(),
      align: "right"
    }
  }

  public static businessWordDescription() {
    return {
      font: "bold " + screenWidth() / 22 + "px " + Config.SIDE_MENU_FONTS,
      fill: Constants.colors("dirty_white"),
      wordWrap: {width: screenWidth() * 0.8},
      align: "center"
    }
  }

  public static howToPlay() {
    return {
      wordWrap: {width: screenWidth() * 0.60}
    }
  }

  public static scoreMessage() {
    return {
      font: "bold " + screenWidth() / 19 + "px " + Config.SIDE_MENU_FONTS,
      fill: Constants.colors("dirty_white"),
      wordWrap: {width: screenWidth() * 0.50},
      align: "center"
    }
  }

  public static displayBoard() {
    return {
      font: "bold " + screenWidth() / 40 + "px " + Config.MAIN_FONTS,
      fill: Constants.colors("dirty_white"),
      wordWrap: true,
      wordWrapWidth: 10,
      align: "left"
    }
  }

  public static setAttribute(shadowViews: Phaser.GameObjects.Text[], interactiveViews: Phaser.GameObjects.Text[]): void {
    // Adding shadow to a views from an array
    for (let i in shadowViews) {
      shadowViews[i].setShadow(-3, -3, Constants.colors("black"), 2, true, true);
    }
    // Adding interaction to a views from an array
    for (let i in interactiveViews) {
      interactiveViews[i].setInteractive();
    }
  }
}
