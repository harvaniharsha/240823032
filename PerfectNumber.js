// 17. Check Perfect Number
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num ? 'Perfect' : 'Not Perfect';
  }
  
  console.log(isPerfect(28));  // Output: Perfect
  