function fibsRec(num){

    if (num <= 0) {
                    return [0];
    } else if(num === 1){
                    return [0,1];
    }else{
      let result = fibsRec(num-1);
      result.push(result[result.length - 1] + result[result.length - 2]);
      return result;
    }


}