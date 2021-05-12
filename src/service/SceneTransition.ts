export class SceneTransition {

  // @ts-ignore
  public static startTransition(view: Phaser.GameObjects, sceneFrom: Phaser.Scene, sceneTo: string, viewArray: Phaser.GameObjects[]) {

    view.on('pointerdown', () => {
      for (var i = 0; i < viewArray.length; i++) {
        viewArray[i].destroy();
      }
      sceneFrom.scene.start(sceneTo);
    });

  }
}
