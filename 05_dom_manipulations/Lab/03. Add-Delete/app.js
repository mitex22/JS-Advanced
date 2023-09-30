function addItem() {

    // targets
    const ulList = document.querySelector('#items');
    const inputFiled = document.querySelector('#newItemText');

    let inputText = inputFiled.value;

    // create new LI
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(inputText);
    newLi.appendChild(newLiText);
    
    // add link to LI
    let liLink = document.createElement('a');
    let liLinkText = document.createTextNode('[Delete]');
    liLink.appendChild(liLinkText);
    liLink.setAttribute('href', '#');

    newLi.appendChild(liLink);

    // attach event
    liLink.addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();
    });
    

    // append to UL
    if (inputText !== '') {
        ulList.appendChild(newLi);
        inputFiled.value = '';
    }
}