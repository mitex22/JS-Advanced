function addItem() {

    // targets
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');
    const dropDown = document.querySelector('#menu');

    let newOption = document.createElement('option');
    let newOptionContent = document.createTextNode(textInput.value);
    newOption.appendChild(newOptionContent);
    newOption.setAttribute('value', valueInput.value);

    if (textInput.value != '' && valueInput.value != '') {
        dropDown.appendChild(newOption);
    }

    textInput.value = '';
    valueInput.value = '';
}