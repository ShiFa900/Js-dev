#JavaScript

## What is JS?

Js is a programming language to instruct computer to do things. Js is Object-oriented based on objects that storing many data.

## The role of JS in web development

- real programming in browser
- as a `verb` in web application
- dynamic effects and web application in the browser

## Data types in JS

### Primitive

    - number = floating points number, used for decimal and integer.
    - string = characters used for text
    - booles = logical types for taking desicion (true?false)
        `5 type of falsy values = 0, '', undefined, null, Nan`
    - undefined = variable that not defines (empty value)
    - null = also means 'empty value'
    - symbol (ES2015) = unique values and cannot be changed (not used for now)
    - Bigint(ES2020) larger int than the number type can hold
    `values has type, not variable`

let firstName = 'jamal',
let age = 21,

### OBJECT

let me = {
name: 'jamal'
}

## Basic boolean logic in JS

- The and (&&)
- Or (||)
- Not operators (!)

## Conditional operator in JS

- if/else/if
- switch
- ternary

#Deconstructing the Monster definition (javascript topic)

1. High-level: hardware resources, C languange (low level) Js & pyhton (high-level), namun ini tidak akan secepat bhs C
2. Garbage-collected: automatis cleaning the memory
3.

## Objects

- object literal
- array
- functions
- many more

## Conversion from data type to another

\*note: jika value yang diberikan bukan number 'angka' maka akan menghasilkan Nan (not a number);

- konversi string ke number = Number(number dlm string)

- konversi number ke string = String(number) valuenya akan menjadi string

- konversi tipe data ke boolean = Boolean(value)

## JS DOM

- DOM adalah representasi dari js yang lebih kompleks, karena DOM dpt dimanipulasi (DOM manipulate) BUKAN JAVASCRIPT.
- Dom sendiri adalah dokumen (HTML) yang dimodelkan dalam sebuah object.
- object DOM di javascript bernama document, yang digunakan untk memanipulasi HTML

## Data Sturctures, Modern Operator and Strings

1. `DESTRUCTURING ARRAY`:
   Mengambil data dari array yang akan disimpan ke dalam variable.

   ```
    	// tanpa menggunakan destructuring array
    	const arr = [1,2,3];
   	const a = arr[0]
   	const b = arr[1]
   	const c = arr[2]

   	// menggunakan destructuring array
   	const [x,y,z] = arr
   	// terlihat seperti array, walau bukan, ini adalah destructuring.
   ```

1 . destructuring dengan switch value

- tanpa destructuring

  ```
     let[main, , secondary] = namaObject.property;
     const temp = main;
     secondary = main;
     secondary = temp;
  ```

  dari kode di atas, value dari `main` akan diganti dengan value dari `secondary`
  value dari `secondary` akan diganti dengan value dari `main`.

- dengan destructuring, hasinya akan sama dengan/tanpa destructuring

  ```
  [main, secondary] = [secondary, main];
  ```

2 . destructuring dengan function

```
const [main, secondary] = namaObject.method();
```

menggunakan method/function yang ada di dalam object

- destructuring nested array

```
const nested = [2,1,[3,5]];
const [i, , j] = nested;
```

kode di atas akan menghasilkan `[1, [3,5]]`

```
const [i, [j,k]] = nested
```

kode di atas akan menghasilkan` 2,3,5`

- set default value

```
const [p=1, q=1, r=1] = [8];
```

kode di atas akan menghasilkan `8 1 1`, karena hanya data urutan
pertama yang valuenya di set menjadi 8

2.  `DESTRUCTURING OBJECT`: menggunakan kurung kurawal.

    ```
    const {prop1, prop2, prop3} = object;
    ```

    - menggunakan nama variable yang berbeda dari nama properti

    ```
    const {prop1 = newName1, prop2 = newName2, prop3 = newName3} = object
    ```

    bagian kiri adalah nama di object, sedangkan bagian kanan adalah nama baru yang diinginkan

    - setting default value

    ```
    const {prop1 = [], prop2: newName2 = []} = object
    ```

    gunakan array kosong sebagai default value

    - Mutating/switch variables

    ```
    let a = 111;
    let b = 23;
    const obj = {a: 12, b: 2, c:10};

    ({a,b} = obj)
    ```

    dari kode di atas, variable a dan b akan menghasilkan a = 12 dan b = 2 (?)
    gunakan kurung untuk melakukan mutating pada object

    - Nested object

    ```

    ```

