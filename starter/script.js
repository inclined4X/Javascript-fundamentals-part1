/*
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job;


var job = "programmer";
job = "teacher";

lastName = 'Sam';
console.log(lastName)


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3)
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName)

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25;
x *= 4;
x++;
x--;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 28;
console.log(now - 1991 > now - 2018)


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)


let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); 

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); 


// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let BMIMark1 = markMass1 / (markHeight1 * markHeight1)
console.log(BMIMark1)
let BMIJohn1 = johnMass1 / (johnHeight1 * johnHeight1)
console.log(BMIJohn1)

const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log(markHigherBMI1)

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let BMIMark2 = markMass2 / (markHeight2 * markHeight2)
console.log(BMIMark2)
let BMIJohn2 = johnMass2 / (johnHeight2 * johnHeight2)
console.log(BMIJohn2)

const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2)


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991; 
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)


const age = 15;


if(age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too long, wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;

let century
if(birthYear <= 2000) {
     century = 20;
} else {
    century = 21;
}
console.log(century)


// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let BMIMark1 = markMass1 / (markHeight1 * markHeight1);
let roundedBMIMark1 = BMIMark1.toFixed(1);
console.log(BMIMark1);
let BMIJohn1 = johnMass1 / (johnHeight1 * johnHeight1);
let roundedBMIJohn1 = BMIJohn1.toFixed(1);
console.log(BMIJohn1);

const markHigherBMI1 = BMIMark1 > BMIJohn1;;
console.log(markHigherBMI1);

if(BMIMark1 > BMIJohn1) {
    console.log(`Mark's BMI (${roundedBMIMark1}) is higher than John's BMI (${roundedBMIJohn1})`)
} else {
    console.log(`John's BMI is higher than Mark's BMI`)
};


//type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23); 

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2'); 
console.log('23' / '2');
console.log('23' > '2');


let n = '1' + 1; //11
n = n - 1; //11-1 = 10
console.log(n);


// 5 falsy values : 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job')
}

let height = 0;
if(height) {
    console.log('YAY! Height is defined')
} else{
    console.log('Height is UNDEFINED')
}


const age = "18";
if (age === 18) console.log('You just became an adult :D')

if (age == 18) console.log('You just became an adult :D (loose)')

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 25) {
    console.log('Cool! 25 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9 ){
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 25 or 7 or 9')
}

if(favourite !== 25) console.log('Why not 25?');


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!') 
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!') 
} else {
    console.log('Someone else should drive...')
}


// Coding challenge #3
/*const averageDolphinScore = (96 + 108 + 89) / 3;
console.log(averageDolphinScore);
const averageKoalasScore = (88 + 91 + 110) / 3;
console.log(averageKoalasScore);


if (averageDolphinScore > averageKoalasScore) {
    console.log("Dolphins are the winners")
} else if (averageDolphinScore === averageKoalasScore) {
    console.log('Draw')
} else {
    console.log("Koalas are the winners")
}

//Bonus 1 abd bonus 2
const averageDolphinScore = (97 + 112 + 80) / 3;
console.log(averageDolphinScore);
const averageKoalasScore = (109 + 95 + 50) / 3;
console.log(averageKoalasScore);

if (averageDolphinScore > averageKoalasScore && averageDolphinScore  >= 100) {
    console.log('Dolphins are the winners')
} else if (averageKoalasScore > averageDolphinScore && averageKoalasScore >= 100) {
    console.log('Koalas are the winners')
} else if (averageDolphinScore === averageKoalasScore && averageDolphinScore >=100 && averageKoalasScore >= 100){
    console.log('Draw')
} else {
    console.log('No one wins the trophy')
}


const day = 'wednesday';

switch(day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day')
}

if (day === 'moday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day'); 
}


3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I"m ${2037 - 1991} years old ${me}`)


//conditional operator
const age = 23;
//age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >=18 ? 'wine' : 'water'
console.log(drink)

let drink2;
if(age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water'
}

console.log(drink2);

console.log(`I like to drink ${ age >=18 ? 'wine' : 'water'}`);
*/

// const bill = 275;
// const tip = bill <=300 && bill >=50 ? bill *  0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
//     ${bill + tip}`)

// const bill = 40;
// const tip = bill <=300 && bill >=50 ? bill *  0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
//     ${bill + tip}`)

const bill = 430;
const tip = bill <=300 && bill >=50 ? bill *  0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);