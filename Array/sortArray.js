let numbers = [20, 5.2, -120, 100, 30, 0, 30];

/* Logic: 
   20 - (5.2) = +ve => 5.2 would be placed before 20,
   20 - (-120) = +ve => -120 would be placed before 20,
   20 - (100) = -ve => 100 would be placed after 20,
   20 - (30) = -ve => 30 would be placed after 20,
   20 - (0) = +ve => 0 would be placed before 20,
   Similarly for every element, we check and place them accordingly in iterations.
*/

function compare(a, b) {
    return b - a;
}
let res = numbers.sort(compare);
console.log(res);