// 9. Check Prime Number
function isPrime(num) {
    if (num <= 1) return 'Not Prime';
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return 'Not Prime';
    }
    return 'Prime';
  }
  
  console.log(isPrime(11));  // Output: Prime
  