// // Write your code below this line
// In this challenge, you’ll write a decoder.
// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
// The number in the string represents how many characters each letter should shift. For example:
// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"




// const code = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// function decoder(str) {
//     let toLowerCase = str.toLowerCase();
//     let splitStr = toLowerCase.split('')
//     console.log(splitStr)
//     let shiftNum = +splitStr.shift();
//     console.log(shiftNum)
//     let shiftArr = [];
//     splitStr.forEach(element => {
//      let alphaNum = alphaArr.indexOf(element)
//      console.log(alphaNum);
//      let newLetter = aplhaArr[aplhaNum + shiftNum]
//      shiftArr.push(newLetter)
//     })
// console.log(shiftArr)    
// let jointShiftArr = 

// };
// decoder('2test')


//solution Lab June13
// Write your code below this line

// function decodeString(code) {
//     // Capture the number to decode the string
//     let decipher = Number(code[0])
//     // Create a solution string to add letters to one-by-one
//     let solution = ""
//     // Start iterating through the string, starting at index 1 to avoid the decipher
//     for (let i = 1; i < code.length; i++) {
//       // Capture the ascii code for the given letter, plus the value of the decipher
//       let strValue = code[i].charCodeAt() + decipher
//       // Add the letter the belongs to the updated ascii value to the solution string
//       solution += String.fromCharCode(strValue)
//     }
//     // return the solution string
//     return solution
//   }


