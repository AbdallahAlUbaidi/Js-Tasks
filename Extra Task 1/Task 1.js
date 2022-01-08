const pattern1 = /^([A-Z])+([A-Z])*\s*$/g;
const pattern2 = /^([a-z])+([a-z])*\s*$/g;
const pattern3 = /^([A-Z])([a-z])*\s*$/g;

function check(word) 
{
    return (pattern1.test(word) || pattern2.test(word) || pattern3.test(word));
};

const input = "ggg";  //Input
console.log(check(input));