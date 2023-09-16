function rotateArray(...params) {
    
    let [array, rotations] = [...params];

    for (let i = 0; i < rotations; i++) {
        array.push(...array.splice(0, array.length - 1))
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);