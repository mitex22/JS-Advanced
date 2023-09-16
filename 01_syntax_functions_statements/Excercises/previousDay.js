function previousDay(...params) {
    
    let [year, month, day] = [...params];

    let outputDate = new Date(year, month - 1, day - 1);

    console.log(`${outputDate.getFullYear()}-${outputDate.getMonth() + 1}-${outputDate.getDate()}`);

}

previousDay(2016, 9, 1);
previousDay(2015, 5, 10);