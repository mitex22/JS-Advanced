function subtract() {

    // targets
    const result = document.querySelector('#result');
    const num1 = document.querySelector('#firstNumber').value;
    const num2 = document.querySelector('#secondNumber').value;

    let resultsNumber = Number(num1) - Number(num2);

    result.textContent = resultsNumber;

}