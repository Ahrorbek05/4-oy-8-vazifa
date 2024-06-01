// 1-masala
// function sumArray(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return 0;
//     }
//     const sum = arr.kamaytirish((yigindi, qiymat) => yigindi + qiymat, 0);
//     return sum;
// }
// const javob = [19, 21, 30, 40, 25];
// console.log(sumArray(javob));

// 2-masala
// function engKattaElement(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return undefined;
//     }
//     return Math.max(...arr);
// }
// const raqam = [136, 20, 322, 401, 120];
// console.log(engKattaElement(raqam));

// 3-masala
// function EngKichikElement(arr) {
//     if (arr.length === 0) {
//         console.log("Massiv bo'sh");
//     }
//     let kichik = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < kichik) {
//             kichik = arr[i];
//         }
//     }
//     return kichik;
// }

// const array = [30, 15, 21, 8, 22];
// console.log(EngKichikElement(array));

// 4-masala
// function ManfiyMusbat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = Math.abs(arr[i]);
//         }
//     }
//     return arr;
// }
// const array = [-33, 15, -10, 8, -12];
// console.log(ManfiyMusbat(array));

// 5-masala
// function oshirish(arr) {
//     for ( let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }
// const array = [20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(oshirish(array));

// 6-masala
// function JuftRaqam(arr) {
//     return arr.filter(function(element) {
//         return element % 2 !== 0;
//     });
// }
// const array = [11, 29, 33, 41, 52, 62];
// console.log(JuftRaqam(array));

// 7-masala
// function ToqRaqam(arr) {
//     return arr.filter(function(element) {
//         return element % 2 !== 1;
//     });
// }
// const array = [11, 29, 33, 41, 52, 62];
// console.log(ToqRaqam(array));

// 8-masala
// function bor(arr, element) {
//     return arr.includes(element);
// }
// const array = [10, 22, 13, 4, 5, 8, 222, 19];
// console.log(bor(array, 13));
// console.log(bor(array, 19));

// 9-masala
// function teskariTartib(arr) {
//     return arr.slice().reverse();
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(teskariTartib(array));
// console.log(array);

// 10-masala
// function hisoblash(arr, qiymati) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > qiymati) {
//             count++;
//         }
//     }
//     return count;
// }
// const array = [10, 50, 80, 30, 70, 100, 200];
// const qiymati = 50;
// console.log(hisoblash(array, qiymati));

// 11-masala
// function Oshirish(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 1;
//     }
//     return arr;
// }
// const array = [10, 20, 30, 40, 50];
// console.log(Oshirish(array));

// 12-masala
// function ElementningIndeksi(arr, element) {
//     return arr.indexOf(element);
// }
// const array = [1,2,3,4,5,6,7,8,9,10];
// const element = 9;
// console.log(ElementningIndeksi(array, element));
// console.log(ElementningIndeksi(array, 7));

// 13-masala
// function hisoblash(arr, qiymati) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === qiymati) {
//             count++;
//         }
//     }
//     return count;
// }
// const array = [12, 22, 3, 4, 4, 5, 4];
// const HisoblashQiymati = 4;
// const hodisalar = hisoblash(array, HisoblashQiymati);
// console.log(`${HisoblashQiymati} qiymati massivda ${hodisalar} marta paydo bo'ladi.`);

// 14-masala
// function musbatRaqamlar(arr) {
//     return arr.filter(num => num > 0);
// }
// const array = [-3, 5, -17, 10, 15, -33];
// const musbatRaqam = musbatRaqamlar(array);
// console.log("Masivdagi musbat raqamlar:", musbatRaqam);

// 15-masala
// function manfiyRaqamlar(arr) {
//     return arr.filter(num => num < 0);
// }
// const array = [-1, 5, -99, 101, -8, -9];
// const manfiyRaqam = manfiyRaqamlar(array);
// console.log(`Massivdagi manfiy raqamlar:`, manfiyRaqam);

// 16-masala
// function satr(arr) {
//     return arr.map(String);
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const stringArray = satr(array);
// console.log("Massiv satrlarga aylantirildi:", stringArray);

// 17-masala
// function kvadrati(arr) {
//     return arr.map(num => num * num);
// }
// const array = [11, 22, 33, 44, 55, 111];
// const KvadratMassiv = kvadrati(array);
// console.log("Kvadrat massiv:", KvadratMassiv);

// 18-masala
// function nusxalash(NusxaMassiv) {
//     return [...NusxaMassiv];
// }
// const haqiqiy = [19, 22, 31, 40, 51];
// const nusxalanganMassiv = nusxalash(haqiqiy);
// console.log("Nusxa olingan massiv:", nusxalanganMassiv);

// 19-masala
// function Hisoblash(arr) {
//     const sum = arr.reduce((barchasi, num) => barchasi + num, 0);
//     const ortacha = sum / arr.length;
//     return { sum, ortacha };
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const { sum, ortacha } = Hisoblash(array);
// console.log("Yig'indisi:", sum);
// console.log("O'rtacha qiymati :", ortacha);

// 20-masala
// function takroriy(arr) {
//     return [...new Set(arr)];
// }
// const array = [1, 2, 3, 4, 3, 2, 5, 6, 6, 7, 1, 3];
// const noyob = takroriy(array);
// console.log("Dublikatlari olib tashlangan massiv:", noyob);
