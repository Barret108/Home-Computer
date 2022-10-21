
// sets phrase to inputed sentence
let phrase = prompt("Enter phrase here!");
// splits sentence into sperate words
let words = phrase.split(" ");
// sets the longest word to 0
let longestWord = '';
// itters loop and checks if word is longer than longestWord then lW will be replaced
for(let word of words) {
    if(word.length > longestWord.length)
    longestWord = word;
}

console.log(longestWord);
