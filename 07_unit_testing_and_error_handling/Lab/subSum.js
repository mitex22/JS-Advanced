function subSum(...params) {
    let param1 = params.shift();
    if (!Array.isArray(param1) || param1.filter((num) => (typeof num !== 'number')).length !== 0) {
        return NaN;
    } else {
        let [start, end] = params;
        start = start < 0 ? 0 : start;
        end = end > param1.length - 1 ? param1.length - 1 : end;

        let sum = 0;

        for (let i = start; i <= end; i++) {
            sum += param1[i];
        }

        return sum;
    }
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);