// console.log("Jeck  Ma Maslahatlari: ");
// const list = [
//     "Be a good student", //0-20
//     "Choose a right boss and make many mistakes", //20 - 30
//     "Start working on yourself", // 30 - 40
//     "Do what you are good at", // 40 - 50
//     "Invest in young generation", // 50 - 60
//     "Enjoy your life and it is all useless then", //60 ~
// ];
// function giveMeAdvice (age, callback){
//     if(typeof age !== 'number') callback ("Please enter your age", null)
//         else if (age <=20) callback(null, list[0]);
//         else if (age >20 && age<=30) callback(null, list[1]);
//         else if (age >30 && age<=40) callback(null, list[2]);
//         else if (age >40 && age<=50) setTimeout(function() {callback(null, list[3]);}, 5000);
//         else if (age >50 && age <=60) callback(null, list[4]);
//         else {
//             setInterval(() => {
//                 callback(null, list[5]);
//             }, 1000);
//         }
// }
// console.log("Started Here");
// giveMeAdvice(67, (err, data) => {
//     if(err) console.log('ERROR: ', err);
//     console.log(data);
// }); 
// console.log("Passed Here");

// async function giveMeAdvice (age){
//     if(typeof age !== 'number') throw new Error("Please insert a number identifying your real age");
//         else if (age <=20) return list[0];
//         else if (age >20 && age<=30) return list[1];
//         else if (age >30 && age<=40) return list[2];
//         else if (age >40 && age<=50) return list[3];
//         else if (age >50 && age <=60) return list[4];
//         else {
//             return new Promise ((resolve, reject) => setTimeout(() => resolve (list[5])), 5000);}
//         }
        
//         async function run () {
//             let answer = await giveMeAdvice(66);
//             console.log("Javob-1: ", answer);
//             answer = await giveMeAdvice(54); 
//             console.log("Javob-2: ", answer);
//             answer = await giveMeAdvice(24);
//             console.log("Javob: ", answer);
//         }
//         run();



//TASK A
// function countLetter(l, word) {
//     let sum = 0;                           // har safar yangi hisob
//     let newMassive = Array.from(word);     // har safar yangi massiv
//     let length = newMassive.length;

//     for (let i = 0; i < length; i++) {
//         if (newMassive[i] === l) {         // taqqoslash ===
//             sum++;
//         }
//     }
//     return sum;
// }

// // Testlar
// console.log(countLetter('m', 'omaddior')); // 1
// console.log(countLetter('m', 'manzara'));  // 1
// console.log(countLetter('j', 'banana'));   // 0
// console.log(countLetter('a', 'banana'));   // 3
// console.log(countLetter('m', 'Mirzakarimov Muhammadrahim'));

// //Task B

// // function countDigit (word){
// //     let sum = 0;
// //     for (let i = 0; i<word.length; i++){
// //         const eachElement = word[i];
// //         if(eachElement >=0 && eachElement <=9)
// //         {
// //             console.log("Qiymat: ", word[i]);
// //             sum++;
// //         }


// Task C
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // vaqtni olish uchun yordamchi metod
//   getTime() {
//     const now = new Date();
//     let hours = now.getHours().toString().padStart(2, "0");
//     let minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   // 1) qoldiq
//   qoldiq() {
//     console.log(
//       `Hozir ${this.getTime()} da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
//     );
//   }

//   // 2) sotish
//   sotish(product, qty) {
//     if (this[product] !== undefined) {
//       if (this[product] >= qty) {
//         this[product] -= qty;
//         console.log(
//           `${qty}ta ${product} sotildi. Yangi qoldiq: ${this[product]}`
//         );
//       } else {
//         console.log(`Yetarli ${product} yo'q!`);
//       }
//     } else {
//       console.log(`${product} mavjud emas`);
//     }
//   }

//   // 3) qabul
//   qabul(product, qty) {
//     if (this[product] !== undefined) {
//       this[product] += qty;
//       console.log(
//         `${qty}ta ${product} qabul qilindi. Yangi qoldiq: ${this[product]}`
//       );
//     } else {
//       console.log(`${product} mavjud emas`);
//     }
//   }
// }

// // --- Sinov ---
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();  
// // Hozir 20:40 da 4ta non, 5ta lag'mon va 2ta cola mavjud

// shop.sotish("non", 3);  
// shop.qabul("cola", 4);  
// shop.qoldiq();  
// // Hozir 20:50 da 1ta non, 5ta lag'mon va 6ta cola mavjud


//Task D
 let a; let b;
function checkContent (a, b) {
  if(a===b) {
    console.log("Qiymatlar teng....");
  } else {
    console.log("Qiymatlar teng emas.....");
  }
}
checkContent(4, 5);
checkContent(4, 4);
checkContent("PlayStation", "playstation");
checkContent("PlayStation", "PlayStation");
checkContent(true, true);
checkContent(true, false);
