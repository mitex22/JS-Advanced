function generateReport() {

    // targets
    const table = document.querySelector('table');
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const output = document.querySelector('#output');

    // report objects
    let reportObjects = [];
    
    // headers
    const headers = Array.from(table.querySelectorAll('thead th input')).map((header) => (header.getAttribute('name')));
    
    // rows and cells
    const trs = Array.from(table.querySelectorAll('tbody tr'));

    for (const tr of trs) {
        let tmpObject = {};
        
        headers.forEach((header, i) => {
            let cellContent = tr.querySelectorAll('td')[i].textContent;

            tmpObject[header] = cellContent;
        });

        reportObjects.push( tmpObject );
    }

    let selectedHeaders = [];

    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) {
            selectedHeaders.push(checkbox.getAttribute('name'));
        }
    }

    let outputArray = [];

    for (const obj of reportObjects) {
        let tmpObj = {};

        for (const selectedHeader of selectedHeaders) {
            tmpObj[selectedHeader] = obj[selectedHeader]
        }

        outputArray.push(tmpObj);
    }

    output.textContent = JSON.stringify(outputArray)
}