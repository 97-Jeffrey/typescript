"use strict";
exports.__esModule = true;
function logPoint(p) {
    console.log("X:" + p.x + ", Y:" + p.y);
}
var point = { x: 12, y: 24, z: 30 };
logPoint(point);
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newPoint = new VirtualPoint(10, 20);
logPoint(newPoint);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
var something = 'this is some text';
var strLength = something.length;
console.log(strLength);
var someone = 'Jeffrey';
