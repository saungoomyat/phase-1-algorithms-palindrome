function reverseWord(word) {
  const input = word.split('')
  const reverseInput = input.reverse()
  return reverseInput.join('')
}


function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseWord(word);

  return word === reversedWord;

}





/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
