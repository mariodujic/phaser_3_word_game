"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneTransition = /** @class */ (function () {
    function SceneTransition() {
    }
    // @ts-ignore
    SceneTransition.startTransition = function (view, sceneFrom, sceneTo, viewArray) {
        view.on('pointerdown', function () {
            for (var i = 0; i < viewArray.length; i++) {
                viewArray[i].destroy();
            }
            sceneFrom.scene.start(sceneTo);
        });
    };
    return SceneTransition;
}());
exports.SceneTransition = SceneTransition;
//# sourceMappingURL=SceneTransition.js.map