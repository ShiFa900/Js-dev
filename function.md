## Function

1. `Default Parameter`

   ```
   const createBooking = function (
   flightNum,
   numPassanger = 1,
   price = 199 * numPassanger
   ) {};
   ```

   default parameter dpt di override.

   ```
   createBooking('37LB'); // akan menggunakan default param
   createBooking('OP097', 25, 200); // tanpa default param

   ```

2. `Passing Arguments Works: Value vs Reference`

   ```
   const var = "ABC";
   const obj = [
      prop1: value1,
      prop2: value2
   ];

   const method = function(param1, param2){
      param1 = "DEF"
      param2.prop1 = "ini " + param2.prop1"
   }

   method(var, obj);
   ```

   - param1: di passing sebagai `value`, jika param1 yang memiliki value awal "ABC", kemudian di di override dengan "DEF" pada function method, ini tidak akan mengubah value dari variable "var" itu sendiri, karena value pada param1 hanya value yang di copy dari variable "var".

   - param2: di passing sebagai reference, jika properti pada param2 di akses dan passing sebuah objek pada function seperti pada `param2.prop1 = "ini " + param2.prop1"`, maka value pada object "obj" juga akan ikut berubah, karena di passing sebagai reference. Sama artinya dengan meng-copy keseluruhan objek.

   ```
   param2 = obj;
   ```

3.`First-Class vs Higher-Order Functions`
Js adalah bahasa pemrograman yang memiliki "first-class function", yang artinya function pada Js adalah `first citizens`.
Sebagai first citizens, function diperlakukan seperti `values`.

```
Object -> values
Function -> values
```

1.  `First-Class`

    - store function in variable or properties

    ```
    const add = (a,b) => a + b; // variable

    const counter = {
    value: 23,
    inc:function(){this.value++} // property
    }
    ```

    - pass function as argument in other function

    ```
    const greet = () => console.log("heyBoi");
    btnClose.addEventListener("clicl", greet) // greet adalah function
    ```

    - call method in function

    ```
    counter.inc.bind(SomeObject);
    ```

2.  ` Higher-Order`

    - function return another function

    ```
    function count(){
       let counter = 0;
       return function(){
          counter++;
       }
    }

    // function count( adalah higher-order function)
    // function() adalah return function
    ```

    - function receive other function

    ```
    const greet = () => console.log("heyBoi");
    btnClose.addEventListener("clicl", greet)
    ```

    AddEventListener adalah higher-order function, karena function tersebut menerima function lain sebagai input (greet function), greet function disini disebut dengan `callback function`.

4.`Function Accepting Callback Function`
Pada Js, callback function adalah sebuah function yang menjadi parameter di function yang memanggil dirinya.

```
const string = function(input, callback){
   return callback(input); // callback
}

const show = funtion(str){
   return str.toUpperCase();
}
console.log(string("Nyalo", show))
```

saat "memanggil" function `string`, function `show` sebagai param ke-2. Lalu pada function `string`, callback (function show) dieksekusi. Callback memungkinkan sebuah proses setelah suatu proses/operasi telah selesai di lakukan.

5.`Function return function`
Sebuah fucntion juga dapat me-return function.

```
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Nyaloo'); // ini akan menjadi function juga (untuk function ke-2 di atas)
greetHey('Jamal'); // menggunakan kurung kurawal untuk call the function dan return value
greetHey('Komi');

// another way
greet("Hello")("Kim") // "Helo Kim"
```

- menggunakan arrow function

```
const sayGreet = greeting => name => console.log(`${greeting} ${name}`);
sayGreet('Hola')('Jane');
```

6.`The Call and applyed Methods`

- `Call` keyword

```
const lufthtansa = {
  airline: 'Lufthansa',
  aitaCode: 'LH',
  bookings: [],
  // book: function(){} // cara biasanya

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.aitaCode}${flightNum}`, name });
  },
};

lufthtansa.book(237, 'mayang');
lufthtansa.book(238, 'merta');
console.log(lufthtansa);
```

`this` keyword pada kode di atas valuenya berasal dari properti dari object yang di eksekusi.

```
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

book(23, "jane");
```

function `book` ada di dalam object `lufthansa`, karena function book akan menjadi regular function maka `this` keyword akan menghasilkan `undefined` (pada strict mode).
funtion `book` bukan sebuah method (lagi), namun menjadi regular function

instead of eksekusi function dengan cara di atas, gunakan ini:

```
book.call(eurowings, 231, "Jane Williams);
// Jane Williams booked a seat on Lufthansa flight LH237
```

`call` method nantinya akan memanggil book function yang dapat diakses dengan `this keywords` yang di set pada eurowings object atau apapun yang di passed pada call method, kemudian param setelahnya adalah param original yang dimiliki si function.

- Apply method

```
const swiss = {
   airline: "Swiss Air Line",
   iataCode: "LX",
   bookings: []
};
const flightData = [538, "Gringer Weld"];
book.apply(swiss, flightData)

book.call(swiss, ...flightData) // sama artinya dengan yang di atas
```

7.`The Bind Method`
Sama seperti `call` method, set this keyword untuk setiap pemanggilan function. Namun pada bind, function tidak secara langsung di panggil, namun method bind akan me-return function berbeda yang akan mengikat `this` keyword.

```
const bookEw = book.bind(eurowings); // return function
bookEw(23, 'Jane Williams');
```

- param bind dengan flightNum sebagai param ke-1

```
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jamal'); // hanya memerlukan param untuk `name`
```

penggunaan `partial application`, dimana beberapa original parameter telah di applied terlebih dahulu.
jika ingin melakukan preset pada argument, harus dilakukan pada param/argument pertama.

8.`Immediately Invoke Function Expression (IIFE)`
Immediately Invoke Function Expression atau IIFE adalah sebuah function yang dipanggail secara langsung, function dijalankan sesaat setelah function dibuat. Teknik ini akan berguna saat melakukan `async/await`.

- anonymous IIFE

```
(function(){
   console.log("Ini adalah anonimus IIFE");
}())
```

function di wrap dalam parenthesis untuk menjadikannya function expression. gunakan "`()`" untuk me-run function dengan IIFE

- arrow IIFE

```
(() =>
console.log("ini adalah arrow IIFE"))()
```

9.`CLOSURES`
Sebuah function akan memiliki akses ke variable environment dari konteks yang di eksekusi, bahkan setelah eksekusi konsteks hilang.
Closures memiliki prioritas pada scope chain.

melihat closures:

```
console.dir(nama variable)
```

- Closures definition in different way (?)

  - closures adalah sebuah bagian dari variable pada execution context dimana function di buat, bahkan setelah execution telah berakhir.

  - closures memberikan seluruh akses dari parent scope bahkan setelah parent function returned. Function berpacuan pada outer scope.

  - closures memastikan sebuah function tidak kehilangan koneksi dari variables yang ada di tempat function itu dibuat.

  - closures dianalogikan seperti tas yang 'dibawa' oleh function yang isinya adalah variable yang ada pada tempat si function dibuat.
