function caesarCipher(str,num) {
    num = num%26;
    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for(var i=0;i<lowerCaseStr.length;i++){
        var currentLetter = lowerCaseStr[i];
        if(currentLetter===" "){
            newString+=currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex+num;
        if(newIndex>25) newIndex-=26;
        if(newIndex<0) newIndex+=26;
        if(str[i] === str[i].toUpperCase()){
            newString+=alphabet[newIndex].toUpperCase();
        }else newString+=alphabet[newIndex];
    }
    return newString;
}

var a = caesarCipher("Javascript",-900);
console.log(a);