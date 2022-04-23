// add whatever parameters you deem necessary
function average(x, y){
    return (x + y)/2;
}

function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        if (average(arr[left], arr[right]) === avg) return true;
        if (average(arr[left], arr[right]) > avg){
            right--;
        } else {
            left++;
        }
    }
    return false;
}
