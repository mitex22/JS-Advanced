'use strict';

function tests(params) {

    const obj1 = { a: 1, b: 2, c: 3 }

    console.log('obj1: ', obj1);

    const { a, ...props } = obj1;
    console.log(a);
    console.log(props);


    const newObj = { ...props };

    console.log(newObj);

    const maxSpeed = {
        car: 300,
        bike: 60,
        motorbike: 200,
        airplane: 1000,
        helicopter: 400,
        rocket: 8 * 60 * 60
    };

    const sortable = Object.entries(maxSpeed)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    console.log(sortable);

    const person = {
        firstName: "Dimitar",
        lastName: "Pavlov",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    const person1 = {
        firstName: "John",
        lastName: "Doe"
    }

    const person2 = {
        firstName: "Mary",
        lastName: "Doe"
    }

    const person3 = {
        firstName: "Stani",
        lastName: "Doe"
    }

    console.log(person.fullName());
    console.log(person.fullName.call(person1))
    console.log(person.fullName.apply(person2))
    console.log(person.fullName.bind(person3)())
    console.log(person.fullName());

    function outer() {
        let a = 10;
        function inner() {
            let a = 15;
            console.log(a);
            function extraInner() {
                let a = 20;
                console.log(a);
            }
            extraInner()
        }
        inner()
        console.log(a);
    }

    outer();
}

tests();