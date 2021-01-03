"use strict";
exports.__esModule = true;
var count = 5;
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, true, 'kjdxfe', null];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
var E1;
(function (E1) {
    E1[E1["X"] = 1] = "X";
    E1[E1["Y"] = 2] = "Y";
    E1[E1["Z"] = 3] = "Z";
})(E1 || (E1 = {}));
;
console.log(E1.Z);
