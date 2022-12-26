// var isValid = function (s) {
//     let count = 0, n1 = 0, n2 = 0;
//     let arr1 = ['(', '[', '{'];
//     let arr2 = [')', ']', '}'];
//     let s1 = s.split('');

//     for (let j = 0; j < s1.length; j++) {
//         if (s1[j] == arr2[0] || s1[j] == arr2[1] || s1[j] == arr2[02]) {
//             n1++;
//         } else {
//             n2++;
//         };
//     };

//     for (let i = 0; i < s1.length - 1; i++) {

//         if (n1 == n2) {

//             if ((s1[i] == arr1[0] && s1[i + 1] == arr2[0]) || (s1[i] == arr1[1] && s1[i + 1] == arr2[1]) || (s1[i] == arr1[2] && s1[i + 1] == arr2[2])) {
//                 count++;
//             } else if ((s1[i] == arr1[0] && s1[s1.length - i - 1] == arr2[0]) || (s1[i] == arr1[1] && s1[s1.length - i - 1] == arr2[1]) || (s1[i] == arr1[2] && s1[s1.length - i - 1] == arr2[2]) && i < s1.length - i - 1) {
//                 count++;
//             } else {
//                 count;
//             };
//         } else {
//             break;
//         }
//     }
//     if (count == s1.length / 2) {
//         return true
//     } else {
//         return false
//     }

// };

var isValid = function (s) {
    let count = 0, n1 = 0, n2 = 0;
    let arr1 = ['(', '[', '{'];
    let arr2 = [')', ']', '}'];
    let s1 = s.split('');

    for (let j = 0; j < s1.length; j++) {
        if (s1[j] == arr2[0] || s1[j] == arr2[1] || s1[j] == arr2[02]) {
            n1++;
        } else {
            n2++;
        };
    };

    for (let i = 0; i < s1.length - 1; i++) {


        // if (count == s1.length / 2) {
        //     return true
        // } else {
        //     return false
        // }

    }
};

let s = "][";
console.log(isValid(s));