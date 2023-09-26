function cookingByNumbers(...params) {
    let num = Number(params.shift());

    let funcObj = {
        chop: (x) => { return (x / 2)},
        dice: (x) => { return (Math.sqrt(x))},
        spice: (x) => { return (x + 1)},
        bake: (x) => { return (x * 3)},
        fillet: (x) => { return (x - x * 0.2)}
    }

    for (let i = 0; i < params.length; i++) {
        num = funcObj[params[i]](num);
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');