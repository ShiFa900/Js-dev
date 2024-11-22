## NUMBERS, DATES, INTL, intn and Timers

1.`Converting and checking numbers`

- conversion

  ```
  console.log(+23) // type coercien
  console.log(Number(23)) // menggunakan number object
  ```

  ```
  base 10 - 0 to 9 1/10 = 0.1 3/10 = 3.3333333
  base binary base 2 - 0 - 1
  ```

- parsing
  sebuah function adalah sebuah method, dan number object juga dapat melakukan parsing.

  - parseInt

    ```
    console.log(Number.parseInt('30x')); // 30 dengan tipe number
    ```

    `'30x'` -> adalah regex number, dan regex number adalah numeral system, yaitu number dari 0 - 9

    code di atas akan berhasil jika sebuah stringnya dimulai dengan `number`.

    ```
    console.log(Number.parseInt('e12)); // akan menghasilkan NaN
    ```

  - parseFloat
    ```
    console.log(Number.parseFloat('2.5rem')); // menghasilkan 2.5 dengan tipe number, dengan decimal
    ```
  - isNaN

    ```
    console.log(Number.isNaN(20)) // hasilnya false

    console.log(Number.isNaN('20')) // hasilnya false

    console.log(Number.isNaN(+'20X')) // hasilnya true, karena merupakan 'not a number'

    console.log(Number.isNaN(23 / 0)) // false
    ```

  - isFinite

    ```
    console.log(Number.isFinite(20)) // true
    console.log(Number.isFinite('20')) // false
    console.log(Number.isFinite(+'20x')) // false
    console.log(Number.isFinite(23 / 0)) // false
    ```

  - isInteger
    ```
    console.log(Number.isInteger(23)) // true
    console.log(Number.isInteger(23.0)) // true
    console.log(Number.isInteger(23 / 0)) // false
    ```

- Math and Rounding

  - sqrt: stand for square root atau akar kuadrat

    ```
    console.log(Math.sqrt(25)) // 5
    // sama dengan
    console.log(25 ** (1 / 2)) // 5

    console.log(8 ** (1 / 3)) // 2, menghitung kubik
    ```

  - max
    ```
    console.log(Math.max(1, 6, 4, 20, 9)); // 20
    console.log(Math.max(1, 6, 4, '20', 9)); // 20
    console.log(Math.max(1, 6, 4, '20px', 9)); // NaN
    ```
  - random number

    ```
    console.log(Math.trunc(Math.random() * 6)); // angka random, tidak bisa lebih besar dari 5

     console.log(Math.trunc(Math.random() * 6) + 1); // tambah 1 untuk mengimbangi method trunc yang memotong bagian decimal sebuah number
    ```

    `Math.trunc()` -> untuk menghilangkan angka decimalnya

  - rounding integers

    ```
    console.log(Math.trunc(23.4)) // 23
    console.log(Math.trunc(23.4)); // akan menghilangkan bagian decimalnya

    ```

    masih menggunakan `Math.trunc` untuk menghilangkan angka decimalnya.

    - round

    ```
    console.log(Math.round(23.3)); // dibulatkan ke atas atau ke bawah
    ```

    - ceil

    ```
    console.log(Math.ceil(23.2)); // akan selalu dibulatkan ke atas
    console.log(Math.ceil(23.9)); // 24 juga
    ```

    - floor

    ```
    console.log(Math.floor(23.4)); // akan selalu dibulatkan ke bawah
    console.log(Math.floor('23.9')); // bisa pada string
    ```

    - trunc dengan minus

    ```
    console.log(Math.trunc(-23.5)); // akan menghasilkan -23
    console.log(Math.trunc(-23.8)); // akan menghasilkan -24, menjadi kebalikannya
    ```

    - rounding decimal

    ```
    console.log((2.7).toFixed(0)); // akan dibulatkan ke atas, menjadi 3
    console.log((2.7).toFixed(3)); // akan menghasilkan 2.700
    console.log((2.345).toFixed(2)); //2.35, angka pada urutan ter-kanan akan di bulatkan
    ```

    code di atas akan bertipe string

    ```
    console.log(+(2.345).toFixed(2)); // 2.35
    ```

    saat ditambah dengan `+(2.345)` hasilnya akan 2.35 bertipe number

- Remainder operator

  ```
  remainder adalah sisa bagi atau biasa disebut modulo

  console.log(5 % 2);
  console.log(5 / 2); // 5 = 2 * 2 + 1

  console.log(8 % 3);
  console.log(8 / 3); // 8 = 2 * 3 + 2

  console.log(6 % 2); // 0
  console.log(6 / 2); // 3

  console.log(7 % 2); // 1
  console.log(7 / 2); // 3.5

  const isEven = n => n % 2 === 0;
  console.log(isEven(8)); // true
  console.log(isEven(23)); // false
  console.log(isEven(514)); // true
  ```