3.  `SPREAD OPERATOR`: spread operator digunakan untuk mengakses element pada sebuah iterable object (array atau string).
    Spread operator digunakan untuk membuat array baru dengan meng-expand data array yang sudah ada.
    Spread operator dapat digunakan pada type data `string`, karena merupakan iterable.

    penggunaan spread operator, data dari variable arr akan dikeluarkan dari array, kemudian di tulis kembali ke dalam variable newArr

    ```
    const arr = [1,5,6];
    ```

    ```
    const newArr = [1,2, ...arr];
    ```

    kode di atas akan menghasilkan
    [1,2,1,5,6]

    `...newArr` -> akan menghasilkan 1,2,1,5,6

    contoh penggunaan spread operator untuk menggabungkan dua array

    ```
    const wholeMenu = [....menu1, ...menu2]
    ```

    `iterables`: terdiri dari array, string, maps, dan sets.
    Pada ES6, spread operator dpt digunakan pada object.

    spread operator pada `OBJECT`

    ```
    const newOperation = {namaProp: value, ...namaObject, namaProp: value}
    ```

4.  `REST PATTERN`: operator rest pattern hampir sama dengan spread operator, hanya saja operator ini melakukan kebalikan dari spread operator.
    Jika spread operator meng-`unpack` sebuah array, maka rest pattern akan meng-`pack array`.

    ```
    const [a, b, ...others] = [1,2,3,4,5,6]
    ```

    kode di atas akan menghasilkan `[1,2,[3,4,5,6]]`

    ```
    const obj1 = {
       name: 'jamal',
       age: 23,
       hobby: ['mancing', 'membaca', 'berkebun']
    }

    const food = {
       name:[sate, nasi kuning, bubur ayam, ayam geprek];
    }

    const [hobby, , foods, ...arr] = [...obj1.prop1, ...object.prop2]
    ```

    kode di atas akan menghasilkan `mancing, berkebun, [sate, nasi kuning, bubur ayam, ayam geprek]`
    pada bagian arraynya, hanya akan menampilkan data sisa yang tidak memiliki param pada bagian kanan, data `membaca` tidak termasuk karena merupakan data yang di skip.

    1. Pada object

    ```
    const {sat, ...weedkdays} = restaurant.openingHours;
    ```

    kode di atas akan menghasilkan {properti thu dan fri dari object `openingHours` dari contoh bang jonas}

    2. Pada function

    ```
    const add = function(...numbers){
       let sum = 0;
       for(let i = 0; i < numbers.length; i++){
       sum += numbers[i];
       }

       add(2,5);
       add(1,2,3,7);

    }
    ```

    function add di atas akan dipanggil sebanyak 2 kali, dan akan menghasilkan
    7 dan 13

    `penggunaan`:

    1. spred operator digunakan ketika akan menampilkan `values` yang dipisahkan dengan koma.
    2. rest pattern digunakan ketika menampilkan `variable name` yang dipisahkan dengan koma.

