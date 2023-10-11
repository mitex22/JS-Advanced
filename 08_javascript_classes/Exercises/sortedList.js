class List {
    constructor() {
        this.numberList = [];
        this.size = this.numberList.length;
    }

    add(el) {
        this.numberList.push(el);
        this.numberList.sort((a, b) => (a - b));
        this.size = this.numberList.length;
    }

    remove(index) {
        let currentLength = this.numberList.length;

        if (index > currentLength - 1 || index < 0) {
            throw new Error();
        } else {
            this.numberList.splice(index, 1);
            this.numberList.sort((a, b) => (a - b));
            this.size = this.numberList.length;
        }
    }

    get(index) {
        let currentLength = this.numberList.length;

        if (index > currentLength - 1 || index < 0) {
            throw new Error();
        } else {
            this.size = this.numberList.length;
            return this.numberList[index];
        }
    }
}

let list = new List();
console.log(list.size);
list.add(7);
list.add(5);
list.add(6);
console.log(list.size);
console.log(list.get(1)); 
list.remove(1);
console.log(list.size);
console.log(list.get(1));
console.log(list.size);
