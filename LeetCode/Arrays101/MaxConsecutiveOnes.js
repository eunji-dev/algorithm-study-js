/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let result = nums.join('').split('0').map((i)=> i.length);
    return Math.max(...result);  
};