5.  `SHORT CIRCUTTING (&& ||)`: logical operator (&& dan ||). Dapat menerima setiap data type,return setiap data type dan dapat melakukan sesuatu yang disebut dengan short circutting atau shot circuit evaluation.
    Short circutting artinya, jika value pertama merupakan truthy value, maka akan menjadi value yang pertama di return.

    1. `OR operator`

       - ternary operator

       ```
       const guest = object.properti ? value1 : value2
       ```

       kode di atas akan mengecek jika sebuah object dengan properti tertentu exist, maka akan menampilkan value1, jika tidak maka akan mereturn value2.

       - short circutting

       ```
       const guest1 = object.properti || 10
       ```

       kode di atas menunjukkan penggunaan short circutting, di mana hampir sama dengan ternary operator,

    2. `AND operator`

       - ternary operator

       ```
       const guest = 'hello' && 12 && null && 'jamal'
       ```

       kode di atas akan menghasilkan null, dalam menggunakan AND OPERATOR (&&) semua kondisi harus bernilai `true.`

    3. `NULLISH coalescing operator`: menggunakan tanda `??` untuk mengecek nullish value.
       ```
       const guest = object.properti ?? 10;
       ```
       jika properti tidak di set valuenya/not exist maka akan menggunakan 10 sebagai value
       `nullish value`: null dan undefined, bukan 0 atau ''.

6.  `LOGICAL ASSIGNMENT OPERATOR`

    1.  `OR assignment operator`

        ```
        object.prop =  object.prop || 10;
        ```

        sama artinya dengan

        ```
        object.prop ||= 10
        ```

    2.  `NULLISH assignment operator`
        ```
        object.prop ??= 10
        ```
    3.  `AND assignment operator`
        ```
        object.prop = object.prop && <ANONYMOUS>
        ```
        sama dengan
        ```
        object.prop &&= <ANONYMOUS>
        ```

7.  `LOOPING ARRAY - the for-of loop`

        const menu = [...object1.pro1, ...object1.prop2];

        for (const item of menu)

        for(const [i, el] of menu.entries()){
             console.log(`${i + 1}: ${el}`)
        }


        item variable isinya adalah value dari perulangan saat ini. Melakukan destructuring, maka tidak perlu dilakukan secara manual, dituliskan seperti ini:


        for(const items of menu.entries()){
             console.log(`${items[0] + 1}`: `${items[1]}`);
        }

8.  `OBJECT LITERALS`: object literal sangat umum digunakan dalam menyimpan collections data, dan stuktur data yang kompleks seperti object, array, function dan reguler expressions.

    1.

    ```
    openingHours = {
        thu: {
            open: 10
            closed: 23    }
        sat:
            open: 10
            closed: 12
    }
    ```

    penggunaan pada object

    ```
    const objectA = {

        prop1: value,
        prop2:value,
        prop3: [value1, value2]
        openingHours,
    }
    ```

    mengaplikasin object `openingHours` pada object `objectA`.
    Jika terjadi perubahan pada nama object, jika object digunakan pada object yang lain, maka harus dilakukan penyesuaian.

    pada ES6, penggunaan function expression sudah tidak perlu memerlukan nama property yang nntinya akan diset dengan function expressio, maka diganti dengan berikut:

    ```
    namaProp1(param1, param3) {}
    ```

9.  `OPTIONAL CHAINING (?.)`: digunakan saat ada kejadian di mana suatu kondisi bisa memenuhi atau tidak memenuhi sebuah kondisi (if/else, ternary), untuk kasus di sini, mirip dengan `nullish operator`.

    ```
    console.log(objectA.propA.propB?.propC);
    ```

    - `propA` merupakan sebuah object, yang dieksekusi dengan metode `object literal` ke object `objectA`.
    - `propB` merupakan contoh penggunaan optional chaining (properti disini jadinya nested), jika `propB` ada pada `propA`, maka akan mengambil nilai dari `propC` yang merupakan sebuah properti pada object `propB`.
    - return valuenya adalah `undefined`, jika data = null/undefined

10. `LOOPING OBJECTS (object keys, values, entries)`

    - property NAMES

    ```
    openingHours = {
        thu: {
            open: 10
            closed: 23    }
        sat:
            open: 10
            closed: 12
    }

    const properties = Object.keys(openingHours);
    let openStr = `we are open on ${properties.length} days:`;
    for (const day of properties)
        openStr += `${day},`;

    ```

    kode di atas akan menghasilkan: 'we are open on 2 (count dari openingHours) days: thu, sat,`
