// 19. Number is Positive, Negative or Zero
function checkNumberSign(num) {
    if (num > 0) return 'Positive';
    if (num < 0) return 'Negative';
    return 'Zero';
  }
  
  console.log(checkNumberSign(-5));  // Output: Negative
  