// execution context test
function baseFunction(testFunc2) {
    let a = 20;
    {
        let b = 30;

        function testFunc1(c) {
            let d = 50;
            console.log(d);
            console.log(c);
            console.log(b);
            console.log(a);
        }

        console.log('before execution');
        testFunc1(40);
        testFunc2(40);
    }
}

baseFunction(testFunc2);

function testFunc2(c) {
    let d = 50;
    console.log(d);
    console.log(c);
    console.log(b);
    console.log(a);
}
