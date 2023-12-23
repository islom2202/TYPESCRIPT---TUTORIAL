export {};
let message = 'Hello world!';
console.log(message);

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
 

// Interface

const fullName = (obj:{firstname: string, lastname:string}) :string => `${obj.firstname} ${obj.lastname}`
let myObj = {
  firstname: 'Muhaiyo',
  lastname: 'Kamolova'
}
console.log(fullName(myObj))
