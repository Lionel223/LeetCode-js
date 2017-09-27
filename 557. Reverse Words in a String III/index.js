/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(string) {
    let stringArr = string.split(' ');
    let reverseArr = [];
    stringArr.forEach( word => {
        let reverseWord = '';
        for(let i = word.length -1; i >= 0; i--){
            reverseWord += word[i];
        }
        reverseArr.push(reverseWord);
    });
    return reverseArr.join(' ');
};