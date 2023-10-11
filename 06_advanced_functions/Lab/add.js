// function add(num) {

//     function inner(adder) {
//         let saver = num;
//         return saver += adder;
//     }

//     return inner
// }

function solution(partiallyAppliedNum) {
    return function (num) {
        return partiallyAppliedNum + num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
