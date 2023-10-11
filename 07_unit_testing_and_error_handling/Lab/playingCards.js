function playingCards(faceInput, suiteInput) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    // if (!validFaces.includes(faceInput)) {
    //     throw new Error;
    // }

    function isValidFace() {
        if (!validFaces.includes(faceInput)) {
            throw new Error('Wrong Face!!!');
        }
    }

    function isValidSuite() {
        if (!validSuits.includes(suiteInput)) {
            throw new Error('Wrong Suite!!!');
        }
    }

    try {
        isValidFace();
        isValidSuite();
    } catch (error) {
        console.log(`I caught that ${error.message}`);
    }

    return {
        face: faceInput,
        suite: {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }, 
        toString(){
            return `${this.face}${this.suite[suiteInput]}`;
        }
    }
}

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());
console.log(playingCards('2', 'Z').toString());