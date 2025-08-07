// Write code below 💖

function isPalindrome(word) {
    let reversedWord = "";

    let lowerWord = word.toLowerCase();

    for (let i = lowerWord.length - 1; i >= 0; i--) {
        reversedWord += lowerWord[i];
    }

    return reversedWord === lowerWord;
}

console.log(isPalindrome("Madam"));
