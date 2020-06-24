// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }
// --------------------------------------
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }
// -------------------------------------


// --- No reverse helper ---  For Loop




function reverse(str) {
// Create an empty string called 'reversed'
let reversed = '';

// For each character in the provided string.
// take the character and add it to the start of 'reversed'
for (let character of str) {
    reversed = character + reversed;
    }
// Return the variable 'reversed'
    return reversed;
}
module.exports = reverse;
