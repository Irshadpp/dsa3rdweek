// let students = [
//     { name: "Alice", age: 25, grade: "A" },
//     { name: "Bob", age: 20, grade: "B" },
//     { name: "Charlie", age: 23, grade: "C" },
//   ];


// function sort(arr){
//     let n = arr.length;
//     if(n<=1){
//         return
//     }
//     let leftArr = arr.slice(0, Math.floor((n/2)));
//     let rightArr = arr.slice(Math.floor((n/2)))
//     sort(leftArr);
//     sort(rightArr);
//     merge(leftArr, rightArr, arr)
// }

// function merge(leftArr, rightArr, arr){
//     let leftSize = Math.floor(arr.length/2);
//     let rightSize = arr.length - leftSize;
//     let l = r = i = 0;
//     while(l<leftSize && r<rightSize){
//         if(leftArr[l].age < rightArr[r].age){
//             arr[i] = leftArr[l];
//             i++;
//             l++;
//         }else{
//             arr[i] = rightArr[r];
//             i++;
//             r++;
//         }
//     }
//     while(l<leftSize){
//         arr[i] = leftArr[l];
//         i++;
//         l++;
//     }
//     while(r<rightSize){
//         arr[i] = rightArr[r];
//         i++;
//         r++;
//     }
// }

// sort(students)

// console.log(students)




// function sort(arr, start, end){
//     if(start>=end){
//         return
//     }

//     let pivot = partition(arr, start, end);
//     sort(arr, start, pivot-1);
//     sort(arr, pivot+1, end);
// }

// function partition(arr, start, end){
//     let pivot = arr[end];
//     let j = start -1;
//     for(let i = start; i<end; i++){
//         if(pivot.age>arr[i].age){
//             j++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
//     j++;
//     [arr[j], arr[end]] = [arr[end], arr[j]];
//     return j;
// }

// sort(students, 0, students.length-1);
// console.log(students);