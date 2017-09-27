function fibMemo(index, cache) {
    cache = cache || [];
    if(cache[index]) {
        console.log(`cache[${index}]`);
        return cache[index];
    }
    else{
        if(index<3) return 1;
        else{
            cache[index] = fibMemo(index-1,cache)+fibMemo(index-2,cache);
            return cache[index];
        }
        // return cache[index];
    }
}
var a = fibMemo(40);
console.log(a);