function solution(a){ 
    let length = a.length        
    let rank = new Array(length).fill(1)
        for(let i =0; i < length; i++){
            for(let j = 0; j < length; j++){
                if(a[i] < a[j]){
                    rank[i]++
                }

            }
        }
    return rank;
}

let a=[87, 89, 92, 100, 76];
console.log(solution(a))
