function pieceOfPie(...params) {
    let [pies, startPie, endPie] = [...params];

    let startIndex = pies.indexOf(startPie);
    let endIndex = pies.indexOf(endPie);

    return pies.slice(startIndex, endIndex + 1);
}

pieceOfPie(['Pumpkin Pie',
            'Key Lime Pie',
            'Cherry Pie',
            'Lemon Meringue Pie',
            'Sugar Cream Pie'],
            'Key Lime Pie',
            'Lemon Meringue Pie'
);
pieceOfPie(['Apple Crisp',
            'Mississippi Mud Pie',
            'Pot Pie',
            'Steak and Cheese Pie',
            'Butter Chicken Pie',
            'Smoked Fish Pie'],
            'Pot Pie',
            'Smoked Fish Pie'
);