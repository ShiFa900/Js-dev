## JS DEVELOPMENT: MODULES, TOOLING, AND FUNCTIONAL

1. Modules: is a reusable piece of code that encapsulation implementation details. Definisi modules hampir mirip dengan
   class atau function, bedanya modules usually a standalone file.

- dengan modules akan memudahkan untuk melakukan compose software. Modules adalah sebuah building blocks yang kita
  jadikan satu untuk membangun sebuah aplikasi yang komplek.
- isolates components: modules can be developed in isolation without thinking about the entire codebase.
- abstract code: implement low level code in modules and import these abstractions into other modules.
- organized code: modules naturally lead to more organized codebase.
- reuse code: modules allow us to easily reuse the same code, even across multiple projects.

2. Modules dengan Script
   1. Modules:
      - top-level variables:  scoped to module (private)
      - default mode: strict mode
      - top level this; undefined
      - import and export: YES
      - HTML linking: <script>
      - file downloading: Asynchronous
      - importing modules before execution, imported synchronously
      - static imports, import known before execution
   2. Script:
      - top-level variables: all variables are global
      - default mode: 'sloppy' mode
      - top level this; window
      - import and export: NO
      - HTML linking: <script type="module">

3. Modules yang bukan merupakan native js:
   - commonJs modules: semua modul yang digunakan sebagai CommonJs module system 
   - AMD modules
   
4. Bundling with Parcel

6. review modern and clean code
   1. readable code:
      - write a code thats others can understand it 
      - write a code that you can still understand it in 1 year
      - avoid to complicated solutions
      - use descriptive variables name
      - use descriptive function name
   2. general:
      - use dry principal (don't repeat yourself when write a code)
      - don't pollute global namespace, encapsulated instead
      - don't use var
      - use strong type checks (=== and !==)
   3. function:
      - function do only one thing
      - don't use more than 3 function param
      - use default param whenever possible
      - return same data  type as received
      - use arrow function when they make code more readable
   4. OOP:
      - use ES6 classes
      - encapsulated data and don't mutate it from outside the class
      - implement method chaining
      - do not use arrow function as method (in regular objects)
   5. avoid nested code:
      - use early return (guard clauses)
      - use ternary(conditional) or logical operatora instead of if
      - use multiple if instead of if/else if
      - avoid for loops, use array method instead
      - avoid callback-based asynchronous APIs
   6. asynchronous code:
      - consume promises with async/await for best readability
      - whenever possible, run promises in parallel(Promise.all)
      - handle errors and promise rejection