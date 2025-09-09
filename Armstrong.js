// 12. Check Armstrong Number

function isArmstrong(num) {
    const digits = num.toString().length;
    let sum = 0;
    let temp = num;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, digits);
      temp = Math.floor(temp / 10);
    }
  
    return sum === num ? 'Armstrong' : 'Not Armstrong';
  }
  
  console.log(isArmstrong(153));  // Output: Armstrong
  