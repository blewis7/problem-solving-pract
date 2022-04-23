// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let nums = new Set(arr);
    let count = 0;
    for (let num of arr){
        nums.delete(num);
        if (nums.has(target-num)) count++;
    }
    return count;
}
