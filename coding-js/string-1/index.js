// =============================================================================
/*
String-1 -- helloName
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

Examples
helloName('Bob') → Hello Bob!
helloName('Alice') → Hello Alice!
helloName('X') → Hello X!

Solution
function helloName(name){
    return `Hello ${name}!`;
}
*/
// =============================================================================
/*
String-1 -- makeAbba
Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

Examples
makeAbba('Hi', 'Bye') → HiByeByeHi
makeAbba('Yo', 'Alice') → YoAliceAliceYo
makeAbba('What', 'Up') → WhatUpUpWhat

Solution
function makeAbba(a, b){
    return `${a}${b}${b}${a}`;
}
*/
// =============================================================================
/*
String-1 -- makeTags
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

Examples
makeTags('i', 'Yay') → Yay
makeTags('i', 'Hello') → Hello
makeTags('cite', 'Yay') → Yay

Solution
function makeTags(tag, word){
    return `<${tag}>${word}</${tag}>`;
}
*/
// =============================================================================
/*
String-1 -- makeOutWord
Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

Examples
makeOutWord('<<>>', 'Yay') → <>
makeOutWord('<<>>', 'WooHoo') → <>
makeOutWord('[[]]', 'word') → [[word]]

Solution
function makeOutWord(out, word){
    return out.slice(0,2) + word + out.slice(2);
}
*/
// =============================================================================
/*
String-1 -- extraEnd
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

Examples
extraEnd('Hello') → lololo
extraEnd('ab') → ababab
extraEnd('Hi') → HiHiHi

Solution
function extraEnd(str){
    return str.slice(str.length-2).repeat(3);
}
*/
// =============================================================================
/*
String-1 -- firstTwo
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

Examples
firstTwo('Hello') → He
firstTwo('abcdefg') → ab
firstTwo('ab') → ab

Solution
function firstTwo(str){
    *1-solution
    return str.slice(0,2);
    *2-solution
    return str.substr(0,2);
    *3-solution
    return str.substring(0,2);
}
*/
// =============================================================================
/*
String-1 -- firstHalf
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

Examples
firstHalf('WooHoo') → Woo
firstHalf('HelloThere') → Hello

Solution
function firstHalf(str){
    return str.slice(0, str.length/2);
}
*/
// =============================================================================
/*
String-1 -- withoutEnd
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

Examples
withoutEnd('Hello') → ell
withoutEnd('java') → av
withoutEnd('coding') → odin

Solution
function withoutEnd(str){
    return str.slice(1,str.length-1);
}
*/
// =============================================================================
/*
String-1 -- comboString
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

Examples
comboString('Hello', 'hi') → hiHellohi
comboString('Hi', 'Hello') → HiHelloHi
comboString('aaa', 'b') → baaab

Solution
function comboString(a, b){
    *1-solution
    if(a.length > b.length) {
        return b + a + b
    }
    else {
        return a + b + a
    };

    *2-solution
    return a.length > b.length ? b + a + b : a + b + a;
}
*/
// =============================================================================
/*
String-1 -- nonStart
Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

Examples
nonStart('Hello', 'There') → ellohere
nonStart('java', 'code') → avaode
nonStart('shotl', 'java') → hotlava

Solution
function nonStart(a, b){
    return a.slice(1) + b.slice(1);
}
*/
// =============================================================================
/*
String-1 -- left2
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

Examples
left2('Hello') → lloHe
left2('java') → vaja
left2('Hi') → Hi

Solution
function left2(str){
    return str.slice(2) + str.slice(0,2);
}
*/
// =============================================================================
/*
String-1 -- right2
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

Examples
right2('Hello') → loHel
right2('java') → vaja
right2('Hi') → Hi

Solution
function right2(str){
    return str.slice(str.length-2) + str.slice(0, str.length-2);
}
*/
// =============================================================================
/*
String-1 -- theEnd
Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

Examples
theEnd('Hello', true) → H
theEnd('Hello', false) → o
theEnd('oh', true) → o

Solution
function theEnd(str, front){
    *1-solution
    if(front) {
        return str[0];
    } else {
        return str[str.length-1];
    }
    *2-solution
        return front ? str[0] : str[str.length-1];
}
*/
// =============================================================================
/*
String-1 -- withoutEnd2
Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

Examples
withoutEnd2('Hello') → ell
withoutEnd2('abc') → b
withoutEnd2('ab') →

Solution
function withoutEnd2(str){
    return str.slice(1,str.length-1);
}
*/
// =============================================================================
/*
String-1 -- middleTwo
Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

Examples
middleTwo('string') → ri
middleTwo('code') → od
middleTwo('Practice') → cti

Solution
function middleTwo(str){
    return str.substr(str.length/2-1, 2);
}
*/
// =============================================================================
/*
String-1 -- endsLy
Given a string, return true if it ends in "ly".

Examples
endsLy('oddly') → true
endsLy('y') → false
endsLy('oddl') → false

Solution
function endsLy(str){
    *1-solution
    return str.endsWith('ly');
    *2-solution
    return str.slice(str.length-2) === 'ly';
}
*/
// =============================================================================
/*
String-1 -- nTwice
Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

Examples
nTwice('hello', 2) → helo
nTwice('Chocolate', 3) → Choate
nTwice('Chocolate', 1) → Ce

Solution
function nTwice(str, n){
    return str.substr(0,n) + str.substr(str.length - n, n);
}
*/
// =============================================================================
/*
String-1 -- twoChar
Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

Examples
twoChar('java', 0) → ja
twoChar('java', 2) → va
twoChar('java', 3) → ja

Solution
function twoChar(str, index){
    if(str.slice(index).length < index-1 || index < 0) {
    return str.substr(0,2);
    } else {
    return str.substr(index,2);
    }
}
*/
// =============================================================================
/*
String-1 -- middleThree
Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

Examples
middleThree('Candy') → and
middleThree('and') → and
middleThree('solving') → lvi

Solution
function middleThree(str){
    return str.substr(str.length/2-1,3);
}
*/
// =============================================================================
/*
String-1 -- hasBad
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

Examples
hasBad('badxx') → true
hasBad('xbadxx') → true
hasBad('xxbadxx') → false

Solution
function hasBad(str){
    return str.indexOf('bad') >= 0 && str.indexOf('bad') <= 1;
}
*/
// =============================================================================
/*
String-1 -- lastChars
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

Examples
lastChars('last', 'chars') → ls
lastChars('yo', 'java') → ya
lastChars('hi', '') → h@

Solution
function lastChars(a, b){
    if(!a && b) {
    return '@' + b[b.length-1];
    } else if(a && !b) {
    return a[0] + '@';
    } else if (!a && !b) {
    return '@@';
    } else {
    return a[0] + b[b.length-1];
    }
}
*/
// =============================================================================
/*
String-1 -- conCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

Examples
conCat('abc', 'cat') → abcat
conCat('dog', 'cat') → dogcat
conCat('abc', '') → abc

Solution
function conCat(a, b){
    return (a.endsWith(b[0])) ? a + b.slice(1) : a + b;
}
*/
// =============================================================================
/*
String-1 -- lastTwo
Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

Examples
lastTwo('coding') → codign
lastTwo('cat') → cta
lastTwo('ab') → ba

Solution
function lastTwo(str){
    const newStr = str.slice(0, str.length-2) + str[str.length-1] + str[str.length-2];
    return newStr.replaceAll('undefined', '');
}
*/
// =============================================================================
/*
String-1 -- seeColor
Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

Examples
seeColor('redxx') → red
seeColor('xxred') →
seeColor('blueTimes') → blue

Solution
function seeColor(str){
    if(str.startsWith('red')) {
    return 'red'
    } else if (str.startsWith('blue')) {
    return 'blue';
    } else return '';
}
*/
// =============================================================================
/*
String-1 -- frontAgain
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

Examples
frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true

Solution
function frontAgain(str){
    return str.length < 2 ? false : str.substr(0,2) === str.substr(str.length-2, 2);
}
*/
// =============================================================================
/*
String-1 -- minCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

Examples
minCat('Hello', 'Hi') → loHi
minCat('Hello', 'java') → ellojava
minCat('java', 'Hello') → javaello

Solution
function minCat(a, b){
    if(a.length > b.length) {
    return a.slice(a.length - b.length) + b;
    } else if (b.length > a.length) {
    return a + b.slice(b.length-a.length);
    }
}
*/
// =============================================================================
/*
String-1 -- extraFront
Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

Examples
extraFront('Hello') → HeHeHe
extraFront('ab') → ababab
extraFront('H') → HHH

Solution
function extraFront(str){
  return str.slice(0,2).repeat(3);
}
*/
// =============================================================================
/*
String-1 -- without2
Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

Examples
without2('HelloHe') → lloHe
without2('HelloHi') → HelloHi
without2('Hi') →

Solution
function without2(str){
    if(str.length < 2) {
    return str;
    } else {
        return str.slice(0,2) === str.slice(str.length-2) ? str.slice(2) : str;
    }
}
*/
// =============================================================================
/*
String-1 -- deFront
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

Examples
deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay

Solution
function deFront(str){
    if(str[0] !== 'a' && str[1] !== 'b') {
    return str.slice(2);
    } else if(str[0] === 'a' && str[1] !== 'b') {
    return str[0] + str.slice(2);
    } else if (str[0] !== 'a' && str[1] === 'b') {
    return str.slice(1);
    } else {
    return str;
    }
}
*/
// =============================================================================
/*
String-1 -- startWord
Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

Examples
startWord('hippo', 'hi') → hi
startWord('hippo', 'xip') → hip
startWord('hippo', 'i') → h

Solution
function startWord(str, word){
    return str.slice(1).startsWith(word.slice(1)) ? str.substr(0,word.length) : '';
}
*/
// =============================================================================
/*
String-1 -- withoutX
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

Examples
withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi

Solution
function withoutX(str){
    if(str.startsWith('x') && str.endsWith('x')) {
    return str.slice(1,str.length-1);
    } else if (str.startsWith('x')) {
    return str.slice(1);
    } else if (str.endsWith('x')) {
    return str.slice(0, str.length-1);
    } else return str;
}
*/
// =============================================================================
/*
String-1 -- withoutX2
Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

Examples
withoutX2('xHi') → Hi
withoutX2('Hxi') → Hi
withoutX2('Hi') → Hi

Solution
function withoutX2(str){
    if(str[0] === 'x' && str[1] === 'x') {
    return str.slice(2);
    } else if (str[1] === 'x') {
    return str[0] + str.slice(2);
    } else if (str[0] === 'x') {
    return str.slice(1);
    } else {
    return str;
    }
}
*/
// =============================================================================
/*
String-2 -- doubleChar
Given a string, return a string where for every char in the original, there are two chars.

Examples
doubleChar('The') → TThhee
doubleChar('AAbb') → AAAAbbbb
doubleChar('Hi-There') → HHii--TThheerree

Solution
function doubleChar(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
    newStr += str[i].repeat(2);
    }
    return newStr;
}
*/
// =============================================================================
/*
String-2 -- countHi
Return the number of times that the string "hi" appears anywhere in the given string.

Examples
countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2

Solution
function countHi(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
    if(str[i] === 'h' && str[i+1] === 'i') {
        counter++;
    }
    }
    return counter;
}
*/
// =============================================================================
/*
String-2 -- catDog
Return true if the string "cat" and "dog" appear the same number of times in the given string.

Examples
catDog('catdog') → true
catDog('catcat') → false
catDog('1cat1cadodog') → true

Solution
function catDog(str){
    *1-solution
    let counterCat = 0;
    let counterDog = 0;

    for(let i = 0; i < str.length; i++) {
        if(str.substr(i,3) === 'cat') {
            counterCat++;
        } else if(str.substr(i,3) === 'dog') {
            counterDog++;
        }
    }
    return counterDog === counterCat;

    *2-solution
    str = str.replaceAll('cat', '+');
    str = str.replaceAll('dog', '-');
    return str.split('').filter(elem => elem === '+').length ===
    str.split('').filter(elem => elem === '-').length;
}
*/
// =============================================================================
/*
String-2 -- countCode
Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

Examples
countCode('aaacodebbb') → 1
countCode('codexxcode') → 2
countCode('cozexxcope') → 2

Solution
function countCode(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
    if(str.substr(i,2) + str[i+3] === 'coe') counter++;
    }

    return counter;
}
*/
// =============================================================================
/*
String-2 -- endOther
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

Examples
endOther('Hiabc', 'abc') → true
endOther('AbC', 'HiaBc') → true
endOther('abc', 'abXabc') → true

Solution
function endOther(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a.endsWith(b) || b.endsWith(a);
}
*/
// =============================================================================
/*
String-2 -- xyzThere
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

Examples
xyzThere('abcxyz') → true
xyzThere('abc.xyz') → false
xyzThere('xyz.abc') → true

Solution
function xyzThere(str){
    if(str.includes('xyz') && !str.includes('.xyz')) {
        return true;
    } else if(str.includes('xyz') && !str.endsWith('.xyz')) {
    return true
    } else return false;
}
*/
// =============================================================================
/*
String-2 -- bobThere
Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

Examples
bobThere('abcbob') → true
bobThere('b9b') → true
bobThere('bac') → false

Solution
function bobThere(str){
    let state = false;
    for(let i = 0; i < str.length; i++) {
    if(str[i] === 'b' && str[i+2] === 'b') state = true;
    }
    return state;
}
*/
// =============================================================================
/*
String-2 -- xyBalance
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

Examples
xyBalance('aaxbby') → true
xyBalance('aaxbb') → false
xyBalance('yaaxbb') → false

Solution
function xyBalance(str){
    let state = false;
    for(let i = 0; i < str.length; i++) {
    if(str[i] === 'x') state = true;
    if(str[i] === 'y') state = false;
    }
    return !state;
}
*/
// =============================================================================
/*
String-2 -- mixString
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

Examples
mixString('abc', 'xyz') → axbycz
mixString('Hi', 'There') → HTihere
mixString('xxxx', 'There') → xTxhxexre

Solution
function mixString(a, b){
    let mixStr = '';
    for(let i = 0; i < a.length + b.length; i++) {
    mixStr += a[i] + b[i];
    }
    return mixStr.replaceAll('NaN', '').replaceAll('undefined', '');
}
*/
// =============================================================================
/*
String-2 -- repeatEnd
Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

Examples
repeatEnd('Hello', 3) → llollollo
repeatEnd('Hello', 2) → lolo
repeatEnd('Hello', 1) → o

Solution
function repeatEnd(str, n){
    return str.slice(str.length-n).repeat(n);
}
*/
// =============================================================================
/*
String-2 -- repeatFront
Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

Examples
repeatFront('Chocolate', 4) → ChocChoChC
repeatFront('Chocolate', 3) → ChoChC
repeatFront('Ice Cream', 2) → IcI

Solution
function repeatFront(str, n){
    const slicedStr = str.slice(0,n);
    let newStr = '';

    for(let i = slicedStr.length; i > 0; i--) {
    newStr += slicedStr.slice(0,i);
    }

    return newStr;
}
*/
// =============================================================================
/*
String-2 -- repeatSeparator
Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

Examples
repeatSeparator('Word', 'X', 3) → WordXWordXWord
repeatSeparator('This', 'And', 2) → ThisAndThis
repeatSeparator('This', 'And', 1) → This

Solution
function repeatSeparator(word, sep, count){
    let newStr = `${word}${sep}`.repeat(count);
    return newStr.slice(0,newStr.length - sep.length);
}
*/
// =============================================================================
/*
String-2 -- prefixAgain
Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

Examples
prefixAgain('abXYabc', 1) → true
prefixAgain('abXYabc', 2) → true
prefixAgain('abXYabc', 3) → false

Solution
function prefixAgain(str, n){
    const prefix = str.slice(0,n);
    return str.slice(n).includes(prefix);
}
*/
// =============================================================================
/*
String-2 -- getSandwich
A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

Examples
getSandwich('breadjambread') → jam
getSandwich('xxbreadjambreadyy') → jam
getSandwich('xxbreadyy') →


Solution
function getSandwich(str){
    if(!str.includes('bread')) {
        return '';
    }

    const indexesOfBread = [];
    let between = '';

    for(let i = 0; i < str.length; i++) {
    if(str.substr(i, 'bread'.length) === 'bread') {
        indexesOfBread.push(i);
    }
    }
    between += str.slice(indexesOfBread[0] + 'bread'.length, indexesOfBread.at(-1));
    return between;
}
*/
// =============================================================================
/*
String-2 -- sameStarChar
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

Examples
sameStarChar('xy*yzz') → true
sameStarChar('xy*zzz') → false
sameStarChar('*xa*az') → true

Solution
function sameStarChar(str){
    if(!str.includes('*') || str.length <= 2) {
    return true;
    }

    let state = false;

    for(let i = 0; i < str.length-1; i++) {
    if(str[i] === '*' && str[i-1] === str[i+1]) {
        state = true;
    } else if (str[i] === '*' && str[i-1] !== str[i+1]) {
        state = false;
    }
    }
    return state;
}
*/
// =============================================================================
/*
String-2 -- oneTwo
Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

Examples
oneTwo('abc') → bca
oneTwo('tca') → cat
oneTwo('tcagdo') → catd

Solution
function oneTwo(str){
    if(str.length < 3) {
        return '';
    }
    let newStr = '';

    for(let i = 1; i < str.length - 1; i += 3) {
        newStr += str.substr(i,2);
        newStr += str[i-1];
    }

    return newStr;
}
*/
// =============================================================================
/*
String-2 -- zipZap
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

Examples
zipZap('zipXzap') → zpXzp
zipZap('zopzop') → zpzp
zipZap('zzzopzop') → zzzpzp

Solution
function zipZap(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
    if(str[i] === 'z' && str[i+2] === 'p') {
        newStr += str[i] + str[i+2];
        i+=2;
    } else newStr += str[i];
    }
    return newStr;
}
*/
// =============================================================================
/*
String-2 -- starOut
Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples
starOut('ab*cd') → ad
starOut('ab**cd') → ad
starOut('sm*eilly') → sill

Solution
function starOut(str){

    const removeStars = () => {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '*' && str[i+1] === '*' && i !== 0) {
        str = str.replace(str.substr(i-1,2);
        } else if (str[i] === '*' && str[i+1] !== '*' && i !== 0) {
        str = str.replace(str.substr(i-1,3), '');
        } else if (str[i] === '*' && i === 0) {
        str = str.replace(str.substr(i,2), '');
        }
    }
    }

    removeStars(str);
    str.includes('*') && removeStars(str);
    return str.replaceAll('undefine', '');
}
*/
// =============================================================================
/*
String-2 -- plusOut
Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

Examples
plusOut('12xy34', 'xy') → ++xy++
plusOut('12xy34', '1') → 1+++++
plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy

Solution
function plusOut(str, word){
    str = str.replaceAll(word, '?');

    let newStr = '';

    for(let i = 0; i < str.length; i++) {
    if(str[i] !== '?') {
        newStr += '+';
    } else {
        newStr += str[i]
    }
    }

    return newStr.replaceAll('?', word);
}
*/
// =============================================================================
/*
String-2 -- wordEnds
Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

Examples
wordEnds('abcXY123XYijk', 'XY') → c13i
wordEnds('XY123XY', 'XY') → 13
wordEnds('XY1XY', 'XY') → 1

Solution
function wordEnds(str, word){
  str = str.replaceAll(word, '?');

  let newStr = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '?') {
        if(i !== 0 && i !== str.length-1) {
        newStr += str[i-1] + str[i+1];
        } else if(i === 0) {
        newStr += str[i + 1];
        } else {
        newStr += str[i -1];
        }
    }
    }
    newStr = newStr.replaceAll('undefined', '');
    newStr = word.length > 1 ? newStr.replace('?', '') : newStr;
    return newStr.replaceAll('?', word);
}
*/
// =============================================================================