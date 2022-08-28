function solution(n, arr){
   let answer = 0;
   let max = Number.MIN_SAFE_INTEGER;
   
   for(let v of arr){
    let sum = 0;
    let tmp = v;

        while(tmp){
            sum += (tmp % 10);
            tmp = Math.floor(tmp/10);
        }
        if(max < sum){
            max = sum;
            answer = v
        }else if(max === sum){
            if(answer < v){
                answer = v;
            }
        }
        
    }
    console.log(answer)

   return answer
}

function solution2(n, arr){
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let v of arr){
     let sum = v.toString().split('').reduce((a,b) => a+ Number(b), 0);
         if(max < sum){
             max = sum;
             answer = v
         }else if(max === sum){
             if(answer < v){
                 answer = v;
             }
         }
         
     }
     console.log(answer)
 
    return answer
 }

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));