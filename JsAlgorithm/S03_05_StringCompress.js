function solution(s){
    let cnt = 1;
    let result = '';
    s = s+' '; // i+1을 계산하기위해 빈 문자열을 더해줌
    for(let i = 0; i < s.length-1; i++){
            if(s[i] === s[i+1]){
                cnt++;
            }else{
                result += s[i];
                if(cnt > 1){
                    result += String(cnt);
                }
                cnt = 1;
            }

    }
   return result;
}

let str="KKHSSSSSSSE";
console.log(solution(str));