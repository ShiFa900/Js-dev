const value = prompt('Please input your grade: ');
let grade = '';

// menggunakan conditional (if/else if/else) untuk memberikan grade kepada user

// if(value >= 90){ 
//   grade = 'A+';
// }elseif(value >= 80) { 
//   grade = 'B+';
// } elseif(nilai >= 70) {
//   grade = "B";
// } elseif(nilai >= 60) {
//   grade = "C+";
// }
// elseif(nilai >= 40) grade = "D"
// elseif(nilai >= 50) grade = "C"
// elseif(nilai >= 30) grade = "E"
// else grade = "F";

if(value >= 90){
  grade = 'A+';
} else if(value >= 80){
  grade = 'B+';
} else if(value >= 70){
  grade = 'B';
} else if(value >= 60){
  grade = 'C+';
} else if (value >= 50) {
  grade = 'C';
} else if (value >= 40) {
  grade = 'D';
} else if (value >= 30) {
  grade = 'E';
} else {
  grade = 'F you are a failure :v';
}
// agak aneh but fine

document.write(`<p>Your grade is: ${grade} </p>`)