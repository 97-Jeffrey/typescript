var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x);
    };
    ;
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.draw();
