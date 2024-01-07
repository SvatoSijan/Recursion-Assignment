function fibs(num) {
    if (num <= 0) {
      return [];
    }
  
    let result = [0, 1];
  
    while (num>1) {
      result.push(result[result.length - 1] + result[result.length - 2]);
      num = num-1;
    }
  
    return result;
  }
  