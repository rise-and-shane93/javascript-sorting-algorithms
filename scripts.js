let nums = [37,41,38,35,7,29,32,46,6,19,22,1,17,18,34,8,33,10,24,42,28,3,27,2,12,20,49,25,44,30,39,40,31,36,47,14,9,13,21,23,16,48,15,5,26,4,45,50,11,43];

function bubbleSort(arr) {
    for (let i = 0; i < nums.length - 1; i++) {
        arr.forEach((element, index) => {
            if (index <= arr.length - 2) {
                let currItem = element;
                let nextItem = arr[index + 1];
                if (currItem > nextItem) {
                    arr[index + 1] = currItem;
                    arr[index] = nextItem;
                }
            }
        });
    }
}



bubbleSort(nums);

console.log(nums);