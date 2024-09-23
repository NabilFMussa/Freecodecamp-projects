const inputContent = document.getElementById("text-input");
const outputContent = document.getElementById("result");

document.getElementById("check-btn").addEventListener("click", function() {

  if (inputContent.value ==="") {
  alert("Please input a value");
  return false;
}  
  const inputWord = inputContent.value;

  const cleanedInput = inputWord.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversed = cleanedInput.split('').reverse().join('');

  const isPalindrome = cleanedInput === reversed;

  if (isPalindrome) {
    outputContent.textContent = (`${inputWord} is a palindrome`);
  } else {
    outputContent.textContent = (`${inputWord} is not a palindrome`);
  }
});


