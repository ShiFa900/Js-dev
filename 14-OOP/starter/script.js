'use strict';

// membuat contructor, gunakan format huruf kapital sebagai awalan
// note: arrow functio tidak dapat digunakan sebagai function constructor
// const Person = function (firstName, birthYear) {
//   // instance properties, karena value dari kedua param ini akan/harus tersedia di semua instance yang dibuat dengan constructor function ini
//   this.firstName = firstName; // valuenya menjadi 'Jamal'
//   this.birthYear = birthYear; // valuenya adalah 2001

//   // never do this, karena jika kita memiliki banyak object person, itu juga akan membuat copy dari function ini.
//   // tidak efiesien dan mempengaruhi performa.
//   this.calcAge = function () {
//     console.log(2038 - this.birthYear);
//   };
// };

// const jamal = new Person('Jamal', 2001);
// console.log(jamal);

// const jack = new Person('jack', 2000);
// console.log(jamal instanceof Person); // menghasilkan true
const jay = 'Jay';
// console.log(jay instanceof Person); // menghasilkan false, karena jay tidak di deklarasikan ke dalam object Person
// 1. new {} (new empty object)
// 2. function is called, this = {} // this keyword akan mengarah ke person object (dalam hal ini)
// 3. {} linked to prototype
// 4. function secara otomatis return {}, sebuah object tidak perlu lagi empty

// Prototypes
// setiap function yang ada di JS memiliki sebuah properti yang disebut dengan prototypes, yang includes constructor function
// Person.prototype.calcAge = function () {
//   //   console.log(2038 - this.birthYear);
//   // value dari this.birthYear adalah nilai dari properti birthYear yang ada di object Person.
// };

// object jamal dapat mengakses properti calcAge, karena merupakan prototype inheritance, properti caclAge ada di parent object yaitu Person.
// jamal.calcAge();

// console.log(jamal.__proto__ === Person.prototype); // true
// Person.prototype di atas bukan prototype dari Person, melainkan dari sebuah object yang nantinya akan digunakan sebagai sebuah prototype untuk semua object yang dibuat dengan Person constructor function.

// cek jika sebuah prototype adalah adalah prototype dari object yang lain
// sama dengan yang di atas
// console.log(Person.prototype.isPrototypeOf(jamal)); // true

// Person.prototype.species = 'Homo Sapiens';
// console.log(jamal.species, jack.species); // akan menampilkan Homo Sapiens Homo Sapiens karena dari prototypenya, menampilkan value dari properties species
// aslinya object jamal dan jack tidak memiliki properti species, cek:
// console.log(jamal.hasOwnProperty('species')); // false, karena pada object properti species tidak ditemukan
// console.log(jamal.hasOwnProperty('firstName')); // true, propertinya ada pada object

// prototypal inheritance
// console.log(jamal.birthYear.__proto__);
// object.prototype (top of prototype chain)
// console.log(jamal.birthYear.__proto__.__proto__);
// console.log(jamal.birthYear.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 2, 6, 3];
// console.log(arr.__proto__); // akan menampilkan prototype dari arrays

// unique value
Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique()); // akan menampilkan unique data

// CHALLENGE 1

//1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// 1.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// ES6 Classes
// class expresiion
// const PersonCl = class{}

// class description
class PersonCl {
  constructor(fullName, birthYear) {
    // this keyword yang ada di dalam constructor akan di set menjadi empty object yang baru
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instances method
  // method yang ada disini akan di ada .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set property that already exist
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // _fullName adalah convention, bukan feature bawaan dari JS
    else alert(`${name} is not a full name!`);
  }

  // hanya akan mereturn value dari properti fullname saat di run
  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('hey, there :D');
    console.log(this);
  }

  // di console pada browser, akan menampilkan tiap informasi prototypenya
}

// saat constructor di panggil, akan mereturn nilai dari fullName dan birthYear yang akan di simpan di variable bernama jessica
// const jessica = new PersonCl('Jessica Davis', 1999);
// console.log(jessica);
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// create new method
// PersonCl.prototype.greet = function(){
// console.log(`Hey ${this.firstName}`);
// }
// akan memanggil method yang ada pada object jessica
// jessica.greet();
// PersonCl.hey(); // akan menampilkan isi dari method hey
// static method tidak ada dalam instances

// const melin = new PersonCl('melin', 1990);

// NOTE
// 1. classes are not hoisted, meskipun ia adalah class declaration. Beda artinya dengan functional declaration yaitu hoisted, artinya sebuah function bisa diakses meskipun sebelum di deklarasikan di kode.
// 2. first-class citizens (behind the screen)
// 3. classes are  executed ins strict mode

// Setter and Getter
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 255],

//   get latest() {
//     // akan mereturn element terakhir dari properti movement
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
//   // set tidak mandatory ketika ada get pada satu properti yang sama.
// };

// console.log(account.latest);
// account.latest = 50;
// // dari set methodnya
// console.log(account.movements); // akan menampilkan semua data dengan tambahan data 50 pada urutan terakhir.

// static method
// Person.hey = function () {
//   console.log('hey, there :D');
//   console.log(this);
// };
// Person.hey();
// jamal.hey(); // ini akan error, karena method hey bukan merupakan prototype dari jamal object

// object.create
// new prototype
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// PersonProto akan menjadi prototype dari object baru bernama oming
// const oming = Object.create(PersonProto);
// console.log(oming); // method calcAge akan ada sebagai prototype dari object oming
// oming.name = 'oming jamal'; // cara set value pada propertie, cara ruwet
// oming.birthYear = 2000;

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1990); // dengan menggunakan method
// sarah.calcAge();

