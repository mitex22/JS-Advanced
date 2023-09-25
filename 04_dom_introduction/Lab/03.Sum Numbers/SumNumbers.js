function calc() {

    // targets

    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let resultBox = document.querySelector('#sum');

    resultBox.value = Number(num1) + Number(num2);

}
