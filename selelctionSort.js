function insertionSort(arr = [6,4,32,2,7,8]){
    console.log(arr.length)
    for(let i=1; i<arr.length; i++){
        console.log(i)
        let temp = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr
}

console.log(insertionSort())