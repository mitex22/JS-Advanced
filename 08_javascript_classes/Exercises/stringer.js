class Stringer {
    innerString;
    innerLength;
    initialString;

    constructor(inStr, inLen) {
        this.innerString = inStr;
        this.initialString = inStr;
        this.innerLength = inLen;
    }

    increase(len) {
        this.innerLength += len;
    }

    decrease(len) {
        if (this.innerLength - len < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= len;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.initialString.substring(this.innerLength, 0) + '...';
        } else if (this.innerString.length <= this.innerLength) {
            return this.initialString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); 

