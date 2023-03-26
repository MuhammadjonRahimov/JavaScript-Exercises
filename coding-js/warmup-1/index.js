/*
Warmup-1 -- sleepIn
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples
sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true

Solution
function sleepIn(weekday, vacation){
    *1-solution
    if(vacation) return true;
    else if(weekday) return false;
    else if (weekday === false) return true;

    *2-solution
    return (vacation || weekday === false) ? true : false;
}
*/
// ============================================================================
/*
Warmup-1 -- monkeyTrouble
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

Examples
monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false

Solution
function monkeyTrouble(aSmile, bSmile){
    *1-solution
    if(aSmile && bSmile || !aSmile && !bSmile) return true;
    else return false;

    *2-solution
    return (aSmile && bSmile || !aSmile && !bSmile) ? true : false;
}
*/
// =============================================================================
/*
Warmup-1 -- sumDouble
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples
sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

Solution
function sumDouble(a, b){
    *1-solution
    if(a === b) return (a+b)*2;
    else return a + b;
    *2-solution
    return a === b ? (a+b)*2 : a + b;
}
*/
// =============================================================================
/*
Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

Examples
diff21(19) → 2
diff21(10) → 11
diff21(21) → 0

Solution
function diff21(n){
    *1-solution
    if(n > 21) return (n-21) * 2;
    else return 21 - n;
    *2-solution
    return n > 21 ? (n-21) * 2 : 21 - n;
}
*/
// =============================================================================
/*
Warmup-1 -- parrotTrouble
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

Examples
parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false

Solution
function parrotTrouble(talking, hour){
  if(talking) {
    if(hour < 7 || hour > 20) return true;
    else return false;
  } else return false;
}
*/
// =============================================================================
/*
Warmup-1 -- makes10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

Examples

makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true

Solution
function makes10(a, b){
    *1-solution
    if(a === 10 || b === 10 || a + b === 10) return true;
    else return false;

    *2-solution
    return (a === 10 || b === 10 || a + b === 10) ? true : false;
}
*/
// =============================================================================
/*
Warmup-1 -- nearHundred
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

Examples

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false

Solution
function nearHundred(n){
    *1-solution
    if(Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10) {
        return true;
    } else return false;

    *2-solution
    return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10 ? true : false;
}
*/
// =============================================================================
/*
Warmup-1 -- posNeg
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Examples
posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true

Solution
function posNeg(a, b, negative){
  if(!negative) {
    if(a < 1 && b >= 1 || a >= 1 && b < 1) return true;
    else return false;
  } else if(negative) {
    if(a < 1 && b < 1) return true;
    else return false;
  }
}
*/
// =============================================================================
/*
Warmup-1 -- notString
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

Examples
notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad

Solution
function notString(str){
    *1-solution
    if(str.startsWith('not')) return str;
    else return 'not ' + str;
    *2-solution
    return str.startsWith('not') ? str : 'not ' + str;
}
*/
// =============================================================================
/*
Warmup-1 -- missingChar
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

Examples
missingChar('kitten', 1) → ktten
missingChar('kitten', 0) → itten
missingChar('kitten', 4) → kittn

Solution
function missingChar(str, n){
    *1-solution
    return str.replace(str[n],'');
    *2-solution
    return str.slice(0,n) + str.slice(n+1);
    *3-solution
    return str.substr(0,n) + str.substr(n+1);
    *4-solution
    return str.split('').filter((_,index) => index !== n).join('');
}
*/
// =============================================================================
/*
Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars have been exchanged.

Examples
frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba

Solution
function frontBack(str){
  if(str.length <= 2) return str.split('').reverse().join('');
  return str[str.length-1] + str.slice(1, str.length-1) + str[0];
}
*/
// =============================================================================
/*
Warmup-1 -- front3
Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

Examples
front3('Java') → JavJavJav
front3('Chocolate') → ChoChoCho
front3('abc') → abcabcabc

Solution
function front3(str){
  return str.slice(0,3).repeat(3);
}
*/
// =============================================================================

