function palindrome(text) {
var reversedText  = text.toLowerCase()
                    .split('').reverse().join('');
return text === reversedText;
}
