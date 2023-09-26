//Day4 - Task 4
//Question _1 find the oddnumbers


var arrNum = [1, 4, 9, 2, 7];

function oddNumbers(array) {
  
  var result = [];
  
  for(let i = 0; i < array.length; i++){
    
    if(array[i] % 2 !== 0){
       
       result += array[i] + " ";
    }
    
  }
  return result.trim();
};

console.log(oddNumbers(arrNum));
