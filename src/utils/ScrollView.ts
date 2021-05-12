import {screenHeight} from "../main";

export class ScrollView {

  public enableScrolling(scene: Phaser.Scene, textView: Phaser.GameObjects.Text) {
    
    textView.setInteractive({draggable: true});
    scene.input.setDraggable(textView, true);
    textView.input.draggable = true;
    // Scrolling text
    let previousPointerY;
    textView.on('drag', function (pointer, dragX, dragY) {

      textView.y += (pointer.worldY - previousPointerY);
      previousPointerY = pointer.worldY;
    }, this);

    textView.on('dragstart', function (pointer, dragX, dragY) {
      previousPointerY = pointer.worldY;
    });

  }
}
