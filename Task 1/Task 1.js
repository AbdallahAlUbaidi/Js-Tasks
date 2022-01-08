function fibonacci(n) 
{
    if(n > 1)
        return fibonacci(n-1) + fibonacci(n-2);
    else if(n === 1)
        return 1;
    else if(n === 0)
        return 0;
};

const input = 3;  //The input Value

console.log(fibonacci(input));
