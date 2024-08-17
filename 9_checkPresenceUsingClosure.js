function numberChecker(numbers){
    return function(num){
        return numbers.includes(num);
    }
}
const arr = [3,232,212,12];
const checkNum = numberChecker(arr);
console.log(checkNum(23));
console.log(checkNum(232));