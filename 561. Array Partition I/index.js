/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let newNums = nums.sort((a, b)=> a-b);
    let length = newNums.length;
    var tmp = 0;
    for(i=0;i<=length-1;i++){
        if(i%2===0){
            tmp+=newNums[i];
        }
    }
    return tmp;
    
};