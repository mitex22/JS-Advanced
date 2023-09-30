function deleteByEmail() {

    // targets
    const emailToSearch = document.querySelector('label input[type=text]').value;
    const trs = Array.from(document.querySelectorAll('table tbody tr'));
    const result = document.querySelector('#result');

    for (const tr of trs) {
        let trEmail = tr.querySelectorAll('td')[1].textContent;
        if (trEmail === emailToSearch) {
            tr.remove();
            result.textContent = 'Deleted.';
            return
        } else {
            result.textContent = 'Not found.';
        }
    }
}