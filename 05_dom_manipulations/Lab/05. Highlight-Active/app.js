// function focused() {

//     // targets
//     const inputFields = document.querySelectorAll('input');

//     for (const inputField of inputFields) {
//         inputField.addEventListener('focus', onFocus);
//         inputField.addEventListener('blur', onBlur);
//     }

//     function onFocus(e) {
//         e.target.parentNode.classList.add('focused')
//     }

//     function onBlur(e) {
//         e.target.parentNode.classList.remove('focused')
//     }
// }

function focused() {

    // targets
    const wrapper = document.querySelector('body div');
    
    wrapper.addEventListener('click', onFocus, true);
    // wrapper.addEventListener('click', onBlur, false);

    function onFocus(e) {
        e.stopPropagation();
        e.target.parentNode.classList.add('focused')
        console.log(e.target);
    }

    function onBlur(e) {
        e.stopPropagation();
        e.target.parentNode.classList.remove('focused')
        console.log(e.target);
    }
}