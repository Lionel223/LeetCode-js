function twoSum(numArr, sum) {
    var pairs = [];
    var hashTable = [];

    for (var i = 0; i < numArr.length; i++) {
        var currNum = numArr[i];
        var counterpart = sum - currNum;
        if (hashTable.indexOf(counterpart) !== -1) {
            pairs.push([currNum, counterpart]);
        }
        hashTable.push(currNum);
    }
    return pairs;
}

var a = twoSum([40, 11, 19, 17, -12], 28);
console.log(a);