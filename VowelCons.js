// 14. Check Vowel or Consonant
function checkVowelConsonant(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase()) ? 'Vowel' : 'Consonant';
  }
  
  console.log(checkVowelConsonant('a'));  // Output: Vowel
  