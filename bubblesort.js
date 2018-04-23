// function bubbleSort (array) {
//   let numOfSwaps = 0
//   for (let i = 0; i < array.length; i++) {
//     if (i !== array.length) {
//       if (array[i] > array[i + 1]) {
//         let store = array[i]
//         array[i] = array[i + 1]
//         array[i + 1] = store
//         numOfSwaps++
//       }
//     }
//   }

//   if (numOfSwaps !== 0) {
//     bubbleSort(array)
//   }

//   return array
// }

/*
alternate solution
*/

function bubbleSort (array) {
  let length = array.length+4;
  console.log(length);
  while (length > 0){
    length--
    for (let i = 0; i < length; i++) {
      let maxNum = 0;
      if (maxNum < array[i]) {
        maxNum = array[i];
      }

      if (i !== array.length) {
        if (array[i] > array[i + 1]) {
          let store = array[i];
          array[i] = array[i + 1];
          array[i + 1] = store;
        }
      }
      if (array[length] === maxNum){
            length--;
      }
    }
  }
  return array;
}

bubbleSort([1,3,2,5,4]);
