function solution(test){
    let answer = 0;
    let m = test.length; // 테스트 횟수
    let n = test[0].length; // 학생수

    for(let i = 1; i <= n; i++){ // i = 멘토
        for(let j = 1; j <= n; j++){ // j = 멘티
            let cnt = 0

            // 각 테스트 별 멘토, 멘티의 등수를 찾기
            for(let k =0; k < m; k++){
                let pi = 0;
                let pj = 0;

                for(let s = 0; s < n; s++){
                    if(test[k][s] === i){
                        pi = s; // i학생의 등수
                    }
                    if(test[k][s] === j){
                        pj = s; // j학생의 등수
                    }
                }
                
                if(pi < pj){ // i의 등수가 j의 등수보다 작을경우 
                    cnt++;
                }
            }
            if(cnt === m){
                answer++;
            }
        }
    }
   
    return answer;
}

let arr = [[3, 4, 1, 2],
            [4, 3, 2, 1], 
            [3, 1, 4, 2]];
console.log(solution(arr));