/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let wordsFilter = words.filter(word=> {
        if( /^[qwertyuiop]*$/i.test(word) || /^[asdfghjkl]*$/i.test(word) || /^[zxcvbnm]*$/i.test(word) ){
            return true;
        }
        return false;
    })
    return wordsFilter;
};