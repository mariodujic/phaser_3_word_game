import {screenHeight, screenWidth} from "../main";

export class ItemAttributes {

  private readonly width: number;
  private height: number;

  private readonly _swordSize: number;
  private readonly _playBtnSize: number[];

  constructor() {
    this.width = screenWidth();
    this.height = screenHeight();
    // Weapon size
    const swordMaxSize = this.width * 0.3;
    const swordScale = 0.3;
    this._swordSize = this.width * swordScale > swordMaxSize ? swordMaxSize : this.width * swordScale;
    // Play button size
    const playBtnMaxW = this.width * 0.35;
    const playBtnMaxH = this.width * 0.22;
    const playBtnScaleWidth = 0.35;
    const playBtnScaleHeight = 0.21;
    const playBtnWidth = this.width * playBtnScaleWidth > playBtnMaxW ? playBtnMaxW : this.width * playBtnScaleWidth;
    const playBtnHeight = this.width * playBtnScaleHeight > playBtnMaxH ? playBtnMaxH : this.width * playBtnScaleHeight;
    this._playBtnSize = [playBtnWidth, playBtnHeight];

  }

  getWeaponSize(): number {
    return this._swordSize;
  }

  getPlayBtnSize(): number[] {
    return this._playBtnSize;
  }

}
