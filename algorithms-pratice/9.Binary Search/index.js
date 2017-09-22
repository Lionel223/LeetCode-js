function binarySearch(numArr, key) {
    var middleIdx = Math.floor(numArr.length / 2);
    var middleElem = numArr[middleIdx];

    if(middleElem === key) return true;
    else if(middleElem<key && numArr.length>1){
        return binarySearch(numArr.splice(middleIdx,numArr.length),key);
    }
    else if(middleElem>key && numArr.length>1){
        return binarySearch(numArr.splice(0,middleIdx),key);
    }
    else return false;
}

var a  = binarySearch([5,7,12,16,36,39,42,56,71],15);
console.log(a);