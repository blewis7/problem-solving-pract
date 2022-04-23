// add whatever parameters you deem necessary
function sameFrequencyHelper(num){
    const map = new Map();
    const arr = num.toString().split("");
    for (let num of arr){
        let numCount = map.get(num) || 0; 
        map.set(num, numCount + 1);
    }
    return map;
}

function sameFrequency(num1, num2) {
    if (num1 < 0 || num2 < 0) return undefined;
    num1Freq = sameFrequencyHelper(num1);
    num2Freq = sameFrequencyHelper(num2);
    for (let num of num1Freq.keys()){
        if (num1Freq.get(num) !== num2Freq.get(num)) return false;
    }
    return true;
}
