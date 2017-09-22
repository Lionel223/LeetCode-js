function isPalindrome(string) {
    string = string.toLowerCase();
    var Arr = string.split('');
    var validateArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    Arr.forEach(char => {
        if (validateArr.indexOf(char) !== -1) lettersArr.push(char);
    })
    // console.log(lettersArr);
    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
}

var a = isPalindrome("Madam I'm Adam");
console.log(a);