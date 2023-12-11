# What I should leanr from this TypeScript tutorial:
## Installation :
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

## Typescript compilation :
Type this in terminal to make compiled javascript from typescript (just likes scss):
~~~
tsc filename
~~~

## Run Typescript:
1. To run typescript, we do not really need the browser we can do that using node, type following in the terminal ``(note we run compiled js, not typescript)``:
~~~
node filename.js
~~~
2. To make typescript compilation automatic, we can run following command (just like scss):
~~~
tsc filename --watch
~~~