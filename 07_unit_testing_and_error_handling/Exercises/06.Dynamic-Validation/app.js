function validate() {

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gim;

    const emailInputField = document.querySelector('input#email');

    emailInputField.addEventListener('change', function (e) {
        let currEmail = e.target.value;

        if (!emailPattern.test(currEmail)) {
            emailInputField.classList.add('error');
        } else {
            emailInputField.classList.remove('error');
        }
    });
}