function toggle() {

    // targets
    const extraContent = document.querySelector('#extra');
    const button = document.querySelector('.button');

    let displayProp = window.getComputedStyle(extraContent).display;

    if (displayProp === 'none') {
        extraContent.style.display = 'block';
        button.textContent = 'Less'
    } else {
        extraContent.style.display = 'none';
        button.textContent = 'More'
    }
}