function wordsUppercase(...params) {
    let str = params.shift();

    let matches = str.match(/\w+/gim);

    output = matches.map(a => a.toUpperCase()).join(', ');

    console.log(output);

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');