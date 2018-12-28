function mergeSort(arr) {
    
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft++]);
        } else {
            result.push(right[indexRight++]);
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([3,2,4,6,5,9,8]));
console.log(merge.caller === mergeSort);
//console.log(merger([3,2,4,6,5,9,8]))