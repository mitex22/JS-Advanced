function extractText() {

    // targerts
    const listItems = document.querySelectorAll('#items li');
    const textArea = document.querySelector('#result');

    let listItemsText = [];

    for (const li of listItems) {
        let currentText = li.textContent;
        listItemsText.push(currentText);
    }

    textArea.value = listItemsText.join('\n');
}