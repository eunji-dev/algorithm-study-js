function solution(m, product){
    let answer = 0;
    let n = product.length; // 학생 수

    // 비용 정렬
    product.sort((a,b) => (a[0]+a[1]) - (b[0]+b[1]))

    // 할인 받는 경우
    for(let i = 0; i < n; i++){
        // i번째 상품을 할인받고 전체 예산에서 뺀 금액
        let money = m - (product[i][0]/2 + product[i][1]);
        let cnt = 1;
        for(let j = 0; j < n; j++){
            if(j !== i && (product[j][0] + product[j][1]) > money){
                // 다음 상품금액이 현재 남은 예산보다 클경우 탐색 멈춤
                break;
            }
            if(j !== i && (product[j][0] + product[j][1]) <= money){
                // j상품의 비용(상품+배송비)이 남은 예산보다 작거나 같을 경우에만 구매 가능
                // i번째 상품은 이미 할인을 받아 구매했기 때문에 포함하면 안됨
                money -= (product[j][0] + product[j][1]);
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));