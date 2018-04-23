function bubbleSort (array) {
  let numOfSwaps = 0
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length) {
      if (array[i] > array[i + 1]) {
        let store = array[i]
        array[i] = array[i + 1]
        array[i + 1] = store
        numOfSwaps++
      }
    }
  }

  if (numOfSwaps !== 0) {
    bubbleSort(array)
  }

  return array
}

let max = []

function bubbleSort (array) {
  let maxNum = 0
  let numOfSwaps = 0
  let length = array.length;

  if (!array.length) {
    return array
  }
  for (let i = 0; i < length; i++) {
    if (maxNum < array[i]) {
      maxNum = array[i]
      console.log(maxNum)
    }
  }
  if (array[length] === maxNum){
    length--;
  }
}

//     if (array[i] > array[i+1]) {
//       let store = array[i]
//       array[i] = array[i+1]
//       array[i+1] = store
//     }
//   }



//   if (array.length === 1) {
//     array.concat(max)
//     return array
//   }
