//Question e
//Return all the palindrome in an array

function palindromesInArray(arr) {
    let palindrome = [];
  
    
    for (let i = 0; i < arr.length; i++) {
      
     
     let reverseStr = arr[i].split("");
         reverseStr = reverseStr.reverse();  
         reverseStr = reverseStr.join(""); 
     
    
      if (arr[i] === reverseStr) {
        
        palindrome.push(arr[i]);
      }
    }
  
    return palindrome;
  }
  
  console.log(palindromesInArray(["racecar", "hello", "level", "world", "mom"]));
    