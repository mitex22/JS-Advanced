function colorize() {

    // targets 

    const trList = Array.from(document.querySelectorAll('tr')).slice(1);

    for (let i = 0; i < trList.length; i++) {
        if (i % 2 === 0) {
            trList[i].style.backgroundColor = 'Teal';
        }
    }
}