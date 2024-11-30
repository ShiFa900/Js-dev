## Advanced DOM and Event (DOM really works)

1. How the DOM is really work

   `1. What is the DOM?`
   DOM memberikan akses kepada dev untuk:

   - mengizinkan JS untuk berinteraksi dengan browser
   - mengizinkan JS untuk melakukan CRUD (create, update dan delete) elemen pada HTML.
   - men-set style, class dan attribut, dan listen dan respon pada event
   - `Pohon DOM` yang dihasilkan dari sebuah dokument HTML, yang nantinya dapat dilakukan interaksi.

   - DOM adalah sebuah API yang komplek yang mengandung banyak method dan propertie yang bisa berinteraksi dengan pohon DOM (tree DOM).

   ```
   .querySelector() / .addEventListener() / .createElement() / .innerHTML() / .textContent() / .children() / etc...
   ```

   2.` DOM API organized behind the scene`

   - setiap note yang ada di DOM tree adalaha bertipe `NODE`.
   - setiap node yang direpresentasikan pada JS berupa object.
   - object ini memiliki akses khusus ke node method dan propertis, seperti `.textContent, .childNodes, .parentNodes, .cloneNodes();`
   - NODE: memiliki couple of child, seperti element, text, comment dan document. Setiap text yang berada dalam setiap element, itu di dapat dari `NODE`, dan node tersebut akan berupa text. Begitu juga dengan comment.

   ```
   Element -> HTML element -> 1. HTMLButtonElement 2. HTMLDivElement
   ```

   - inheritance: adalah sebuah proses pewarisan dari parent object ke child objectnya, object anakan dapat menggunakan method dan properti yang ada pada parent object, namun parent tidak bisa menggunakan properti dari childnya.

2. Selecting, Creating dan Deleting Elements

   1. selecting element

      ```
      console.log(document.documentElement); // mendapatkan seluruh element HTML

      console.log(document.head); // mendapatkan element pada tag head

      console.log(document.body);

      const header = document.querySelector('.header'); // mendapatkan element dengan class header (hanya yang pertama kali di temukan)

      const allSelection = document.querySelectorAll('.section'); // mendapatkan semua element dengan class section (literlly all)
      ```

      mendapatkan element dengan id dan tags

      ```
      document.getElementById('section--1'); // dengan id

      const allButton = document.getElementsByTagName('button'); // dengan tag name
      ```

   2. create and inserting element

      ```
      const message = document.createElement('div'); // membuat element div baru

      message.classList.add('cookie-message'); // menambahkan class baru pada element yang baru dibuat di atas

      header.append(message); // ditampilkan setelah header

      header.append(message.cloneNode(true)); // ditampilkan sebelum dan sesudah header

      header.after(message); // sama dengan append

      header.before(message); // sama dengan prepend
      ```

      `header` di atas adalah element yang memilki class header

   3. deleting element
      ```
      document
      .querySelector('.btn--close-cookie')
      .addEventListener('click', function () {
         message.remove(); // akan me-remove sebuah element jika ter-trigger dengan di klik
      });
      ```
      menghapus sebuah element dari parentnya
      ```
      message.parentElement.removeChild(message); // remove element dari parentnya
      ```

3. Styles, Attributes and Classes

   1. styles

      ```
      message.style.backgroundColor = '#37D';
      message.style.width = '104%';
      ```

      memberikan style pada sebuah element secara manual pada JS.

      `computed style` digunakan untuk mendapatkan style element pada file CSS, computed digunakan karena style tersebut akan menjadi hidden sehingga tidak bisa diakses oleh JS.

      ```
      console.log(getComputedStyle(message).color);
      console.log(getComputedStyle(message).height);
      ```

      memberikan style berupa height pada sebuah element dengan
      height yang sudah ada di increase nilainya

      ```
      message.style.height =
      Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px'; // tingginya menjadi 43px
      ```

      overwrite nilai lain, semua element yang memiliki class `--color-primary` akan di ubah nilainya menjadi orangered.

      ```
      document.documentElement.style.setProperty('--color-primary', 'orangered');
      ```

   2. attributes

      ```
      const logo = document.querySelector('.nav__logo');
      console.log(logo.alt);
      console.log(logo.src);
      console.log(logo.className);
      ```

      mendapatkan attributes dari logo, logo adalah sebuah variable dengan isinya adalah element dengan class `.nav__logo`

   3. classes

      ```
      logo.classList.add('c'); // menambah list class baru
      logo.classList.remove('c'); // menghapus nama class
      logo.classList.toggle('c'); //
      logo.classList.contains('c'); // not includes...
      ```

      `NOTE`
      don't use, ini akan mengubah/overwrite seluruh nama class

      ```
      logo.className = 'jamal';
      ```

4. Type of events and event handler

   1. mouseenter

      addEventListener:
      alert akan muncul saat ter-trigger dengan mouse yang masuk ke area H1.

      ```
      h1.addEventListener('mouseenter', function (e) {
         alert('You are on h1 :D');
      });
      ```

      removeEventListener:

      ```
      h1.removeEventListener('mouseenter', function () { });
      ```

      kolaborasi kedua event:

      ```
      const alertH1 = function (e) {
      alert('addEventListener: Great! You are reading the heading :D');

      // akan menghilangkan event listener setelah ditampilkan pertama kali
      // alert tidak akan muncul kembali pada hover kedua kalinya

      h1.removeEventListener('mouseenter', alertH1);
      };
      ```

      remove event dengan waktu:

      ```
      setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
      ```

      sebuah event tidak akan aktif lagi (setelah sebelumnya sudah aktif) setelah 3 detik, atau tergantung dari waktu yang di set.

      cara lama untuk handler sebuah event

      ```
      h1.onmouseenter = function (e) {
          alert('mouseenter: Great! You are reading the heading :D');
      };
      ```

5. Event propagation: Bubbling and Capturing

   1. Capturing phase: ketika sebuah event di klik, event tersebut tidak langsung menuju target, melainkan pergi dari `document route ke target element`, dan akan melalui setiap parent element dari target elemnt.

   2. Target phase: ketika click event mencapai target, maka dimulai lah target phase, di mana event akan di-handle oleh target.

   3. Bubblig phase: setelah mencapai target, event akan kembali lagi ke document route, lalu sama dengan capturing phase, bubbling phase juga akan melalui setiap parent element.

6. Traversing DOM

7. Dever and async script loading

   1. regular attribute

      ```
      <script src="script.js">
      ```

      `end of body`, script di eksekusi setelah HTML sepenuhnya parsed.

      `modern browser:`

   2. async attribute

      ```
      <script async src="script.js">
      ```

      `async in head`, script fetch secara asynchronously dan dieksekusi seketika, DOMContentLoaded tidak menunggu untuk eksekusi HTML selesai pada async script. Script tidak terjamin akan di eksekusi berurutan.
      `USE FOR 3-rd party script, order doesn't matter`

   3. defer attribute
      ```
      <script defer src="script.js">
      ```
      `defer in head`, script fetched secara asynchronously dan dieksekusi setelah HTML sepenuhnya parsed, DOMContentLoaded event fires setelah defer script dieksekusi, script dieksekusi berurutan.
      `BEST SOLUTION! for order matters`

   ketiga attribute di atas akan mempengaruhi javascript dalam mengambil data, yaitu men-download lalu di eksekusi.
