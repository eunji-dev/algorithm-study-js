function solution(arr1, arr2){
    let answer=[];
    let p1 = 0;
    let p2 = 0;
    let n = arr1.length;
    let m = arr2.length;

    while(p1 < n && p2 < m){ // 두 배열중 하나라도 탐색이 끝날경우 stop
        if(arr1[p1] <= arr2[p2]){
            answer.push(arr1[p1++]);
            p1++;
        }else{
            answer.push(arr2[p2++]);
        }
    }
    while(p1<n){
        answer.push(arr1[p1++]);
    }
    while(p2<m){
        answer.push(arr2[p2++]);
    }
  
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));