function lockedProfile() {

    // targets

    // 3
    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
        button.addEventListener('click', showInfo);

        function showInfo(e) {
            let person = e.target.parentNode;

            let lockState = '';
            if (person.querySelector('input[value="lock"]').checked) {
                lockState = 'locked'
            } else {
                lockState = 'unlocked';
            }

            if (lockState === 'unlocked' && e.target.textContent === 'Show more') {
                person.querySelector('[id*="HiddenFields"]').style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if (lockState === 'unlocked' && e.target.textContent === 'Hide it') {
                person.querySelector('[id*="HiddenFields"]').style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}