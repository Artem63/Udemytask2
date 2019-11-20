'use strict';

var money = +prompt("Ваш бюджет на месяц?", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
// 		b = prompt("Во сколько обойдется?", "");

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
// 	&& a != '' && b != '' && a.length < 50) { 
// 	// ( (typeof(a)) === 'string') - проверка что данные являются строкой, 
//  	// (typeof(a)) != null если юзер нажмет отмена данные не запишутся, отмена = null
//  	// a != '' - проверка чтобы юзер не оставлял строку пустой, незаполненной
//  	// a.length < 50 - свойство lentgh помогает ограничить кол-во вводимых знакоы в поле юзером
		
// 		appData.expenses[a] = b; //создаем свойство объекта: ключ = значение
// 	 }  else {
// 	 	console.log ("bad result");
//         i--;
// 	 }
// } 

// let i = 0;
// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
// 		b = prompt("Во сколько обойдется?", "");
// 	i++;

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
// 	&& a != '' && b != '' && a.length < 50) { 
		
// 		appData.expenses[a] = b; 
// 	 }  else {
// 	 	console.log ("bad result");
//         i--;
// 	 }
// }

let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 50) { 
		
		appData.expenses[a] = b; 
	 }  else {
	 	console.log ("bad result");
        i--;
	 }
   	i++;
}

while (i < 2);

appData.moneyPerDay = appData.budget / 30;


alert("Бюджет на 1 день:" + " " + appData.moneyPerDay);

console.log(appData);

//ниже запишем условия, в зависимости от бюджета на 1 один выводим достаток юзера
// if (appData.moneyPerDay  < 100) - цифра 100 в условии в скобках рандомная, неважно

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}


