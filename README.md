# What I should leanr from this TypeScript tutorial:
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

 ## 4. Variable types (typesboolean, number, string, null, undefined)
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