function solution(n, k, card){
    let answer;
    let tmp = new Set(); // Set은 중복을 저장하지 않는 자료구조
    
    for(let i = 0; i < n - 2; i++){
        for(let j = i+1; j < n - 1; j++){
            for(let s = j+1; s < n; s++){
                tmp.add(card[i]+card[j]+card[s]);
            }
        }
    }
    // set 자료 구조는 sort를 할 수 없어서 배열로 변환 후 큰 수 부터 정렬
    let a = Array.from(tmp).sort((a,b) => b - a);
    answer = a[k-1]
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));