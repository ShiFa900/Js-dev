## OOP WITH JAVASCRIPT

1. What is OOP?

    1. Object Oriented Programming (OOP) adalah sebuah model atau pola pada pemrograman yang pada konsep sebuah objek.
       Dapat juga diartikan sebagai `Style of Code`, di mana kita menulis dan terorganisir.
    2. menggunakan object untuk memodelkan (describe) keadaan sesungguhnya pada dunia nyata atau fitur abstrak.
    3. objek mengandung data (properti) dan code (method). Dengan menggunakan objek, kumpulan data dan sifat yang sesuai
       dari objek akan dijadikan menjadi satu blok.

       ```
       const user = {
         user: 'jamal',
         password: 'j4m4l' // data
 
         login(password){}
         sendMessage(str){} //behaviour/sifat
       }
 
       ```

    4. pada OOP, sebuah objek secara mandiri berupa blok kode.
    5. objects are building block of applications, and interact with one another.
    6. interactions happen through a public interface (API): sebuah method yang berada di luar object dapat diakses, dan
       digunakan untuk berinteraksi/komunikasi dengan object.
    7. OOP dikembangkan dengan tujuan untuk organizing code, untuk fleksibelitas yang lebih tinggi dan memudahkan
       developer, menghindari `spaghetti code`.

- Tradisional OPP

    - classes: berperan seperti blueprint yang dapat digunakan untuk membuat sebuah object.

      ```
      User{
         user
         password
         email
  
         login(password){
            // login logic
         }
  
         sendMessage(str){
            //sending message
         }
      }
      ```

      di atas adalah sebuah classes, namun nyatanya JS tidak men-support classes seperti yang di atas, bukan syntax asli
      JS.

    - instance:
      ```
      {
         user: 'jamal'
         password: 'J4m4l123'
         email: 'jamal@gmail.com'
      }
      ```

### 4 fundamental principal of OOP

- Abstraction: mengabaikan atau menyembunyikan detail yang tidak terlalu penting. Mengijinkan kita untuk melakukan
  overview perspective dari 'sesuatu' yang kita implementasikan.

  ```
  Phone{
     charge
     volume

     homeBtn(){}
     volumeBtn(){}
     screen(){}
  }
  ```

- Encapsulation: menjaga sebuah properties dan method tetap privat di dalam sebuah class, yang artinya tidak akan bisa
  diakses dari luar class. Beberapa method bisa terekpos sebagai public function (API).

  ```
  User{
     user
     private password
     private email //tidak bisa diakses di luar class
  }
  ```

  bukan syntax bawaan JS, private keyword bukan syntax asli dari JS doesn't exist.

  ```
  {
     login(word){
        this.password === word
     }
  }
  ```

  kode di atas mengakses properties dari `password` dari class User. Bisa diakses karena dalam satu class yang sama.
  Keuntungannya: mencegah terjadinya perubahan internal properties/state dari luar, melakukan perubahan pada internal
  code tanpa beresiko mengubah external code.

  Pada tradisional OOP seperti pada Java dan C++, sebuah properties disebut dengan fields.

    - public field

      ```
      class Account {
        // ini adalah public field
        locale = navigator.language;
        _movement = [];
  
           constructor(owner, currency, pin) {
           this.owner = owner;
           this.currency = currency;
  
           this._pin = pin;
  
           console.log(`Thanks for opening an account, ${owner}`);
           }
      }
      ```

    - private field
    - public method
    - private method

- Inheritance: adalah pewarisan sifat dari sebuah class.

  ```
  User{
     user
     password
     email
     login(password){}
     sendMessage(str){}
  }
  ```

  class admin menggunakan properti yang juga dimiliki oleh class user, karena class user adalah `parent` dari class
  admin dan admin juga merupakan user.

  child element dapat memiliki propertiesnya sendiri maupun extend dari parentnya.

  ```
  admin{
   user
   password
   email
   permission
   login(password){}
   sendMessage(str){}
   deleteUser(user){}
  }
  ```

- Polymorphism: defini dari principal ini yaitu child class dapat melakukan overwrite pada method yang diwarisi dari
  parent class.

  ```
  User{
     user
     password
     email
     login(password){
      // login logic
     }
     sendMessage(str){}
  }

  admin{
   user
   password
   email
   permission
   login(password){
      // different login logic
   }
   sendMessage(str){}
   deleteUser(user){}
  }

  author{
   user
   password
   email
   post

   login(password){
      // more different login logic
   }
   writePost(){}
  }
  ```

  class admin dan author adalah turunan dari class user, namun pada method login akan terjadi overwrite yang sebelumnya
  diwariskan oleh class user.

3. OOP in JS
   OOP pada JS menggunakan properti yang di sebut dengan `Prototype`. Semua object pada JS terhubung dengan prototype
   tertentu.
   Prototype memiliki method dan properties yang dapat diakses oleh object yang terhubung ke prototype tersebut, ini
   disebut dengan `prototype inhertitance` atau `delegation`.
   Example:

   ```
   const num = [1,2,3]
   num.map(v => v * 2)
   ```

   pada JS, `Array.prototype` adalah prototype dari sebuah array object yang dibuat di JS. Karenanya semua array dapat
   mengakses map method.

### 3 ways to implementing Prototypal Inheritance in JS

1. Constructor functions: sebuah teknik yang digunakan untuk membuat object menggunakan function, digunakan untuk
   membuat object seperti Array, Map atau Set
2. ES6 Classes: cara modern dari contructor function, 'syntactic sugar' yaitu dibalik layar sesungguhnya ES6 berjalan
   sama seperti contructor function, dan ES6 classes tidak berjalan seperti classes pada `classical OOP`.
3. Object.create: adalah method yang paling mudah dan yang secara langsung menghubungkan object ke prototype object.
   /////////////////////////////////////////////////////

4.`Prototypal Inheritance and The Prototype Chain`

- Prototype Inheritance:
  constructor function:

  ```
  const Person = function(firstName, birthYear){

     this.firstName = firstName;
     this.birthYear = birthYear; // valuenya adalah 2001

     this.calcAge = function(){}
  }
  ```

  Prototype [person.prototype]:

  ```
  calcAge: function()
  ```

- Prototype Chain: series of links between objects, linked through prototypes (sama seperti scope chain).
  Constructor function:

  ```
  Person()
  ```

  Prototype:
  ini adalah object itu sendiri, setiap object yang ada di JS memiliki prototype.

  ```
  Person.prototype
  ```

  Object:

  ```
  Jamal
  __proto__
  Person.Prototype
  ```

  ```
   obj.__proto__
  ```

  Getter function `obj.__proto__` digunakan untuk mengekspos nilai internal dari [Prototype] sebuah object.

- Chaining methods on classes

  ```
  acc1.deposit(200).deposit(500).withdrawal(40).requestLoan(1000).withdrawal(300);
  console.log(acc1.getMovements());
  ```

  setiap aksi yang di set pada class acc1, akan dilakukan dalam satu kali jalan.
