//Question 3 
//Sum of all the numbers in an array

function sumOfNumbers(arr) {
    let result = 0;
  
    for(let i = 0; i < arr.length; i++){
      
        result += arr[i];
    
   }
   return result;
   
  };
  
  
  console.log(sumOfNumbers([1,2,3,4,5]));