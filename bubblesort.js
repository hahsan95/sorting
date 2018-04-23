// function bubbleSort(array) {
//   let numOfSwaps = 0;
//   for (let i = 0; i < array.length; i++){
//     if (i !== array.length) {
//       if (array[i] > array[i+1]) {
//         let store = array[i];
//         array[i] = array[i+1];
//         array[i+1] = store;
//         numOfSwaps++;
//       }
//     }
//   }

//   if (numOfSwaps !== 0){
//     bubbleSort(array);
//   }

//   return array;

// }

let max = [];

function bubbleSort(array) {
  let maxNum = 0;
  for (let i = 0; i < array.length; i++){
    if (maxNum < array[i]){
      maxNum = array[i];

    }
    if (array[i] > array[i+1]) {
      let store = array[i];
      array[i] = array[i+1];
      array[i+1] = store;
    }
  }

  if (array[array.length] === maxNum){
    max.push(array.pop());
  }

  if (array.length === 1) {
    array.concat(max);
    return array;
  }
  else {
    bubbleSort(array);
  }
}

