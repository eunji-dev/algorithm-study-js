function solution(a){ 
    let max = Number.MIN_SAFE_INTEGER;
    let rowSum = 0; // |
    let colSum = 0; // ㅡ
    let crossSum1 = 0; // \
    let crossSum2 = 0; // /
    let length = a.length;

    for(let i = 0; i < length; i++){
        rowSum = 0;
        colSum = 0;
        for(let j = 0; j < length; j++){
            rowSum += a[i][j];
            colSum += a[j][i];
            console.log('rs',rowSum)
        }
        max = Math.max(max,rowSum,colSum);
    }

    for(let i = 0; i < length; i++){
        crossSum1 += a[i][i];
        crossSum2 += a[i][length-i-1];
    }
    max = Math.max(max, crossSum1, crossSum2 );
    
    return max
}

let a=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];

console.log(solution(a))
