// 18. Print All Divisors

function printDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) divisors.push(i);
    }
    console.log(divisors.join(' '));
  }
  
  printDivisors(10);  // Output: 1 2 5 10
  