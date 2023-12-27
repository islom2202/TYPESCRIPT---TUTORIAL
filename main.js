"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// // Variable declarations
// let name;
// name = "islomjon"
// console.log(name);
// var lastname = "Saidaliev"
// var lastname = "Saidzoda"
// console.log(lastname);
// // Variable types
// let isCompleted: boolean = true;
// console.log(isCompleted);
// let myBeloved: string = "Dilnoza";
// let sentence: string = `my love is ${myBeloved}, who captured my heart`
// console.log(sentence);
// // null & undefined
// let n: null = null;
// let u: undefined = undefined;
// let myFriend: undefined | string;
// let isNew: null | {"name": string};
// isNew = {"name": 'islom'}
// myFriend = "Neka"
// console.log(myFriend);
// // array type
// let list1: string[] = ['banana', 'apple']
// let list2: Array<number> = [1, 3]
// // tuples
// let tuple: [number, string] = [1, "islom"]
// // any
// let nickname: any = "Julia"
// nickname = 18
// console.log(nickname);
//  // numeric enums
// //  enum Direction {
// //    Up = 1,
// //    Down,
// //    Left,
// //    Right,
// //  }
// //  console.log(Direction.Up);
//  // string enums
//  enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// const direction: Direction = Direction.Up;
// const directionAsNumber: number = Direction.Up;
// console.log(direction); // "Up"
// console.log(directionAsNumber); // 0
// // unknown
// let name: unknown = 'string';
// console.log((name as string).toUpperCase())
// functions
// const capitalize = (str:string, num?:number) :string =>
// {
//  if(num){
//     return str.slice(0, 1).toUpperCase() + str.slice(1) + num
//  }
//  else{
//   return str.slice(0, 1).toUpperCase() + str.slice(1) + 2002
// }
// }
// console.log(capitalize('dilnoza', 2002));
// // Interface
// const fullName = (obj: myObj): string =>
//   obj.firstname
//     ? `${obj.firstname} ${obj.lastname}`
//     : `Muhaiyo ${obj.lastname}`
// interface myObj {
//   firstname?: string,
//   lastname: string
// }
// let obj = {
//   firstname: 'Muhaiyo',
//   lastname: 'Kamolova'
// }
// console.log(fullName(obj))
// Class
var Employees = /** @class */ (function () {
    function Employees(name) {
        this.employeeName = name;
    }
    Employees.prototype.greet = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employees;
}());
var employee = new Employees('Islomcha');
console.log(employee.employeeName); // Property 'employeeName' is protected and only accessible within class 'Employees' and its subclasses. ⨉
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("".concat(this.employeeName, " is delegating work"));
    };
    return Manager;
}(Employees));
var manager = new Manager('Abdullocha');
manager.delegateWork();
manager.greet();
