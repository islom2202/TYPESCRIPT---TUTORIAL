"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello world!';
console.log(message);
// Variable declarations
var name;
name = "islomjon";
console.log(name);
var lastname = "Saidaliev";
var lastname = "Saidzoda";
console.log(lastname);
// Variable types
var isCompleted = true;
console.log(isCompleted);
var myBeloved = "Dilnoza";
var sentence = "my love is ".concat(myBeloved, ", who captured my heart");
console.log(sentence);
// null & undefined
var n = null;
var u = undefined;
var myFriend;
var isNew;
isNew = { "name": 'islom' };
myFriend = "Neka";
console.log(myFriend);
// array type
var list1 = ['banana', 'apple'];
var list2 = [1, 3];
// tuples
var tuple = [1, "islom"];
// any
var nickname = "Julia";
nickname = 18;
console.log(nickname);
// numeric enums
//  enum Direction {
//    Up = 1,
//    Down,
//    Left,
//    Right,
//  }
//  console.log(Direction.Up);
// string enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var direction = Direction.Up;
var directionAsNumber = Direction.Up;
console.log(direction); // "Up"
console.log(directionAsNumber); // 0