/*
Warmup-1 -- backAround
Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.

Examples
backAround('cat') → tcatt
backAround('Hello') → oHelloo
backAround('a') → aaa

Solution
function backAround(str){
    *1-solution
    return str[str.length-1] + str + str[str.length-1];

    *2-solution
    const arrFromStr = str.split('');
    return [str.at(-1), ...arrFromStr, str.at(-1)].join('');
}
*/
// =============================================================================
/*
Warmup-1 -- or35
Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

Examples
or35(3) → true
or35(10) → true
or35(8) → false

Solution
function or35(n){
    *1-solution
    if(n % 3 === 0 || n % 5 === 0) return true;
    else return false;

    *2-solution
    return (n % 3 === 0 || n % 5 === 0) ? true : false;
}
*/
// =============================================================================
/*
Warmup-1 -- front22
Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

Examples
front22('kitten') → kikittenki
front22('Ha') → HaHaHa
front22('abc') → ababcab

Solution
function front22(str){
    *1-solution
    return str.slice(0,2) + str + str.slice(0,2);

    *2-solution
    return str.substr(0,2) + str + str.substr(0,2);
}
*/
// =============================================================================
/*
Warmup-1 -- startHi
Given a string, return true if the string starts with 'hi'and false otherwise.

Examples
startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false

Solution
function startHi(str){
  return str.startsWith('hi');
}
*/
// =============================================================================
/*
Warmup-1 -- icyHot
Given two temperatures, return true if one is less than 0 and the other is greater than 100.

Examples
icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false

Solution
function icyHot(temp1, temp2){
  return ((temp1 > 100 && temp2 < 0) || (temp1 < 0 && temp2 > 100));
}
*/
// =============================================================================
/*
Warmup-1 -- in1020
Given 2 int values, return true if either of them is in the range 10..20 inclusive.

Examples
in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false

Solution
function in1020(a, b){
    *1-solution
    if((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) return true;
    else return false;

    *2-solution
    return ((a >= 10 && a <= 20) || (b >= 10 && b <= 20));
}
*/
// =============================================================================
/*
Warmup-1 -- hasTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

Examples
hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true

Solution
function hasTeen(a, b, c){
  return ((a >= 13 && a <= 19) ||
          (b >= 13 && b <= 19) ||
          (c >= 13 && c <= 19));
}
*/
// =============================================================================
/*
Warmup-1 -- loneTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

Examples
loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false

Solution
function loneTeen(a, b){
    *1-solution
    if(a >= 13 && a <= 19 && (b < 13 || b >19)) {
        return true;
    } else if ((b >= 13 && b <= 19 && a > 19 || a < 13)) {
        return true;
    } else return false;

    *2-solution
    return ((a >= 13 && a <= 19 && b > 19 || b < 13) ||
          (b >= 13 && b <= 19 && a > 19 || a < 13));
}
*/
// =============================================================================
/*
Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples
delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel


Solution
function delDel(str){
    *1-solution
    if(str.substr(1,3) === 'del') {
    return str.replace('del', '');
    } else return str;

    *2-solution
    return str.substr(1,3) === 'del' ? str.replace('del', '') : str;
}
*/
// =============================================================================
/*
Warmup-1 -- mixStart
Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

Examples
mixStart('mix snacks') → true
mixStart('pix snacks') → true
mixStart('piz snacks') → false


Solution
function mixStart(str){
    *1-solution
    if(str.substr(1,2) === 'ix') return true;
    else return false;

    *2-solution
    return str.substr(1,2) === 'ix';
}
*/
// =============================================================================
/*
Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

Examples
startOz('ozymandias') → oz
startOz('bzoo') → z
startOz('oxx') → o


Solution
function startOz(str){
    if(str.startsWith('oz')) {
    return str.slice(0,2);
    }
    else if (str[0] === 'o') return str[0];
    else if (str[1] === 'z') return str[1];
    else return '';
}
*/
// =============================================================================
/*
Warmup-1 -- intMax
Given three int values, a b c, return the largest.

Examples
intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3


Solution
function intMax(a, b, c){
    *1-solution
    return Math.max(a,b,c);

    *2-solution
    return [a,b,c].sort((a,b) => a - b).at(-1);
}
*/
// =============================================================================
/*
Warmup-1 -- close10
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

Examples
close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0

Solution
function close10(a, b){
    if(Math.abs(10 - a) === Math.abs(10 - b)) return 0;
    else if(Math.abs(10 - a) < Math.abs(10 - b)) return a;
    else return b;
}
*/
// =============================================================================
/*
Warmup-1 -- in3050
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

Examples
in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true

Solution
function in3050(a, b){
    if((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
    return true;
    } else if((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
    return true;
    }
    else return false;
}
*/
// =============================================================================
/*
Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

Examples
max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11

Solution
function max1020(a, b){
    if((a >= 10 && a <= 20) && (b >= 10 && b <= 20)) {
    return Math.max(a,b);
    } else if (a >= 10 && a <= 20 && (b < 10 || b > 20)) {
    return a;
    } else if (b >= 10 && b <= 20 && (a < 10 || a > 20)) {
    return b;
    } else return 0;
}
*/
// =============================================================================
/*
Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.

Examples
stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false

Solution
function stringE(str){
    return str.split('').slice(0,3).includes('e');
}
*/
// =============================================================================
/*
Warmup-1 -- lastDigit
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
Warmup-1 -- endUp
Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

Examples

endUp('Hello') → HeLLO
endUp('hi there') → hi thERE
endUp('hi') → HI

Solution
function endUp(str){
    *1-solution
    if(str.length < 3) return str.toUpperCase();
    else return str.slice(0.str.length-3) + str.slice(str.length-3).toUpperCase();

    *2-solution
    return str.length < 3 ? str.toUpperCase() : str.slice(0, str.length-3) +
    str.slice(str.length-3).toUpperCase();
}
*/
// =============================================================================
/*
Warmup-1 -- everyNth
Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

Examples
everyNth('Miracle', 2) → Mrce
everyNth('abcdefg', 2) → aceg
everyNth('abcdefg', 3) → adg

Solution
function everyNth(str, n){
  let newStr = '';
  for(let i = 0; i < str.length; i += n) {
    newStr += str[i];
  }
  return newStr;
}
*/
// =============================================================================