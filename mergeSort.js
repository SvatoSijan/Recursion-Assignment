function mergeSort(arr) {
    if (arr.length === 0) return "Provide array"
      if (arr.length === 1) return arr;
    if (arr.length < 2) {
      return arr;
    } else {
      const mid = Math.floor(arr.length / 2);
      const lArr = arr.slice(0, mid);
      const rArr = arr.slice(mid);
  
      return merge(mergeSort(lArr), mergeSort(rArr));
    }
  }
  
  function merge(lArr, rArr) {
    let sortedArr = [];
  
    while (lArr.length && rArr.length) {
      if (lArr[0] <= rArr[0]) {
        sortedArr.push(lArr.shift());
      } else {
        sortedArr.push(rArr.shift());
      }
    }
  
    return [...sortedArr, ...lArr, ...rArr];
  }