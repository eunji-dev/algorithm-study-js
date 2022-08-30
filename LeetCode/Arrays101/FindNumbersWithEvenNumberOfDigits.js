/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let stringArr = nums.map((i)=>i.toString());
    return stringArr.filter((i)=>i.length % 2 === 0 ).length;
    
};