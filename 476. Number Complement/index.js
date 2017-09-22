/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // use replace
    // then parseInt
    let complement = num.toString(2).replace(/0/g,2).replace(/1/g,0).replace(/2/g,1);
    return parseInt(complement,2);
};