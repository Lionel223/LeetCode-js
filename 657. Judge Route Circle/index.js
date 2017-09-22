/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var up = 0, left = 0;
    for (var i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U':
                up = up + 1;
                break;
            case 'D':
                up = up - 1;
                break;
            case 'L':
                left++;
                break;
            case 'R':
                left = left - 1;
                break;
        }
    }
    if (up === 0 && left === 0) {
        return true;
    }
    return false;
};