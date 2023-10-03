'use strict';

// 1. Destructuring Arrays (75)
// 2. Destructuring Objects (115)
// 3. The Spread Operator (...) (158)
// 4. Rest Pattern And Parameters (205)
// 5. Short Circuiting (&& and ||) (248)
// 6. The Nullish Coalescing Operator (??) (284)
// 7. Looping Arrays: The FOR-OF Loop (298)
// 8. Enhanced Object Literals (restaurant)
// 9. Optional Chaining (?) (314)
// 10. Sets (352)
// 11. Maps (390)
// 12. Maps: Iteration (425)
// 13. Working with Strings (462)

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/*
////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/

/*
////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 0,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
////////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real-world example
const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
////////////////////////////////////////
//Rest Pattern And Parameters 

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu
];
console.log(pizza, rissoto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions

const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3, 2, 1);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
////////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('------- OR --------')

// Use ANY data type, return ANY data type, short-circuiting
console.log( 3 || 'Jonas');
console.log( '' || 'Jonas');
console.log( true || 0);
console.log( undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10
console.log(guests2);

console.log('------- AND --------')

console.log( 0 && 'Jonas');
console.log( 7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
////////////////////////////////////////
// The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
////////////////////////////////////////
// Looping Arrays: The FOR-OF Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
} 

console.log([...menu.entries()]);
*/

/*
////////////////////////////////////////
// Optional Chaining (?) 

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
} 

// console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// Array
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];

console.log(users[0]?.name ?? 'User array empty');

// Same result, but more "complicated" ❌
if (users.length > 0) {
    console.log(users[0].name);
} else {
    console.log('User array empty')
}
*/

/*
////////////////////////////////////////
// Sets

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas')); // [ 'j', 'o', ... , 's' ]

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // True
console.log(ordersSet.has('Bread')); // False
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Exmaple
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('Sayago').size);
*/

/*
////////////////////////////////////////
// Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true,'We are open :D')
    .set(false, 'We are close :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

// rest.clear();

const arr = [1, 2]
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
////////////////////////////////////////
// Maps: Iteration

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Rust'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

////////////////////////////////////////
// Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);  
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); //Not been found

console.log(airline.slice(4)); //4 is the begin parameter
console.log(airline.slice(4, 7)); // End - Beginning: 7-4:3

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if ( s == 'B' || s == 'E') {
    console.log('You got the middle seat 😅');
  } else {
    console.log('You got lucky 😃');
  }
  
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// This conversion is what JavaScript does behind the scenes
// whenever we call a method on a string. It's call Boxing.
//
// And then when the operation is do, the object is converted
// back to a regular string primitive.
console.log(new String('Jonas'));
*/

/*
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.iO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// Replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Regular expression
console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!')
  }
};

checkBaggage('I have a laptop, some foot and a poket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Angel Saul Sayago'.split(' '));

const [firstName, lastName] = 'Angel Sayago'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('angel saul sayago leiba');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(477910924));
console.log(maskCreditCard(4779100233489234));
console.log(maskCreditCard('3322934812384329'));

// Repeat

const message2 = 'Bad waether... All Departues Delayed...  ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${"✈️'".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
*/
