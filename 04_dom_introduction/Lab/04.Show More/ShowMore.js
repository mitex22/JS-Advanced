function showText() {

    // targets

    const linkButton = document.querySelector('#more');
    const spanText = document.querySelector('#text');

    console.log(spanText.getAttribute('style'));

    spanText.style.display = 'inline';
    linkButton.style.display = 'none';

}