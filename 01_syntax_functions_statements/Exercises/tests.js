'use strict';

function calculator(a, b, operator) {
    console.log(eval(`${a}${operator}${b}`))
}

calculator(5, 4, '%');