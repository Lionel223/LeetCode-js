function fibonacci(pos) {
    if (pos < 3) return 1;
    else return fibonacci(pos-1)+fibonacci(pos-2);
}
var a = fibonacci(40);
console.log(a);