function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    let length = s.length;

    for(let i = 0; i <= Math.floor(length); i++){
        if(s[i] !== s[length-1-i]){
            answer = 'NO';
            break;
        }
    }
   
    return answer;
}

function solution2(s){
    let answer="YES";
    s=s.toLowerCase();
    
    let reverse = s.split('').reverse().join('');
    if(s !== reverse){
        answer = 'NO';
    }
   
    return answer;
}

let str="goooG";
console.log(solution2(str));