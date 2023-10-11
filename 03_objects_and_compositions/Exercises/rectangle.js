function rectangle(width, height, color) {

    const rect = { width, height };
    rect.color = color.charAt(0).toUpperCase() + color.slice(1);
    rect.calcArea = () => rect.width * rect.height;

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

let rect2 = rectangle(5, 6, 'blue');
console.log(rect2.width);
console.log(rect2.height);
console.log(rect2.color);
console.log(rect2.calcArea());


// function rectangle(width, height, color) {

//     return {
//         width: Number(width), 
//         height: Number(height), 
//         color: color.charAt(0).toUpperCase() + color.slice(1),
//         calcArea: () => width * height
//     };
// }