function mathOperations(...params) {

    let [num1, num2, operator] = [...params]

    let operationsMap = {
        "+": (a, b) => (a + b),
        "-": (a, b) => (a - b),
        "*": (a, b) => (a * b),
        "/": (a, b) => (a / b),
        "%": (a, b) => (a % b),
        "**": (a, b) => (a ** b)
    }

    console.log(operationsMap[operator](num1, num2))

}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');