let count = 5;
let a;
let b;
let c;
let d;
let e = [1, 2, 3, 4, 5];
let f = [1, true, 'kjdxfe', null];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Blue;
var E1;
(function (E1) {
    E1[E1["X"] = 1] = "X";
    E1[E1["Y"] = 2] = "Y";
    E1[E1["Z"] = 3] = "Z";
})(E1 || (E1 = {}));
;
console.log(E1.Z);
export {};
