function sumTable() {

    // targets

    const result = document.querySelector('#sum');

    const firstTable = document.querySelector('table');

    const trs = Array.from(firstTable.querySelectorAll('tr')).slice(1);
    trs.pop();

    let sum = 0;

    for (const tr of trs) {
        sum += Number([... tr.querySelectorAll('td')].pop().textContent);
    }

    result.textContent = sum;
}