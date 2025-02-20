## ASYNCHRONOUS JS, AJAX, API

1. Synchronous
   `synchronous` digunakan pada kebanyakan code. Asynchronous adalah proses eksekusi code yang dilakukan secara
   bertahap, line by line.
   Artinya, setiap line akan 'menunggu' baris/line sebelumnya untuk selesai di eksekusi.

2. Asynchronous
   `asynchronous` adalah sebuah konsep di JS yang membuat sebuah code di eksekusi pada background tanpa mem-blok
   eksekusi code yang lain, salah satu contohnya adalah `setTimeout()` function.
   Asynchronous code is non-blocking. 
   ```
   NOTE: 'addEventListener' tidak secara otomatis membuat sebuah code menjadi asynchronous.
   ```

3. AJAX (Asynchronous JavaScript And XML): digunakan untuk berkomunikasi dengan remote web servers dengan menggunakan
   asynchronous. Dengan AJAX, kita bisa mengakses `request data` secara dinamis.
    - XML: adalah sebuah data format yang digunakan untuk transmit data pada web (sudah tidak digunakan hari ini,
      digantikan dengan JSON data format).

4. API (Application Programming Interface): adalah sebuah bagian dari software yang dapat digunakan oleh bagian software
   yang lain untuk komunikasi antar aplikasi.

```
NOTE:
- HTTP: Hypertext Transfer Protocol.
- GET: get input data
- POST: sending data
- PUT and PATCH: updating/modifying data   

- JS hanya bisa melakukan eksekusi dalam sekali show (only one thread of excecution). 
```

5. Callback hell: callback hell adalah suatu kondisi dimana, terjadi pemanggillan sebuah callback dalam nested. Hal ini
   dilakukan eksekusi task asynchronous berurutan. Namun, callback hell akan menyebabkan code sulit dimengerti dan
   terlihat tidak estetik.

6. Promise: promise adalah sebuah object yang digunakan sebagai placeholder/container dari hasil operasi asynchronous
   for the future result.
    1. Promise Combinator:
        - Promise.race: menerima masukan array of promises dan juga me-return promise. Menampilkan satu data yang lebih
          dahulu diproses.
        - Promise.allSettled: akan me-return semua promises, tidak peduli jika promises rejected atau tidak. Mirip
          dengan promise.all, tanpa short circuit seperti pada promise.all.
        - Promise.any: hanya akan me-return data yang fulfilled.

7. Async/await: await akan mengehentikan eksekusi dari sebuah function sebelum akhirnya promise fullfilled. Namun,
   async/await tidak akan mem-blok berjalannya sebuah kode, karena function akan berjalan secara asynchronously.




