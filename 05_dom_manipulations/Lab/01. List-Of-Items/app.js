function addItem() {

    // targets
    const ulList = document.querySelector('#items');
    const inputFiled = document.querySelector('#newItemText');

    let inputText = inputFiled.value;

    // create new LI
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(inputText);
    newLi.appendChild(newLiText);

    // append to UL
    if (inputText !== '') {
        ulList.appendChild(newLi);
    }

    // clear input field
    inputFiled.value = '';
}