// Задание 1. ( это из старой домашки ) 

// function mult(numArray){ 
//    result = numArray[0] * numArray[1] * numArray[2] * numArray[3];
//    console.log(result);
// }
// 
// function sum(numArray) {
    // result = numArray[0] + numArray[1] + numArray[2] + numArray[3];
    // console.log(result);
// }
// 
// function getResult(callback, numArray) {
    // callback(numArray);
// }
// 
// numArray = [7, 6, 10, 19];
// 
// getResult(mult,numArray);
// getResult(sum,numArray);


// Задание 1. 
 
// const users = [
	// {name: 'Jon', age: 22},
	// {name: 'Richard', age: 18},
	// {name: 'Anton', age: 32},
	// {name: 'Lida', age: 23},
	// {name: 'Bob', age: 44}
// ];
// 
// function compareFunction(a, b) {
	// return a.age - b.age;
// }
// 
// users.sort(compareFunction)
// console.log(users);


//Задание 2. 

// function isPositive(num) {
//   return num > 0;
// }
// 
// function isMale(person) {
//   return person.gender === 'male';
// }
// 
// function filter(arr, ruleFunction) {
//   const result = [];
//   arr.map(function(item) {
    // if (ruleFunction(item)) {
    //   result.push(item);
    // }
//   });
//   return result;
// }
// 
// console.log(filter([3, -4, 1, 9], isPositive)); 
// 
// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];
// 
// console.log(filter(people, isMale)); 
 


// Задание 3. 

// let myDate = new Date()
// const timer = (myDate) => {
	// const interval = setInterval(() => {
		// console.log(new Date());
	// }, 3000);
	// setTimeout (() =>{
	// clearInterval(interval);
	// console.log("30 секунд прошло");
// }, myDate * 1000)
// };
// console.log(myDate);
// timer(30)


// Задание 4. 

// function delayForSecond(callback) {
		// setTimeout(() => {
			// if(callback) { 
		// callback()};
	// }, 1000)
// }
// 
// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

 
// Задание 5. 
//  
// function delayForSecond(cb) {
    // setTimeout(() => {
        // console.log('Прошла одна секунда');
			// if(cb) {cb()};
    // }, 1000)
// }
// 
// function sayHi (name) {
	// console.log(`Привет, ${name}!`);
// }
// 
// delayForSecond(() => {
//   sayHi('Глеб');
// });














 













