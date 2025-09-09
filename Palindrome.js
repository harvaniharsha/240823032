
// 8. Palindrome Check (Number)
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversed;
  }
  
  function isPalindrome(num) {
    return num === reverseNumber(num) ? 'Palindrome' : 'Not Palindrome';
  }
  
  console.log(isPalindrome(121));  // Output: Palindrome
  