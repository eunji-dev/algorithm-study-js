// 투 포인터 알고리즘
function solution(m, arr){
    let answer = 0;
    let left = 0;
    let sum = 0;

    for(let right = 0; right < arr.length; right++){
        sum += arr[right];
        if(sum === m){
            answer++;
        }
        // m보다 크거나 같을경우 m보다 작아질 때 까지 
        // 계속 left값을 이동하면서 sum에서 빼야함
        while(sum >= m){
            sum -= arr[left];
            left++
            // sum에서 left값을 뺀 뒤 다시 m과 같은지 비교 해야야함
            if(sum === m){
                answer++;
            }
        }
    }
   return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));