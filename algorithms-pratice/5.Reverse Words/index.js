function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedArr = [];
    wordsArr.forEach(word=> {
        var reversedWord = '';
        for(var i=word.length-1;i>=0;i--){
            reversedWord+=word[i];
        }
        reversedArr.push(reversedWord);
    })
    return reversedArr.join(' ');
}
var a = reverseWords('Coding JavaScript');
console.log(a);