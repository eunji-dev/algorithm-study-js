function solution(a){ 
    let length = a.length;
    // 상하좌우 계산 좌표
    let xArr = [-1,0,1,0]; // row |
    let yArr = [0,1,0,-1]; // col ㅡ

    let cnt = 0;
    
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            let isTop = 1;
            for(let k = 0; k < 4; k++){ // 4방향 탐색
                let xIndex = i+xArr[k];
                let yIndex = j+yArr[k];

                if(xIndex >= 0 && xIndex < length && yIndex >= 0 && yIndex < length && a[xIndex][yIndex] >= a[i][j]){
                    isTop = 0;
                    break
                }
            }
            if(isTop){
                cnt++
            }
        }
    }
    return cnt;
}

let a=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];

console.log(solution(a))
