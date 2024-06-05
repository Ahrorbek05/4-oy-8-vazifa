// 1-masala
// function yigindi(argument) {
//     let sum = 0;
//     for( i = 0; i < argument.length; i++){
//         sum = sum + argument[i];
//     }
//     return sum;
// }
// console.log(yigindi([1, 7, 12, 9, 6, 19]));

// 2-masala
// function summ(arg) {
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(max >= arg[i]) {
//             max = max;
//         } else {
//             max = arg[i];
//         }
//     }

//     return max;
//   }

// console.log(summ([1, 5, 6, 8, 91, 12]));

// 3-masala
// function summ(arg) {
//     let min = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(min <= arg[i]) {
//             min = min;
//         } else {
//             min = arg[i];
//         }
//     }

//     return min;
//   }

//   console.log(summ([2, 3, 6, 7, 9, 12, 3]));

// 4-masala
// function manfiy() {
//   let arg = [2, -3, 5, 7, -9, -12, -21];
//   for (let m = 0; m < arg.length; m++) {
//     if (arg[m] < 0) {
//       console.log(arg[m] * -1);
//     }
//   }

//   return arg;
// }

// console.log(manfiy());

// 5-masala

// function summ(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i] * 2);
//     }

//     return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 6-masala
// function summ(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       arg.splice(i, 1);

//       i--;
//     }
//   }

//   return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 7-masala
// function summ(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//       arg.splice(i, 1);

//       i--;
//     }
//   }

//   return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 8-masala
// function tekshirish() {
//     let massiv = [2,4,7,'salom', true, null];
//     if (massiv.length > 0) {
//         console.log(${massiv}  mavjud);
//     } else  {
//         console.log(${massiv}  mavjud emas);
//     }

//     return massiv;
// }

// console.log(tekshirish());

// 9-masala
// function massiv(arg) {
//     for(let i = 0; i < arg.length; i++)  {
//         console.log(arg[i] * -1);
//     }

// return arg;
// }

// console.log(massiv([1,3, 5,-4,6,-90,-42,55]));

// 10-masala
// function katta(arg) {
//   let a = 6;

//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < a) {
//       arg.splice(i, 1);
//       i--;
//     }
//   }

//   return arg;
// }

// console.log(katta([2, 23, -10, 3, 5, 7, 9, 12, 21]));

// 11-masala
// function massiv(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i] + 1);
//     }

//     return arg;
// }

// console.log(massiv([-7, -2, 2, 3, 30, 5, 7, 9, 12]));

// 12-masala
// function index(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     console.log(${arg[i]}  indeksi  ${i});
//   }

// }

// console.log(index([-2, 3, 5, -7, 9, 12, -32]));

// 13-masala
// function teng(arg) {
//   let a = 5;
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] == a) {
//       counter = counter + 1;
//     }
//   }

//   return counter;
// }

// console.log(teng([2, 23, 5, 3, 5, 7, 9, 5, 32, 5]));

// 14-masala
// function massiv(arg) {
//   let Massiv = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       Massiv.push(arg[i]);
//     }
//   }

//     return Massiv;
// }
// console.log(massiv([-2, 3, 5, -7, 9, 12, -32]));

// 15-masala
// function massiv(arg) {
//   let Masssiv = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < 0) {
//       Massiv.push(arg[i]);
//     }
//   }

//     return Massiv;
// }
// console.log(massiv([-2, 3, 5, -7, 9, 12, -32]));

// 17-masala
// function (arg) {
//     for(let i = 0; i < arg.length; i++) {
//         console.log(arg[i] ** 2);
//     }

//     return arg;
// }

// console.log(massiv([-7, -2, 2, 3, 30, 5, 7, 9, 12]));


// 19-masala
// let N = [2, 3, 6, 7, 9, 12, 3];
// function count(N) {
//   let counter = 0;
//   let sum = 0;
//   let a;
//   for (let i = 0; i < N.length; i++) {
//     counter = counter + 1;
//     sum = sum + N[i];
//   }

//   a = sum / counter;

//   return a;
// }

// console.log(count(N));

// 1-masala
// for (let i = 0; i < N.length; i++) {
//   console.log(N[i]);
// }

// function son(n) {
//     let s = 1;

//     for (let i= 0; i < n.length; i++) {
//         if(n[i] % 2 == 1) {
//             s = s * n[i]
//         }
//     }

//     return s;
// }

// console.log(son([2, 3, 5, 7, 8]));

// 2-masala
// let N = [12,23,24,55,87,9];

// function count(N) {
//     let counter = 0;
//     for (let i = 0; i < N.length; i++) {
//         if (N[i] % 3 == 0 && N[i] % 2 == 0) {
//             counter = counter + 1;
//         }
//     }

//     return counter;
// }

// console.log(count[N]);

// 3-masala
// function massiv() {
//   let n = +prompt("n soni kiritilsin");
//   let s = [];
//   for (let i = 1; i <= n; i++) {
//     s.push(i);
//   }

//   return s;
// }

// console.log(massiv());

// 4-masala
// function massiv() {
//     let n = +prompt("n soni kiritilsin");
//     let b = [];
//     for (let i = 1; i <= n * 2; i += 2) {
//       b.push(i);
//     }

//     return b;
//   }

//   console.log(massiv());

// 5-masala
// function massiv() {
//     let n = +prompt("n soni kiritilsin");
//     let m = [];
//     for (let i = 2; i <= n * 2; i += 2) {
//       m.push(i);
//     }
  
//     return m;
//   }
  
//   console.log(massiv());