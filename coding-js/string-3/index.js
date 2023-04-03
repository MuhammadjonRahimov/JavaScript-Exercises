// ============================================================================
/*
String-3 -- withoutString
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

Examples
withoutString('Hello there', 'llo') → He there
withoutString('Hello there', 'e') → Hllo thr
withoutString('Hello there', 'x') → Hello there

Solution
function withoutString(base, remove) {
    const regex = new RegExp(remove, "i");
    return base.replaceAll(base.match(regex), '');
}
*/
// ============================================================================
/*
String-3 -- equalIsNot
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

Examples
equalIsNot('This is not') → false
equalIsNot('This is notnot') → true
equalIsNot('noisxxnotyynotxisi') → true

Solution
function equalIsNot(str){
    str = str.replaceAll('is', '+').replaceAll('not', '-');
    const is = str.split('').filter(elem => elem === '+');
    const not = str.split('').filter(elem => elem === '-');
    return is.length === not.length;
}
*/
// ============================================================================
/*
String-3 -- gHappy
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

Examples
gHappy('xxggxx') → true
gHappy('xxgxx') → false
gHappy('xxggyygxx') → false

Solution
function gHappy(str){
    if(str.length < 1) {
    return true;
    }
    const lastG = str.lastIndexOf('g');
    return str[lastG-1] === 'g' || str[lastG+1] === 'g';
}
*/
// ============================================================================
/*
String-3 -- countTriple
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

Examples
countTriple('abcXXXabc') → 1
countTriple('xxxabyyyycd') → 3
countTriple('a') → 0

Solution
function countTriple(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1] && str[i] === str[i+2]) {
        counter++;
    }
    }
    return counter;
}
*/
// ============================================================================
/*
String-3 -- sumDigits
Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

Examples
sumDigits('aa1bc2d3') → 6
sumDigits('aa11b33') → 8
sumDigits('Chocolate') → 0

Solution
function sumDigits(str){
    let sum = 0;
    for(char of str) {
    if(!isNaN(char)) {
        sum += +char
    }
    }
    return sum;
}
*/
// ============================================================================