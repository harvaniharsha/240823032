// 15. Simple Calculator
function simpleCalculator(a, operator, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Error: Division by zero';
      default: return 'Invalid operator';
    }
  }
  
  console.log(simpleCalculator(4, '+', 2));  // Output: 6
  