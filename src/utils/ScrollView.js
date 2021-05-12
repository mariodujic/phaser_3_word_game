"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollView = /** @class */ (function () {
    function ScrollView() {
    }
    ScrollView.prototype.enableScrolling = function (scene, textView) {
        textView.setInteractive({ draggable: true });
        scene.input.setDraggable(textView, true);
        textView.input.draggable = true;
        // Scrolling text
        var previousPointerY;
        textView.on('drag', function (pointer, dragX, dragY) {
            textView.y += (pointer.worldY - previousPointerY);
            previousPointerY = pointer.worldY;
        }, this);
        textView.on('dragstart', function (pointer, dragX, dragY) {
            previousPointerY = pointer.worldY;
        });
    };
    return ScrollView;
}());
exports.ScrollView = ScrollView;
//# sourceMappingURL=ScrollView.js.map