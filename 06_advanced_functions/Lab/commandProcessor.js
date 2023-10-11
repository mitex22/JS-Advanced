function solution() {
    let innerString = '';
    return {
        append(str) {
            innerString += str;
        }, 
        removeStart(start) {
            innerString = innerString.substring(start);
        }, 
        removeEnd(end) {
            innerString = innerString.substring(0, innerString.length - end);
        }, 
        print() {
            console.log(innerString);
        }
    }
}

// test 1
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// test 2
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
