//Question 1
//find odd numbers
var oddNumber = (array) => {
 
    var result = [];
    
    for(let i = 0; i < array.length; i++){
      
      if(array[i] % 2 !== 0){
         
         result += array[i] + " ";
      }
      
    }
    return result.trim();
  };
  
  console.log(oddNumber([1,2,3,4,5]));