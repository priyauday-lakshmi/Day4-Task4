//Question g
//Remove duplicates from an array

function remDup(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!arr1.includes(arr[i])) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }
  
  console.log(remDup([1, 2, 3, 4, 3, 1]));