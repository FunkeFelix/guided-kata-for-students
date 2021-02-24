function count (string) {  
    //if string is empty return {}
    if (string.length === 0) return {} 
    // create a variable which is an object
    let obj = {};
    // iterate over element then check if the current selected element is already a key inside if the object (if not) create key and inital value
    for (let i=0; i<string.length; i++) {
      if(!obj[string[i]]) {
        obj[string[i]] = 1 
      } else {
        //increase value of current key for each furhte roccurance
        obj[string[i]]++
      }
    }
    return obj
  }
  
  count("abaaabbaa")

  //alternativ solution
  function alternativCount (string) {  
    let splitted = string.split("");
    splitted.reduce((acc, val) => {
      acc[val]= (acc[val] || 0)+1
      return acc
    },{})
      
   }
   alternativCount("aabbbabababa")


   const filterActiveElements = (input) => {
    let cleanedArr = [];
    let obj = JSON.parse(input)
    obj.data.forEach((element, index) => {
      if (element.isActive === true) {
        cleanedArr.push(element)
      }
    })
    return cleanedArr
  };
  
// kata from Monday22. Februar. given an string check the binary code of ech element if element has more oesn then zero it should be removed. also result should not return dublicates
  function moreZeros(s) {
    //create variables to assign the result of the binary process as well as removing the duplicates from 
    let cleaned = [];
    let binary = [];
    //making string to binary code
    for (let i = 0; i < s.length; i++) {
      binary.push(s.charCodeAt(i).toString(2));
    }
    binary.forEach((code) => {
      //loop over each binary and count ones and zeros
      let zero = 0;
      let ones = 0;
      for (let j = 0; j < code.length; j++) {
        if (code[j] == 0) {
          zero++;
        } else ones++;
      }
      //check if each binary has more zeros then ones
      //if so push it to the new array
      if (zero > ones) {
        cleaned.push(code);
      }
    });
    let result = [];
    //changing binary again to string
    for (newBinary of cleaned) {
      result.push(String.fromCharCode(parseInt(newBinary, 2).toString(10)));
    }
    //removing all the doublicates
    return [...new Set(result)];
  }
  
  moreZeros('abcde')


  //kata from Wed 24.02 removing all # elements from the string as well as each element before the # element

  function cleanString(s) {
    //make it possbile to access each element of the string with array methods
    s = s.split('')
    //loop over the new array and access every element
    for(let i =0 ; i<s.length ; i++){
      //check if the selected element is a #
      //if the element is a # you shoudl remove the element and the one before
      //CARE: the index (i) of the loop keeps going on while the index of the array changes if you remove something
      //possibilty is to replace the elements with an empty string and filter empty strings out
      //dont forgett to reset the i of the loop
      if(s[i] === "#"){
        s[i] = "" 
        s[i-1] = ""
        s = s.filter(el => 
          el !== ""
        )
         i-=2
      }   
    }
    //join the array to a string again 
     return s.join("")
   };
     
     cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##')