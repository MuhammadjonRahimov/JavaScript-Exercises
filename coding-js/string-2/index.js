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