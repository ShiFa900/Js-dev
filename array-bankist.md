## ARRAY BANKIST

1. `Array do have methods`
   Method sendiri adalah sebuah function yang bisa dipanggil pada objects, maka array method juga termasuk sebagai object itu sendiri. Simplenya Array method adalah sebuah function yang melekat pada semua array di JS.

   - array slice

   ```
   let arr = ["a", "b", "c", "d", "e"];
   arr.slice(1) // ["b", "c", "d", "e"]

   arr.slice(-2) // ["d", "e"]
   arr.slice(-1) // ["e"]

   arr.slice() // ["a", "b", "c", "d", "e"]
   console.log([...arr]) // sama dengan yang di atas
   ```

   array slice akan menghilangkan element pada index ke-n kemudian mengambil sisa datanya.
   untuk penggunaan tanda minus (-) pada slice, ini akan menghasilkan data ke-n terakhir pada array.

   - array splice

   ```
   let arr = ["a", "b", "c", "d", "e"];

   arr.splice(2) // ["c", "d", "e"]
   console.log(arr) // ["a","b"]
   ```

   array splice akan menghilangkan element ["c", "d", "e"] pada original array, original array akan kehilangan data yang di ekstrak dan hanya akan menjadi ["a", "b"].

   - array reverse

   ```
   const arr2 = ['f', 'g', 'h', 'i', 'j'];
   console.log(arr2.reverse()); // ['j', 'i', 'h', 'g', 'f']
   ```

   array reverse akan membalikkan value dari array, dan ini juga `mengubah original` arraynya.

   - array concat

   ```
   arr = ['a', 'b', 'c', 'd', 'e'];
   const letter = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']
   console.log(letter);
   ```

   array concatenate digunakan untuk menggabungkan 2 array.

   - array join

   ```
   console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
   ```

   menampilkan data yang dipisahkan dengan tanda '-', atau value yang lain.

2.`Array Foreach`
sama seperti pada bahasa pemrograman yang lain, `forEach` digunakan untuk melakukan perulangan pada data array, requires callback function sebagai parameternya.

```
// param 1: current element
// param 2: current index
// param 3: entire array yang di looping

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
```

`continue & break` tidak bisa digunakan pada forEach.

3.`ForEach with Maps & Sets`

```
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'EURO', 'USD', 'GBP']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); // USD: USD...
});
```

set tidak memiliki key juga index, maka param 'key' tidak masuk akal jika masih ada pada parameter lisnya, gunakan `_` untuk menunjukkan unnecessary param.

4.`Data Transformation with Map, Filter and Reduce`

- Map: menggunakan konsep yang sama dengan forEach method, hanya saja map akan mengahasilkan array baru dengan berdasarkan array originalnya.

```
original array -> looping -> dioperasikan pada code (covic) dengan current element -> simpan pada array baru -> MAP
```

- Filter: seperti namanya, method ini akan memfilter data.

```
number > 2
```

hasilkan akan beruba angka-angka yang lebih besar dari angka 2. Angka lain tidak akan diikut sertakan pada array baru.

- Reduce: merupakan sebuah method yang digunakan untuk mempersingkat original array menjadi `one single value`(menggabungkan semua element). Method ini juga disebut dengan `snowball effect`.

```
acc + current -> accumulator
```

- Find method: akan melakukan perulangan pada array, find method dapat mengambil data dari sebuah array. Pada find method, data tidak akan disimpan pada array baru seperti pada `filter method`, melainkan akan langsung mereturn element pertama yang memenuhi kondisi.

```
const firtWithDrawal = movements.find(mov => mov < 0);
console.log(firtWithDrawal); // -400
```

mereturn `-400` dari array movement, data akan langsung di return saat ditemukan untuk pertama kali.

```
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
```

mencari element pada object, akan mendapatkan seluruh object yang memiliki properti sesuai dengan kata kunci yang diberikan.

- FindIndex method: findIndex method bekerja hampir sama dengan find method.Sesuai dengan namanya, findIndex akan mereturn indexnya saja, bukan keseluruhan object.

```
const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
```

- SOME and EVERY

  - some: mengecek pada kumpulan data (array) jika sebuah data terkandung dalam array, maka akan mereturn true (boolean).
    Menggunakan callback function

    Perbedaan `includes` dengan `some`

    ```
    // includes
    console.log(movements.includes(-130)); // true

    // some
    const anyDeposits = movements.some(mov => mov > 0);
    ```

    pada includes hanya dilakukan persamaan antara keyword dengan data yang ada di array (kumpulan data).

    pada some, pencarian dapat dilakukan dengan kondisi tertentu.

  - every: adalah method yang akan mereturn true ketika semua element memenuhi kondisi yang kita cek. Setiap data yang dicek menghasilkan true

  ```
  console.log(movements.every(mov => mov > 0)); // false

  console.log(account4.movements.every(mov => mov > 0)); // true
  ```

- FLAT and FLATMAP

  - flat: flat adalah method baru yang dapat digunakan untuk mempersingkat penggunaan callback function pada method. Digunakan untuk menghilangkan `nested array`.

  ```
  const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
  console.log(arrDeep.flat()); // hanya akan turun 1 level (default)

  console.log(arrDeep.flat(2)); // akan turun 2 level, akan menghasilkan [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

- SORT

  ```
  const owners = ['naya', 'ayu', 'bintang', 'cayai'];
  ```

  kode di atas akan menghasilkan `['ayu', 'bintang', 'cayai', 'naya']`, sorting dapat digunakan pada string, bukan data yang bertipe number.

- CREATING ARRAY (more way)

  - common way

  ```
  console.log([1,2,3,4,5,6,7])
  console.log(new Array(1,2,3,4,5,6,7))
  ```

  ```
  const x = new Array(7)
  ```

  kode di atas akan menghasilkan empty value dengan length 7, bukan sebuah array dengan nilai 7 di dalamnya.

  - Fill the array

  ```
  x.fill(34, 3, 5); // akan menjadi [empty × 3, 34, 34, empty × 2]

  array.fill(12, 2, 5); //[1, 2, 12, 12, 12, 6, 7]

  x.fill(1) // [1,1,1,1,1,1,1]
  ```

  index pertama sebagai value, index selanjutnya adalah nilai dari start index dan end index

  - Another way to fill the array (Array.from())

  ```
  const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]
  console.log(y);

  const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1,2,3,4,5,6,7]
  console.log(z);
  ```

  akan menjadi more cleaner dari pada menggunakan cara yang di atas

```

```

5.`WHICH ARRAY TO USE?`

1. to mutate original array

   - add: .push(end), .unshift(start)
   - remove: .pop(end), .shift(start), .splice(any)
   - others: .reverse, .sort, .fill

2. create new array

   - computed from original: .map(loop)
   - filtered condition: .filter
   - portion of original: .slice
   - adding original to other: .concat
   - flattering the original: .flat, .flatMap

3. array index

   - based of value: .indexOf
   - based on condition: .findIndex

4. array element

   - based on condition: .find

5. array includes

   - based of value: .includes
   - based on condition: .some, .every

6. array into new string

   - based on separator string: .join

7. to transform to value

   - based on accumulator: .reduce (boil down the array into single value of any type: number, string, boolean, or even new object or array)

8. to just loop an array

   - based on callback: forEach() (does not create a new array, just loops over it)

6.`PREFIXED ++ OPERATOR`

```
let a = 10;
// console.log(a++); // ini akan menghasilkan 10, tanda ++ tidak ter-apply
console.log(++a); // do this instead, menghasilkan 11
console.log(a);
```

penempatan simbol `++` akan mempengaruhi hasil akhirnya.
