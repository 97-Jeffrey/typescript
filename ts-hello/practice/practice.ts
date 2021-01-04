export {};

interface Point{
  x:number,
  y:number
}

function logPoint(p:Point){
  console.log(`X:${p.x}, Y:${p.y}`)
}

const point = {x:12,y:24, z:30};
logPoint(point);


class VirtualPoint{
  x:number;
  y:number;

  constructor(x:number, y:number){
    this.x=x;
    this.y=y;
  }
}
const newPoint: VirtualPoint = new VirtualPoint(10,20);
logPoint(newPoint);


enum Color{
  Red=1,
  Green,
  Blue
}

let colorName :string = Color[2]
console.log(colorName)


let something = 'this is some text';

let strLength = (<string>something).length;
console.log(strLength)

let someone :String ='Jeffrey';