- Numeric separator

  ```
  const diameter = 287_800_000_000; // separator dengan menggunakan _
  console.log(diameter);

  const price = 372_90;
  console.log(price);

  const PI = 3.1415; //akan menjadi 3.1415
  console.log(PI);

  console.log(Number('230000')); // akan menjadi 2300 dengan tipe number
  console.log(Number('230_000')); // akan menjadi NaN
  console.log(parseInt('230_000')); // akan menjadi 230 dengan 000 hilang
  ```

  numeric separator dengan menggunakan `_`, numeric separator ini hanya digunakan pada backend, dan tidak akan mempengaruhi sebuah kode dan tampilan pada front end.

- Working with BigInt
  BigInt adalah tipe lain dari integer yang baru keluar tahun 2020. Pada JS, operasi matematika yang menggunakan angka-angka besar, maka presisinya akan semakin menurun dalam melakukan operasi matematika tersebut.

  ```
  console.log(2 ** 53 - 1); // 9007199254740991
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(2 ** 53 + 1); // 9007199254740992
  console.log(2 ** 53 + 2); // 9007199254740994
  console.log(2 ** 53 + 3); // 9007199254740996
  console.log(2 ** 53 + 4); // 9007199254740996
  ```

  ```
  console.log(198378237298732984719247n); // BigInt number
  console.log(BigInt(1983782));
  ```

  dengan menambahkan `n` pada baris belakang, akan otomatis menjadi `BigInt`

  - Operation

    ```
    console.log(10000n + 20000n);
    console.log(2323883032938298321039n \* 100000000n);

    const huge = 2092192839201209n;
    const num = 23;
    console.log(huge \* BigInt(num));
    ```

  - Exception

    ```
    console.log(20n > 15); // true
    console.log(20n === 20); // false
    console.log(typeof 20n); // bigint
    console.log(20n == '20'); // true

    console.log(huge + ' is REALLY big!');
    ```

  - Division
    ```
    console.log(10n / 3n);
    console.log(10 / 3); // akan menjadi infinite
    ```

- Create a date

```
const future = new Date(2037, 10, 19, 15, 3);
console.log(future);
```

```
console.log(future.getFullYear()); // akan mendapatkan full tahunnya 2037
console.log(future.getMonth()); // akan mendapatkan bulannya 10
console.log(future.getDate()); // akan mendapatkan tanggal 19
console.log(future.getDay()); // akan mendapatkan hari 4 (thursday)
console.log(future.getHours()); // akan mendapatkan jam 15
console.log(future.getMinutes()); // akan mendapatkan menit 3
console.log(future.getSeconds()); // akan mendapatkan sec 0
console.log(future.toISOString()); // akan mendapatkan ISO string 2037-11-19T07:03:00.000Z
console.log(future.getTime()); // 2142226980000 mendapatkan waktu dalam timestamp
```

```
console.log(new Date(2142226980000)); // akan mengkonversi timestamp ke dalam bentuk string Thu Nov 19 2037 15:03:00
console.log(Date.now()); // 1731483768764, timestamp current times
future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:03:00 GMT+0800, tahunnya akan sesuai dengan tahun yang di set
```

- Internationalizing date (Intl)
  membuat date yang ter-internationalize, yaitu tanggal dan waktu akan menjadi tanggal dan waktu di daerah/negara yang di set.

  ```
  new Intl.DateTimeFormat('en-US', option).format(now)
  ```

  variable `now` berisi timestamp dari tanggal dan waktu saat ini.
  `'en-US'` adalah kode untuk menampilkan tanggal dan waktunya dalam format negara/daerah mana.

  - `numeric`: akan menghasilkan value informasi dengan angka.
  - `long`: akan menghasilkan value informasi dengan

```
const option = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
```

mendapatkan informasi tanggal dan waktu pada lokal browser user

```
const locale = navigator.language;
```

- Internationalizing number (Intl)

```
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};

const numer = 908128.89;
console.log('US: ', new Intl.NumberFormat('en-US', options).format(numer));
// US:  €908,128.89
```

mengubah format sebuah number menjadi format pada negara-negara tertentu. `US:  €908,128.89` currency menggunakan `€`, karena di set pada `currency: 'EUR'`, pada variable options.

```
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(numer)
);
```

akan mengubah format number sesuai dengan format local user

- Timers

  - setTimeout

  ```
  setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
  ```

  method `setTimeout` akan mengeksekusi sebuah baris kode sesuai dengan waktu yang di set pada parameter kedua.
  Kode di atas akan dieksekusi setelah 3 detik.
