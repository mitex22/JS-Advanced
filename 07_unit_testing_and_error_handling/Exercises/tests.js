'use strict';

function tests(params) {

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

    console.log('-----------------------------------------');

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

    console.log('-----------------------------------------');

    const obj1 = {
        name: "Peter",
        outer1() {
            console.log(this);

            function inner1() {
                console.log(this);
            }

            inner1();
        }
    }

    obj1.outer1()
 
    console.log('-----------------------------------------');
    
    const obj2 = {
        name: "Peter",
        
        outer2() {
            console.log(this);

            const inner2 = () => ( console.log(this) )

            inner2();
        }
    }

    obj2.outer2()

    console.log('-----------------------------------------');

    const f = (function() {
        let counter = 0;
        return function () {
            console.log(++counter);
        }
    })();

    f();
    f();
    f();
    f();

}

tests();