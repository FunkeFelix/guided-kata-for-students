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
      console.log(acc,val)
      acc[val]= (acc[val] || 0)+1
      return acc
    },{})
      
   }
   alternativCount("aabbbabababa")