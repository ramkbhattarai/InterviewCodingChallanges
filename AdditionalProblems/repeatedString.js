/**
 * Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, .
The second line contains an integer, .

Constraints

For  of the test cases, .
Output Format

Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1
Because all of the first n=1000000000000 letters of the infinite string are a, we print 1000000000000   on a new line.
 */

function counter(s,n){
     let count = 0;
     for (let index = 0; index < n; index++) {
         let char = s.charAt(index);
         if (char === 'a') {
             count++;
         }

     }
     return count;
 }
function repeatedString(s, n) {
    if (!s.includes('a')) return 0;
    if (s.length === 1) return n;
   
    let timesOfS = Math.floor(n/s.length);
    let remainder = n % s.length;
    return s.length > n ? counter(s, remainder)
        : timesOfS * counter(s, s.length) + counter(s, remainder);
    

}
console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400));
