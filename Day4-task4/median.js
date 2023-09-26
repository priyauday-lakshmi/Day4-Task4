function median(arr1, arr2) {
    let merge = [...arr1, ...arr2];
    
  
    if (merge.length % 2 === 0) {
      let mid1 = merge[merge.length / 2 - 1];
      let mid2 = merge[merge.length / 2];
      let mid3 = (mid1 + mid2) / 2;
      return mid3;
    } else {
      let mid4 = merge[Math.floor(merge.length / 2)];
      return mid4;
    }
  }
  
  console.log(median([1, 2, 3, 6], [5, 3, 2, 1]));