// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var isValid = function(s) {   
//     let map = {
//         '(' : ')',
//         '{' : '}',
//         '[' : ']'
//     };
//      for(let i = 0; i < s.length; i++){
//         if(map[s[i]] !== s[i+1]){
//             return false
//         }else{
//             i++;
//         }
//     }
//     return true
// };

// 위의 방식으로 풀었을 경우 문제에서 주어진 테스트 케이스 3가지는 만족했으나
// '{[]}' 의 경우 틀리게 된다.
// 조건중 2. Open brackets must be closed in the correct order.
// 를 만족하는 케이스이기 때문에 처음 푼 방식으로 접근할 수 없다.

// 풀이 참고
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {   
    if(s.length % 2 !== 0){
        return false;
    }

    let stack = [];
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
     for(let i = 0; i < s.length; i++){
         console.log(stack);
        if(map[s[i]]){
            stack.push(map[s[i]]);
        }else{
            if(stack[stack.length-1] === s[i]){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false
};