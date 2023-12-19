# What I should learn from this TypeScript tutorial:
1. What & Why ?
2. Environment Setup
3. Variable declarations
4. Variable types
5. Functions
6. Interface 
7. Class
8. Access Modifiers

## 1. What & Why
Superset of JavaScript and is used to make debugging easier.

## 2. Environment Setup
#### 2.1 Installation :
1. First check if Nodejs is installed:
~~~
node -v 
~~~
2. Install (globally 'g' - means once and for all projects, just like Node.js):
~~~
npm install -g typescript
~~~
3. Check if typescript is installed:
~~~
tsc -v
~~~

#### 2.2 Typescript compilation :
Type this in terminal to make compiled javascript from typescript (just likes scss):
~~~
tsc filename
~~~

#### 2.3 Run Typescript:
1. To run typescript, we do not really need the browser we can do that using node, type following in the terminal ``(note we run compiled js, not typescript)``:
~~~
node filename.js
~~~
2. To make typescript compilation automatic, we can run following command (just like scss):
~~~
tsc filename --watch
~~~

## 3. Variable declarations (var, let, const)
**seems to be the same as in JS from ES6**. <br><br>
 we cannot redelcare **let** and **const** variables, whereas **var** can be redeclared:
 ~~~
 var lastname = "Saidaliev"
 var lastname = "Saidzoda" // is correct

 let n = 14;
 let n = 15; // is wrong ⨉
 ~~~
 the difference between **let** and **const** is that ``let`` can be done without initalization, whereas ``const`` declarations are always initialized with a value :
 ~~~
 let firstname;
 firstname = "islom" // this is correct

 const lastname;
 lastname = "Saidaliev" // wrong ⨉
 ~~~
 If you want the variable not to be reassigned, chose ``let``, otherwise ``const``:
 ~~~
 let firstname = "Isko";
 firstname = "Islom"; // this is correct

 const lastname = "Saidaliev";
 lastname = "Saidzoda" // this is wrong ⨉
 ~~~

 ## 4. Variable types (boolean, number, string, null, undefined, array)
 in typescript we need to define data type of the variable followed by ":"
 ~~~
 let isCompleted: boolean = true;
 let name: string = "Dilnoza";
 let age: number = 21;
 let sentence: string = `my love is {name}`
 ~~~
 There are two benefits of predefing data-types in typescript:
  1. It prevents us from reassing one type to another, which is useful for not making errors:
  ~~~
  let name: string = "Islom";
  name = true // Type 'boolean' is not assignable to type 'string'. ⨉
  ~~~
  2. Intelligence - type dot after variable name to witness it yourself:
  ~~~
  let name: string = "Islom";
  name. // type this and witness it yourself
~~~
  #### 4.1 'null, undefined'
   both are subtypes of all other types.
  ~~~
  let n: null = null;
  let u: undefined = undefined;
  ~~~
  in typescript we cannot reassign undefined or null, therefore we use ``"|"`` to redefine the type in advance:
  ~~~
  let myFriend: undefined | string;
  ~~~
  #### 4.2 Array type:
  There are two ways to add array types with fixed types in typescript and there is no any advantage of one over another:
  ~~~
  let list1: number[] = [1, 2, 3]; // first way
  let list2: Array<string> = ['islom', 'Dilnoza'] // second way
  ~~~
  #### 4.3 Tuples 
  are also ``fixed`` types  of arrays (but with predefined types):
  ~~~
  let tuple: [number, string] = [1, 'islom']
  let tuple: [number, string] = [1, 'islom', 2] // ⨉
  let tuple: [number, string] = ['islom', 1] // ⨉
  ~~~
  #### 4.4 Enums (numberic, string and heterogeneous enums)
  Enums are perfect way to write readible set of named constants:

  1. **Number-based enums**, where each member is assigned an incrementing number. By default, the first member is assigned the value 0, and each subsequent member gets the next number:
      ~~~
      enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
      }
      const directionAsNumber: number = Direction.Up;
      console.log(directionAsNumber); // 1
      ~~~
  2. **String Enums**: These are enums with string values instead of numbers. String enums are more readable and can help avoid confusion when working with numbers that have no clear meaning:
      ~~~
      enum Direction {
      Up = 'Up',
      Down = 'Down',
      Left = 'Left',
      Right = 'Right'
      }
      const direction: Direction = Direction.Up;
      console.log(direction); // "Up"
      ~~~
  3. **Heterogeneous Enums:** These enums can mix numeric and string values. However, this type of enum is used sparingly as it has few applications and is more limited:
      ~~~
        enum Direction {
        Up = 1,
        Down = 'Down',
        Left = 'Left',
        Right = 4
        }
      ~~~
  #### 4.5 **'any'**
  We can assign any values to it:
  ~~~
  let nickname: any = "Julia"
  nickname = 18
  console.log(nickname);
  ~~~
  But the problem is that, it does not throw any error in a lot of cases:
  ~~~
   let nickname: any = "Julia"
   nickname() // although it is not a function and should throw an error , but it is not
  ~~~
  #### 4.7 **'unkown'** - the best alternative of any because it throws an error
  ~~~
  let name: unknown = 'islom'
  console.log(name.toUpperCase()) // ⨉ name is of a type 'unknown'
  name() // ⨉ name is of a type 'unknown'
  ~~~
  You may say, but why for 'name.toUpperCase()' it throws an error. For this we have to define a type as we use it:
  ~~~
  let name: unknown = 'string';
  console.log((name as string).toUpperCase()) // STRING
  name() // ⨉ name is of a type 'unknown'
  ~~~

## 5. Functions
In Typescript **functions parameters' types** are defined inside parameter's paranthesis and **function return type** defined after paranthesis:
~~~
const capitalize = (str:string, num:number) :string => str.slice(0, 1).toUpperCase()+str.slice(1)+num;

console.log(capitalize('dilnoza', 2002)); // Dilnoza2002
~~~
#### 5.1 Optional parameters
- **should** be defined after required parameters