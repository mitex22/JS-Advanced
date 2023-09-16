function diagonalSum(matrix) {
    let arraysCount = matrix.length;
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let i = 0; i < arraysCount; i++) {
        leftDiagonal += matrix[i][i];
    }
    
    for (let i = 0; i < arraysCount; i++) {
        rightDiagonal += matrix[i][arraysCount - 1 - i];
    }

    console.log(leftDiagonal, rightDiagonal);
}

diagonalSum(
    [
        [20, 40],
        [10, 60]
    ]
);
diagonalSum(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
);