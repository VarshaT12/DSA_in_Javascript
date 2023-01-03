// how to reverse string

//  one way
var str = 'varsha';
var splt = str.split("");
var rev = splt.reverse();
var join = rev.join("");

// second way
var res = str.split("").reverse().join("");

// third way
const reverseString = function (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

console.log(reverseString('hello'));