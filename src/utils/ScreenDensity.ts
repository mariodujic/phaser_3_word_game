import game from "../main";

export class ScreenDensity {

  public resizeScreen(): void {
    let canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
    let wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width + "px";
      canvas.style.height = (width / ratio) + "px";
    } else {
      canvas.style.width = (height * ratio) + "px";
      canvas.style.height = height + "px";
    }
  }
}