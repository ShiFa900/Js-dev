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
        `5 type of falsy values = 0, "", undefined, null, Nan`
    - undefined = variable that not defines (empty value)
    - null = also means "empty value"
    - symbol (ES2015) = unique values and cannot be changed (not used for now)
    - Bigint(ES2020) larger int than the number type can hold
    `values has type, not variable`

let firstName = "jamal",
let age = 21,

### OBJECT

let me = {
name: "jamal"
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

\*note: jika value yang diberikan bukan number "angka" maka akan menghasilkan Nan (not a number);

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
   ```

   value array dari sisi kanan akan mengisi variable yang ada di sisi kiri.

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
       name: "jamal",
       age: 23,
       hobby: ["mancing", "membaca", "berkebun"]
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
       const guest = "hello" && 12 && null && "jamal"
       ```

       kode di atas akan menghasilkan null, dalam menggunakan AND OPERATOR (&&) semua kondisi harus bernilai `true.`

    3. `NULLISH coalescing operator`: menggunakan tanda `??` untuk mengecek nullish value.
       ```
       const guest = object.properti ?? 10;
       ```
       jika properti tidak di set valuenya/not exist maka akan menggunakan 10 sebagai value
       `nullish value`: null dan undefined, bukan 0 atau "".

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

    kode di atas akan menghasilkan: "we are open on 2 (count dari openingHours) days: thu, sat,`

    - property VALUES

    ```
    const values = Object.values(openingHours);
    ```

    kode di atas akan menghasilkan semua values dari object:

    ```
    0: {
        open: 10
        closed: 23
    },
    1: {
        open: 10
        closed: 12
    }
    ```

    - properti OBJECT

    ```
    const entries = Object.entries(openingHours);
    ```

    kode di atas akan mengubah object menjadi array

    ```
    contohnya:
    0: {
        0: "thu"
        1: {open: 10, close: 23}
    }
    ```

    convert menjadi nice and neat string,
    btw {open, close} juga merupakan sebuah object

    ```
    for (const[key, {open, close}] of entries){
        console.log(`On ${key} we open at ${open} and close at ${close}`);
    }
    ```

    akan menampilkan pesan:
    `On thu we open at 10 and close at 23`...

11. `SETS`
    set adalah tipe data selain array dan object. Sets juga merupakan `iterables (dpt di loop)`

    ```
    const menu = new Set([
        "Ayam panggang",
        "Nasi goreng",
        "Ayam panggang",
        "Sate babi",
        "Soto",
        "Nasi goreng",
    ])
    ```

    di dalam array pada object set di atas memiliki beberapa data duplicate. Saat menggunakan `set`, hanya menampilkan satu data (jika duplikat).
    kode di atas akan menampilkan: `ayam panggang, nasi goreng, sate babi, dan soto`.

    - mendapatkan length dari data set

    ```
    console.log(menu.size) // 4 hasil dari data yang tidak duplikat
    ```

    - untuk mengecek jika data exist

    ```
    console.log(menu.has("Soto")) // true
    console.log(menu.has("Opor")) // false
    ```

    - untuk menambah data

    ```
    menu.add("nama value");
    ```

    - untuk menghapus data

    ```
    menu.delete("nama data");
    ```

    - tidak ada index pada set

    ```
    console.log(menu[0]) // ini akan menghasilkan undefined
    ```

    - menghapus semua value pada set

    ```
    menu.clear();
    ```

    - looping untuk set

    ```
    for(const order of menu) console.log(order); // menampilkan data (tidak duplikat)
    ```

    data pada set tidak perlu di keluarkan dari set group, karena jika value harus unik dan tidak urutan tidak dipedulikan, maka tidak ada poinnya untuk mengeluarkan data pada set.

12. `MAPS`

    - menambahkan key dan value pada maps

    ```
    const rest = new Map()
    rest.set("key_name", value) // key dengan string
    rest.set(1, value) // values dengan int
    ```

    - menambahkan data dalam sekali jalan

    ```
    rest.set("categories, ["Italian", "Pizzeria", "Vegetarain", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "yes, we"re open :D")
    .set(false, "sorry, we"re closed :v")
    ```

    - mendapatkan dari sebuah map

    ```
    console.log(rest.get("key_name")) // nama yang di-set
    console.log(rest.get(true))
    ```

13. `Which data stucture to use?`

    - jika mempunyai list of data simple (tanpa key), gunakan `Array atau Set`.
    - jika memerlukan data structure yang lebih komplek, dengan key/value pairs, gunakan `Object atau Map`.

14. WORKING WITH STRING (part 1)

    - mengakses string dengan nomor index (basis nya dari 0)

    ```
    const airline = "TAP Air Portugal";
    const plane = "B737";

    console.log(plane[0]) // B
    console.log(airline.length) // 16
    ```

    - indexOf

    ```
    console.log(airline.indexOf("r")) // 4
    console.log(airline.lastIndexOf("r")) // 10
    console.log(airline.indexOf("Portugal")) // 8 (case sensitive)
    ```

    - slice

    ```
    console.log(airline.slice(4)) // Air Portugal (substring)
    console.log(airline.slice(4, 7)) // Air (angka terakhir - angka awal)
    console.log(airline.slice(0, airline.indexOf(" "))) // TAP
    console.log(airline.slice(airline.lastIndexOf(" ") + 1)) // Portugal

    console.log(airline.slice(-2)) // al (huruf terakhir dari kata Portugal)
    console.log(airline.slice(1, -1)) // AP Air Portuga
    ```

    jika method slice tidak diberi param di bagian awal, maka akan langsung include keseluruhan string.

15. `WORKING WITH STRING (part 2)

    1. lowercase dan uppercase

    ```
    const txt = "KloMubiE"
    console.log(txt.toLowerCase()) // "klomubie"
    console.log(txt.toUpperCase()) // "KLOMUBIE"

    const txtLower = txt.toLowercase();
    const txtCorrect = txtLower[0].toUpperCase + txtLower.slice(1); // Klomubie

    const email = "  Klo@Mubie.Com \n";
    const emailLower = email.toLowerCase();
    const emailCorrect = emailLower.trim() // menghilangkan kelebihan space
    const simpleWay = email.toLowerCase().trim(); // dengan chaining
    ```

    2. replacing

    ```
    const tandaBintang = "*Halo ges*";
    const tandaHash = tandaBintang.replace("*", "#"); // "#Halo ges#"

    const tandaHash = tandaBintang.replaceAll("*", "#"); //  untuk mengganti semua element
    ```

    3. boolean

    ```
    const plane = "Airline A3340";
    console.log(plane.include("334")) // true
    console.log(plane.include("B78")) // false
    console.log(plane.startsWith("Air")) // true
    console.log(plane.endsWith("Air")) // true
    ```

16. `WORKING WITH STRING (part 3)`

    1. split & join

    ```
    console.log("a+very+nice+string".split("+")) // ["a", "very", "nice", "string"]
    console.log("Jamal Sharof".split(" ")) // ["Jamal", "Sharof"]

    const [firstName, lastName] = "Jane Sharone".split(" ");
    const newFormat = ["Ms.", firstName, lastName.toUpperCase().join("-")] // "Ms.-Jane-Sharone"
    ```

    - split: akan memecah sebuah string yang tipe datanya akan berubah menjadi array
    - join: akan menggabungkan sebuah element dengan separator yang diberikan

    - capitalize huruf pertama

    ```
    const capitalizeName = function(name){
        const names = name.split(" ");
        const namesUpper = [];

        for(const n of names){
            namesUpper.push(n[0].toUpperCase() + n.slice(1))
            // capitalize huruf pertama lalu digabungkan dengan sisa katanya

            namesUpper.push(replace(n[0], n[0].toUpperCase)) // cara lain
        }
    }

    capitalizeName("sarah whine weller") // return Sarah Whine Weller
    capitalizeName("jone srachment") // Jone Srachment
    ```

    - padding

    ```
    const msg = "Jane";
    console.log(msg.pasStart(10, "+").padEnd(20, "+"))
    //++++++Jane++++++++++
    ```

    akan memberikan padding pada bagian awal dan akhir, panjang dari padding akan sesuai dengan besar nilai yang diberikan.
    Pada bagian kiri (start), jumlah simbol + ada sebanyak 6 yang jika ditambah dengan kata "Jane" maka hasilnya menjadi 10, sesuai dengan panjang yang di set pada padding start.
    Pada bagian kanan (end), jumalh simbol + ada 10 yang merupakan sisa panjang dari value yang diberikan, karena pada bagian kiri telah mengambil sepanjang 10.

    - hidden symbol

    ```
    const maskCreditCard = function(number){
        const str = number + "";
        const last = str.slice(-4) // mendapatkan 4 element terakhir dari int atau string

        return last.pasStart(str.length, "*") // sisa element akan diganti dengan simbol *
    }

    console.log(maskCreditCard(1234589)) // ***4589
    console.log(maskCreditCard("678912348012")) // ********8012
    ```

    - repeat

    ```
    const msg = "Nyaloo ges";
    console.log(msg.repeat(5)) // msg di atas akan di repeat sebanyak 5 kali

    const planeInLine = function(n){
        console.log(`There are ${n} planes in line ${"<[]<".repeat(n)})
    }
    akan merepeat emoji <[]< (ceritanya pesawat) sebanyak n

    planeInLine(5);
    planeInLine(3);
    ```
