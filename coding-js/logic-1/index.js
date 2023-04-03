// =============================================================================
/*
Logic-1 -- cigarParty
When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

Examples

cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true

Solution
function cigarParty(cigars, isWeekend){
    if(isWeekend && cigars >= 40) {
    return true;
    }
    else if (!isWeekend) {
    if(cigars >= 40 && cigars <= 60) {
        return true;
    } else return false;
    } else return false;
}
*/
// =============================================================================
/*
Logic-1 -- dateFashion
You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

Examples
dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1

Solution
function dateFashion(you, date){
    if(you <= 2 || date <= 2) return 0;
    if( (you >= 8 && date >= 5) || (you >= 5 && date >= 8)) return 2;
    if(you <= 5 || date <= 5) return 1;
}
*/
// =============================================================================
/*
Logic-1 -- squirrelPlay
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

Examples
squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true

Solution
function squirrelPlay(temp, isSummer){
    let state;
    if(isSummer) {
    state = temp >= 60 && temp <= 100;
    } else {
    state = temp >= 60 && temp <= 90;
    }
    return state;
}
*/
// =============================================================================
/*
Logic-1 -- caughtSpeeding
You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

Examples
caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0

Solution
function caughtSpeeding(speed, isBirthday){
    let result;
    if(isBirthday) {
    if(speed <= 60 + 5) result = 0;
    else if(speed >= 60 + 5 && speed <= 80 + 5) result = 1;
    else if(speed >= 81 + 5 ) result = 2;
    } else {
    if(speed <= 60) result = 0;
    else if(speed >= 60 && speed <= 80) result = 1;
    else if(speed >= 81) result = 2;
    }
    return result;
}
*/
// =============================================================================
/*
Logic-1 -- sortaSum
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

Examples
sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21

Solution
function sortaSum(a, b){
    return (a + b >= 10 && a + b <= 19) ? 20 : a + b;
}
*/
// =============================================================================
/*
Logic-1 -- alarmClock
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

Examples
alarmClock(1, false) → 7:00
alarmClock(5, false) → 7:00
alarmClock(0, false) → 10:00

Solution
function alarmClock(day, vacation){
    if(vacation) {
    if(day === 0 || day === 6) {
        return 'off';
    } else {
        return '10:00';
    }
    } else {
    if(day === 0 || day === 6) return '10:00';
    else return '7:00';
    }
}
*/
// =============================================================================
/*
Logic-1 -- love6
The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

Examples
love6(6, 4) → true
love6(4, 5) → false
love6(1, 5) → true

Solution
function love6(a, b){
    return (a === 6 || b === 6) || a + b === 6 || Math.abs(a-b) === 6;
}
*/
// =============================================================================
/*
Logic-1 -- in1To10
Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

Examples
in1To10(5, false) → true
in1To10(11, false) → false
in1To10(11, true) → true

Solution
function in1To10(n, outsideMode){
    if(outsideMode) {
    return n <= 1 || n >= 10;
    } else {
    return n >= 1 && n <= 10;
    }
}
*/
// =============================================================================
/*
Logic-1 -- specialEleven
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator.

Examples
specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false

Solution
function specialEleven(n){
    return (n % 11 === 0) ? true :
    ((n % 11) === 1) ? true : false;
}
*/
// =============================================================================
/*
Logic-1 -- more20
Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

Examples
more20(20) → false
more20(21) → true
more20(22) → true

Solution
function more20(n){
    return n % 20 === 1 || n % 20 === 2;
}
*/
// =============================================================================
/*
Logic-1 -- old35
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

Examples
old35(3) → true
old35(10) → true
old35(15) → false

Solution
function old35(n){
    return (n % 3 === 0 && n % 5 === 0) ? false
    : (n % 3 === 0 || n % 5 === 0) ? true : false;
}
*/
// =============================================================================
/*
Logic-1 -- less20
Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

Examples
less20(18) → true
less20(19) → true
less20(20) → false

Solution
function less20(n){
    return n % 20 + 1 === 20 || n % 20 + 2 === 20;
}
*/
// =============================================================================
/*
Logic-1 -- nearTen
Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.

Examples
nearTen(12) → true
nearTen(17) → false
nearTen(19) → true

Solution
function nearTen(num){
    let multiple = num % 10;
    return '128910'.includes(Math.abs(10-multiple));
}
*/
// =============================================================================
/*
Logic-1 -- teenSum
Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

Examples
teenSum(3, 4) → 7
teenSum(10, 13) → 19
teenSum(13, 2) → 19

Solution
function teenSum(a, b){
    if((a >= 13 && a <=19) || (b >= 13 && b <= 19)) {
    return 19;
    } else return a + b;
}
*/
// =============================================================================
/*
Logic-1 -- answerCell
Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

Examples
answerCell(false, false, false) → true
answerCell(false, false, true) → false
answerCell(true, false, false) → false

Solution
function answerCell(isMorning, isMom, isAsleep){
    if(isAsleep) {
    return false;
    } else {
    if(isMom && isMorning) {
        return true;
    } else if(!isMorning) {
        return true;
    } else return false;
    }
}
*/
// =============================================================================
/*
Logic-1 -- teaParty
We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

Examples
teaParty(6, 8) → 1
teaParty(3, 8) → 0
teaParty(20, 6) → 2

Solution
function teaParty(tea, candy){
    if(tea >= 5 && candy >= 5 && (tea >= candy * 2 || candy >= tea * 2)) {
    return 2;
    } else if (tea >= 5 && candy >= 5) {
    return 1;
    } else {
    return 0;
    }
}
*/
// =============================================================================
/*
Logic-1 -- fizzString
Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

Examples
fizzString('fig') → Fizz
fizzString('dib') → Buzz
fizzString('fib') → FizzBuzz

Solution
function fizzString(str){
    if(str.startsWith('f') && str.endsWith('b')) {
        return 'FizzBuzz';
    } else if(str.endsWith('b')) {
    return 'Buzz';
    } else if (str.startsWith('f')) {
        return 'Fizz'
    } else return str;
}
*/
// =============================================================================
/*
Logic-1 -- fizzString2
Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another?

Examples
fizzString2(1) → 1!
fizzString2(2) → 2!
fizzString2(3) → Fizz!

Solution
function fizzString2(n){
    if(n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz!';
    } else if (n % 3 === 0) {
    return 'Fizz!';
    } else if (n % 5 === 0) {
    return 'Buzz!';
    } else return `${n}!`;
}
*/
// =============================================================================
/*
Logic-1 -- twoAsOne
Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

Examples
twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false

Solution
function twoAsOne(a, b, c){
    *1-solution
    const arr = [a,b,c].sort((a,b) => a - b);
    return Math.abs(arr[0]) + Math.abs(arr[1]) === Math.abs(arr.at(-1));

    *2-solution
    const max = Math.max(a,b,c);
    const min = Math.min(a,b,c);
    let str = `${a}${b}${c}`.replace(max, '').replace(min, '');
    return Math.abs(max) - Math.abs(min) === Math.abs(+str);
}
*/
// =============================================================================
/*
Logic-1 -- inOrder
Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

Examples
inOrder(1, 2, 4, false) → true
inOrder(1, 2, 1, false) → false
inOrder(1, 1, 2, true) → tr

Solution
function inOrder(a, b, c, bOk){
    if(bOk && c > b) {
    return true;
    } else if (b > a && c > b) {
    return true;
    } else return false;
}
*/
// =============================================================================
/*
Logic-1 -- lastDigit
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

Examples
lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true

Solution
function lastDigit(a, b){
    return a % 10 === b % 10;
}
*/
// =============================================================================
/*
Logic-1 -- withoutDoubles
Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

Examples
withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6

Solution
function withoutDoubles(die1, die2, noDoubles){
    if(noDoubles) {
    if(die1 === die2) {
        return die1 === 6 ? die1 + 1 : die1 + 1 + die2;
    } else {
        return die1 + die2;
    }
    } else {
    return die1 + die2;
    }
}
*/
// =============================================================================
/*
Logic-1 -- maxMod5
Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

Examples
maxMod5(2, 3) → 3
maxMod5(6, 2) → 6
maxMod5(3, 2) → 3

Solution
function maxMod5(a, b){
    const min = Math.min(a,b);
    const max = Math.max(a,b);

    if(a % 5 === b % 5 && a !== b) {
    return min;
    } else if (a === b) {
    return 0;
    } else {
    return max;
    }
}
*/
// =============================================================================
/*
Logic-1 -- redTicket
You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

Examples
redTicket(2, 2, 2) → 10
redTicket(2, 2, 1) → 0
redTicket(0, 0, 0) → 5

Solution
function redTicket(a, b, c){
    const arr = Array.from(arguments);
    if(arr.every(elem => elem === 2)) return 10;
    else if(Array.from(new Set(arr)).length === 1) return 5;
    else if(c !== a && b !== a) return 1;
    else return 0;
}
*/
// =============================================================================
/*
Logic-1 -- greenTicket
You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

Examples
greenTicket(1, 2, 3) → 0
greenTicket(2, 2, 2) → 20
greenTicket(1, 1, 2) → 10

Solution
function greenTicket(a, b, c){
    const arr = Array.from(arguments);

    if(Array.from(new Set(arr)).length === 1) {
    return 20;
    } else if(Array.from(new Set(arr)).length === 2) {
    return 10;
    }
    else if(arr.every((elem ,index, arr) => elem !== arr[index+1])) {
    return 0;
    }
}
*/
// =============================================================================
/*
Logic-1 -- shareDigit
Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

Examples
shareDigit(12, 23) → true
shareDigit(12, 43) → false
shareDigit(12, 44) → false

Solution
function shareDigit(a, b){
    const bArr = [b].join('').split('');
    return bArr.some(elem => String(a).includes(elem));
}
*/
// =============================================================================