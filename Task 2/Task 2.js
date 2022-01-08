function fizzBuzz(n) 
{
    var array = [];
    for(let i = 1; i <= n;i++)
    {
        let answer ="";
        if(i % 3 === 0)
            answer = "Fizz"
        if(i % 5 === 0)
            answer = answer + "Buzz"
        if(i % 3 !== 0 && i % 5 !== 0)
            answer = `${i}`;
        array[i - 1] = answer;
    }
    return array;
};

const input = 3 //input


console.log(fizzBuzz(input));