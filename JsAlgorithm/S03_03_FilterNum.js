function solution(str){
    let answer = '';
    for(let x of str){
        if(!isNaN(x)){
            answer += x;
        }
    }
    return parseInt(answer);
}

function solution2(str){
    let answer = 0;
    for(let x of str){
        if(!isNaN(x)){
            answer = answer * 10 + Number(x); 
            // 10을 곱하는 이유는 자릿수 변경을 위해서
            // 28 = 20 + 8
            // 283 = 280 + 3
        }
    }

    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));