// CHALLENGE 2 (ES6 class)
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     this.speed /= 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   // gunakan _ untuk set property yang memiliki nama yang sama dengan method, tambahkan getter
// }

// const ford = new CarCl('Ford', 120);
// // console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

/////////////////////////////////////////////////////
// inheritance between classes: constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2038 - this.birthYear);
};

// object baru yang menjadi child dari person
// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // dua prop di atas juga berasal dari object person
//   this.course = course;
// };

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // student akan dapat mengakses properti firstName dan birthYear, child dpt menggunakan properti pada parent.
  // Person(firstName, birthYear); // ini akan error, karena person constructor function di panggil sebagai reguler function call.
  // pada regular function, this akan bernilai undefined
  this.course = course;
};

// what we have been build
// - student constructor function
// - student prototype property
// object mike linked to prototype, dan prototye tersebut adalah constructor prototype property
// student juga merupakan bagian dari object person

// it doesn't work (bad code)
Student.prototype = Person.prototype; // tidak akan menghasilkan prototype chain yang diperlukan
// akan kehilangan student protorypenya.

// linking prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2001, 'Math');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__); //menampilkan person object
// console.log(mike.__proto__.__proto__); // menampilkan calcAge function dan constructornya

// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// console.log(mike instanceof Object); // true

// jika dengan code ini, maka di overwrite dengan prototype dari student
// Student.prototype.constructor = Student;

// tanpa code di atas akan menghasilkan person constructor
// console.dir(Student.prototype.constructor); //menampilkan data constructor dari person, karena menggunakan Object.create maka JS berpikir bahwa ini masih Person

//////////////////////////////////////////////
// CHALLENGE 3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// sebagai parent class constructor function
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed); // inheritance
//   this.charge = charge;
// };

// // link the prototypes
// EV.prototype = Object.create(Car.prototype); // membuat prototype untuk EV pada Car

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo; // membuat properti chargeBattery pada object EV
// };

// // poin nomor 3, mengaplikasikan polymorphism
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90); // value pada properti chargeBattery akan menjadi 90
// console.log(tesla);
// tesla.brake(); // method ini bisa diakses karena adanya prototype chain
// tesla.accelerate();

// note: jika JS menemukan dua method atau properti yang sama pada prototype chain, maka akan digunakan yang pertama kali di temukan pada chain.

/////////////////////////////////////////////////////////
// inheritance between classes: ES6 classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first, sebelum mengakses this keyword (dengan extends)
    super(fullName, birthYear); // adalah contructor dari parent class yang dilakukan secara otomatis oleh JS
    // membutuhkan param yang juga di gunakan di parent
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student i feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
// martha.introduce();
// martha.calcAge();

//////////////////////////////////////////////////////
// inheritance between class: Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and i study ${this.course}`);
};

// StudentProto.introduce();
///////////////////////
const kay = Object.create(StudentProto); // inherit dari object StudentProto yang akan menjadi prototype dari kay object
// kay.init('Kay', 2000, 'Computer Science');
// kay.introduce();

// another class example
class Account {
  // public fields (instances)
  loale = navigator.language;

  // private fields
  #movement = [];
  #pin; // empty variable yang di set menjadi private
  // sebuah fields tidak bisa di-define pada constructor, maka itu harus dibuat di luar method constructor dengan empty value karena pin referensi dari param constructor juga.

  static numSubject = 10; // hanya dpt di akses dari class

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // redifing private field
    this.#pin = pin;
    // this._movement = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // public methods
  // public interface of the object
  getMovements() {
    return this.#movement;
  }

  deposit(val) {
    this.#movement.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  // private methods
  // internal method, hanya requestLoan yang harusnya dapat di akses
  // tidak akan ditampilkan pada prototypenya
  // #approveLoan(val) {
  //   return true;
  // }
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Kimble', 'USD', 2341);

// dua cara ini bisa dilakukan, namun tidak disarankan
// acc1._movement.push(250);
// acc1._movement.push(-45);

// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// console.log(acc1);

// better way to get movements
// console.log(acc1.getMovements());
// console.log(acc1.#movements); // ini akan error, field movements tidak bisa diakses dari luar.

///////////////////////////////////////////////////////
// Encapsulation: Protected properties dan method
// 1. mencegah terjadinya perubahan yang tidak disengaja dari luar class
// 2. perubahan dapat dilakukan pada semua internal method tanpa khawatir akan menghasilkan error.

//this._pin = pin; // dengan convention

// Encapsulation: Private class field and method
// mengeluarkan field/properties dari contructornya yang nantinya akan bisa diaksses oleh method yang ada di class tersebut
// (ex. pada class acc1)
// akan di-include juga pada inheritance, ini merupakan instances, dan dapat juga direferensiasikan dengan this keyword.

//////////////////////////////////////////////
// chaining method
// acc1.deposit(200).deposit(500).withdrawal(40).requestLoan(1000).withdrawal(300);
// console.log(acc1.getMovements());

//////////////////////////////////////////////
// CHALLENGE 3

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// sebagai parent class constructor function

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    this.speed /= 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  // gunakan _ untuk set property yang memiliki nama yang sama dengan method, tambahkan getter
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo; // membuat properti chargeBattery pada object EV
    return this;
  }

  // poin nomor 3, mengaplikasikan polymorphism
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(20);
// console.log(rivian);
