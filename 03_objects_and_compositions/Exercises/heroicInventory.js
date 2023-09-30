function heroicInventory(array) {

    let resultArray = [];

    for (const token of array) {
        const regex = /^(.*?) \/ (.*?) \/ (.*)$/;
        const match = token.match(regex);

        const name = match[1]; // Everything before the first /
        const level = Number(match[2]); // Everything between the first and second /
        const items = match[3].split(', '); // Everything after the second /

        let resultObj = {
            name,
            level,
            items
        }

        resultArray.push(resultObj);
    }

    console.log(JSON.stringify(resultArray));
}

heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);