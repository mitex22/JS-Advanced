function extract(elementID) {

    // targets

    const elementContent = document.querySelector(`#${elementID}`).innerText;

    return elementContent.match(/\((.*?)\)/gim).map((str) => (str.replace('(', '').replace(')', ''))).join('; ');

}