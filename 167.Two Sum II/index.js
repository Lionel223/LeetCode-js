/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    var tmp = new Map();
    for(var i = 0; i<nums.length; i++){
        if(tmp.has(nums[i])){
            return [tmp.get(nums[i])+1,i+1];
        }
        tmp.set(target-nums[i],i);
    }
};