function validate() {

    // targets

    const emailField = document.querySelector('#email');

    emailField.addEventListener('change', validateEmail);

    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gim;

    function validateEmail() {
        if (!regex.test(emailField.value)) {
            emailField.classList.add('error');
        } else {
            emailField.classList.remove('error');
        }
    }
}