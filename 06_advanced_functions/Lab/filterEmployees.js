function filterEmployees(data, criteria) {

    let arrayOfObjects = JSON.parse(data);
    
    if (criteria !== 'all') {
        let [criteriaKey, criteriaVal] = criteria.split('-');
        
        let resultArray = [];
    
        for (const obj of arrayOfObjects) {
            for (const key in obj) {
                if (key === criteriaKey && obj[key] === criteriaVal) {
                    resultArray.push(obj);
                }
            }
        }

        resultArray.forEach((obj, i) => {
            console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        });
    } else {
        arrayOfObjects.forEach((obj, i) => {
            console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        });
    }
}

filterEmployees(`
    [
        {
            "id": "1",
            "first_name": "Ardine",
            "last_name": "Bassam",
            "email": "abassam0@cnn.com",
            "gender": "Female"
        }, 
        {
            "id": "2",
            "first_name": "Kizzee",
            "last_name": "Jost",
            "email": "kjost1@forbes.com",
            "gender": "Female"
        },  
        {
            "id": "3",
            "first_name": "Evanne",
            "last_name": "Maldin",
            "email": "emaldin2@hostgator.com",
            "gender": "Male"
        }
    ]`,
    'all'
);

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
);