//Question b
//Convert all the strings to title caps in a string array

let titleCaps = (str) =>{

    //Split the string and stored it in the array
        let strArr = str.split(" ");

        for( let i = 0; i < strArr.length; i++){
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);

        }
        let newString = strArr.toString();
        let newString1 = strArr.join(" ");
        return newString1;

}


console.log(titleCaps("this is my little angel"));