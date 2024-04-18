class Formatter {
  
   static capitalize(string) {
    let arrayOfString = string.split('')            //makes string an array
    let toUpperCase1st = arrayOfString.shift([0]).toUpperCase()  //takes first element of array out and capitalizes it
    return [toUpperCase1st, ...arrayOfString].join('')      //returns capitalized letter to array and joins back into a string
   }

   static sanitize(string){
    let cleanedString = string.replace(/[^a-zA-Z0-9\s\-']/g, '') // [^a-zA-Z0-9\s\-'] matches any character that is not alphanumeric (a-zA-Z0-9), not a space (\s), not a dash (\-), and not a single quote (').
    return cleanedString
   }

   static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'] //array of word exceptions to not capitalize
    return string.toLowerCase()      //starts by lowercasing entire string
        .split(' ')                 //makes entire string an array
        .map((word, index) => {         // maps this array with two parameters word and index
            if (index === 0 || !exceptions.includes(word)) {    // if the index is 0 or the word is not one included in the exceptions list
                return word.charAt(0).toUpperCase() + word.slice(1)  //then capitalize the first letter of the word and add it back to the rest of that word
            } else {
                return word   //return the word if its not at index 0 or it is in the exception array
            }
        })
        .join(' ')   //join the array back together to form the new sentence
}
}






