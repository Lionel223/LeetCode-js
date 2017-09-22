/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    const len = s.length-1;
    var reverse = '';
    for(var i=0;i<=len;i++){
        reverse += s.charAt(len-i);
    }
    return reverse;
};