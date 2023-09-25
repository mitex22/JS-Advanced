function editElement(el, match, text) {

    let elText = el.textContent;

    let mather = new RegExp(match, 'g');

    let elNewText = elText.replace(mather, text)

    el.textContent = elNewText;
}