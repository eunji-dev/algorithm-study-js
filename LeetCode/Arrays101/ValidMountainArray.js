/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    let length = arr.length
    if(length < 3){
        return false
    }
    
    let mountain = Math.max(...arr);
    let mountainIndex = arr.indexOf(mountain);
    
    if(mountainIndex === 0 || mountainIndex === length-1){
        return false
    }
    
    for(let i = 1; i<length; i++){
        if(i <= mountainIndex){
            if(arr[i-1] >= arr[i]){
                return false
            }
        }else{
            if(arr[i-1] <= arr[i]){
                return false
            }
        }
    }
    return true
    
};