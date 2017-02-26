var number =Number(prompt('введіть n-порядок числа Фібоначі',number));
// function fibonacci(number){
//     var number,fib;
//     fib =[0,1];
//     for (var i =2; i <=number; i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }return fib[number]
// }
// document.write(fibonacci(number));

function fibonacciRecyrs(number){
    var fib;
    fib=[];
    if (number ===1){
        return 1
    }
    if (number ===2){
        return 1
    }else{
        return fibonacciRecyrs(number - 1) + fibonacciRecyrs(number - 2);
    }
}
    
    
document.write(fibonacciRecyrs(number));