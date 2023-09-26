function printAnArrayWithGivenDelimiter(...params) {
    let [arr, delimiter] = [...params];

    console.log(arr.join(delimiter));
}

printAnArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printAnArrayWithGivenDelimiter(['How about no?', 'I','will', 'not', 'do', 'it!'], '_');