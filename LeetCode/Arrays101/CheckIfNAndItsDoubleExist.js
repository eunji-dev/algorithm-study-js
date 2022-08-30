/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
        return arr.filter((i)=>arr.includes(i*2));
    };


//another solution
var checkIfExist = function(arr) {
for (i = 0; i < arr.length; i++) {
    for (j = i+1; j < arr.length; j++) {
        if (arr[i] == 2*arr[j] || 2*arr[i] == arr[j]) {
            return true
        }
    }
}
return false
};

