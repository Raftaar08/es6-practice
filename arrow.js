// function doubleIt (num){
//     return num * 2;
// }
// const doubleIt = function(num){
//     return num * 2;
// }
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 3;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add (20, 59);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);